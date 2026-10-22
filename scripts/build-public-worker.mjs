/**
 * Public CAD Creator Worker production build.
 * The CAD app and private CAD engine remain owned by the SDK. This repository
 * only packages its reviewed public frontend/Worker snapshot.
 * Wrangler invokes this before deploy even when Cloudflare Builds' explicit
 * build command is unset.
 */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const app = path.join(root, 'apps/cad-creator');
const rootConfig = JSON.parse(fs.readFileSync(path.join(root, 'wrangler.jsonc'), 'utf8'));
const appConfig = JSON.parse(fs.readFileSync(path.join(app, 'backend/wrangler.jsonc'), 'utf8'));
function requireInvariant(value, reason) { if (!value) throw new Error('cad_public_worker_contract:' + reason); }
requireInvariant(rootConfig.name === appConfig.name, 'worker_name');
requireInvariant(rootConfig.main === 'apps/cad-creator/backend/' + appConfig.main, 'worker_source');
requireInvariant(rootConfig.assets?.directory === 'apps/cad-creator/frontend/dist', 'asset_directory');
requireInvariant(rootConfig.assets?.binding === appConfig.assets?.binding, 'asset_binding');
requireInvariant(JSON.stringify(rootConfig.assets.run_worker_first) === JSON.stringify(appConfig.assets.run_worker_first), 'worker_first_routes');
requireInvariant(JSON.stringify(rootConfig.routes) === JSON.stringify(appConfig.routes), 'domain_routes');
requireInvariant(JSON.stringify(rootConfig.d1_databases) === JSON.stringify(appConfig.d1_databases), 'database_bindings');
requireInvariant(JSON.stringify(rootConfig.r2_buckets) === JSON.stringify(appConfig.r2_buckets), 'r2_bindings');
requireInvariant(rootConfig.assets?.not_found_handling === 'single-page-application', 'spa_navigation');
function run(file, args, cwd) {
  const r = spawnSync(file, args, { cwd, stdio: 'inherit', env: process.env, shell: process.platform === 'win32' });
  if (r.error) throw r.error;
  if (r.status !== 0) throw new Error('cad_public_worker_build_failed:' + [file,...args].join(' ') + ':' + r.status);
}
const bin = path.join(app, 'node_modules/.bin/vite');
if (!fs.existsSync(bin)) {
  console.log('CAD public Worker: installing locked CAD Creator 2.6.12 dependencies');
  run('npm', ['ci', '--no-audit', '--no-fund'], app);
}
run('npm', ['run', 'worker:build'], app);
const dist = path.join(app, 'frontend/dist');
// The CAD studio is assembled from an immutable, versioned SDK source release,
// never the obsolete local 2.6.12 snapshot. Developer hosts can supply an
// existing approved checkout; CI/Worker builds bootstrap the same pinned source.
const studioLock = JSON.parse(fs.readFileSync(path.join(root,'catalog/studio-source.lock.json'),'utf8'));
requireInvariant(studioLock.schema === 'agentsam.cad.public.studio-source-lock.v1' && studioLock.status === 'approved', 'sdk_source_lock_not_approved');
requireInvariant(typeof studioLock.approved_sdk_commit === 'string' && /^[a-f0-9]{40}$/.test(studioLock.approved_sdk_commit), 'sdk_source_commit_not_pinned');
let tempSdkDir = null;
let sdkDir;
if (process.env.AGENTSAM_SDK_SOURCE_ROOT?.trim()) {
  sdkDir = path.resolve(process.env.AGENTSAM_SDK_SOURCE_ROOT);
} else {
  tempSdkDir = fs.mkdtempSync(path.join(os.tmpdir(), 'agentsam-cad-sdk-release-'));
  sdkDir = tempSdkDir;
  const sourceUrl = studioLock.repository_url;
  requireInvariant(sourceUrl === 'https://github.com/SamPrimeaux/agentsam-sdk.git', 'sdk_source_url_unapproved');
  run('git', ['clone','--quiet','--filter=blob:none',sourceUrl,sdkDir], root);
  run('git', ['-C',sdkDir,'checkout','--quiet','--detach',studioLock.approved_sdk_commit], root);
  run('npm', ['ci','--no-audit','--no-fund'], path.join(sdkDir,'apps/cad-creator'));
}
const sdkCad = path.join(sdkDir, 'apps/cad-creator');
requireInvariant(fs.existsSync(path.join(sdkCad, 'agentsam.app.json')), 'sdk_cad_source_missing');
const sdkManifest = JSON.parse(fs.readFileSync(path.join(sdkCad,'agentsam.app.json'),'utf8'));
requireInvariant(sdkManifest.id === 'cad-creator', 'sdk_cad_app_identity');
requireInvariant(sdkManifest.version === studioLock.approved_app_version, 'sdk_source_version_unapproved');
const sdkBuild = path.join(sdkCad,'frontend/dist');
run('npm', ['run', 'build', '-w', '@inneranimalmedia/agentsam-cad-frontend', '--', '--base=/studio/'], sdkCad);
requireInvariant(fs.existsSync(path.join(sdkBuild,'index.html')), 'sdk_studio_bundle_missing');
const studioDest = path.join(app,'frontend/dist/studio');
fs.rmSync(studioDest, {recursive:true,force:true});
fs.mkdirSync(studioDest,{recursive:true});
fs.cpSync(sdkBuild,studioDest,{recursive:true});
const sdkIndex = fs.readFileSync(path.join(studioDest,'index.html'),'utf8');
// Cloudflare Assets redirects nested /index.html to /, so expose an explicit
// static HTML entry for the Worker's /studio route without redirect cycles.
fs.copyFileSync(path.join(studioDest,'index.html'),path.join(app,'frontend/dist/studio-entry.txt'));
requireInvariant(sdkIndex.includes('/studio/assets/'), 'sdk_studio_base_invalid');
const sdkCommit = spawnSync('git',['-C',sdkDir,'rev-parse','HEAD'],{encoding:'utf8'});
requireInvariant(sdkCommit.status === 0,'sdk_git_lineage');
requireInvariant(sdkCommit.stdout.trim() === studioLock.approved_sdk_commit, 'sdk_git_commit_unapproved');
const sdkStatus = spawnSync('git',['-C',sdkDir,'status','--porcelain','--','apps/cad-creator'],{encoding:'utf8'});
requireInvariant(sdkStatus.status === 0 && !sdkStatus.stdout.trim(),'sdk_checkout_dirty');
const receipt = {
  schema:'agentsam.cad.public.studio-source.v1',
  application:sdkManifest.id,
  applicationVersion:sdkManifest.version,
  sourceCommit:sdkCommit.stdout.trim(),
  sourceDirty:sdkStatus.status===0 && sdkStatus.stdout.trim().length>0,
  outputBase:'/studio/'
};
fs.writeFileSync(path.join(studioDest,'source-manifest.json'),JSON.stringify(receipt,null,2)+'\n');
console.log('CAD_STUDIO_INCLUDED_FROM_SDK',receipt);
if (tempSdkDir) fs.rmSync(tempSdkDir,{recursive:true,force:true});

const indexPath = path.join(dist, 'index.html');
requireInvariant(fs.existsSync(indexPath), 'html_not_built');
const index = fs.readFileSync(indexPath, 'utf8');
requireInvariant(index.includes('/assets/') && !index.includes('/src/main.tsx'), 'unbundled_html');
const assets = fs.readdirSync(path.join(dist,'assets'));
requireInvariant(assets.some(x => x.endsWith('.js')) && assets.some(x => x.endsWith('.css')), 'js_css_absent');
const appEntry = fs.readFileSync(path.join(app, 'frontend/src/App.tsx'), 'utf8');
requireInvariant(appEntry.includes('DreamHouseCaseStudy') && appEntry.includes('CadCreatorApp'), 'public_routes_missing');
const worker = fs.readFileSync(path.join(app,'backend/worker/index.js'),'utf8');
requireInvariant(worker.includes('env.ASSETS.fetch(request)'), 'spa_worker_fallback_missing');
console.log('CAD_PUBLIC_WORKER_BUNDLE_PASS', {worker:rootConfig.name,route:rootConfig.routes[0]?.pattern,files:assets.length});
