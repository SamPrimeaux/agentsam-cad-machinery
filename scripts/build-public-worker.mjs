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
requireInvariant(rootConfig.assets.run_worker_first.includes('/studio') && rootConfig.assets.run_worker_first.includes('/studio/*'), 'studio_worker_routing');
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
let tempExternalDeps = null;
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
  // Install the SDK root workspace so unpublished workspace packages (Workbench,
  // contracts, etc.) resolve from this pinned source, not from npm releases.
  run('npm', ['ci','--no-audit','--no-fund'], sdkDir);
}
const sdkCad = path.join(sdkDir, 'apps/cad-creator');
// SDK root npm workspaces intentionally exclude runnable CAD apps. Resolve the
// public frontend's external dependencies from its immutable app lock without
// installing its unpublished @inneranimalmedia workspace packages from npm.
const sdkFrontend = JSON.parse(fs.readFileSync(path.join(sdkCad,'frontend/package.json'),'utf8'));
const sdkCadLock = JSON.parse(fs.readFileSync(path.join(sdkCad,'package-lock.json'),'utf8'));
const externalDeps = Object.keys({...sdkFrontend.dependencies,...sdkFrontend.devDependencies})
  .filter(name => !name.startsWith('@inneranimalmedia/'));
const missingDeps = externalDeps.filter(name => !fs.existsSync(path.join(sdkDir,'node_modules',name,'package.json')));
if (missingDeps.length) {
  // Installing into the SDK root mutates its workspace graph (and can trigger
  // npm Arborist 'edgesOut' failures); the CAD app lock also references
  // unpublished @inneranimalmedia packages. Hydrate ONLY its pinned external
  // deps in an isolated prefix, then link them into the clean SDK checkout.
  const locked = missingDeps.map(name => {
    const version = sdkCadLock.packages?.['node_modules/' + name]?.version;
    requireInvariant(version && /^\d+\.\d+\.\d+/.test(version), 'sdk_dependency_not_locked:' + name);
    return name + '@' + version;
  });
  const isolatedDepsDir = fs.mkdtempSync(path.join(os.tmpdir(), 'agentsam-cad-externals-'));
  try {
    run('npm', ['install','--prefix',isolatedDepsDir,'--no-save','--no-package-lock',
      '--ignore-scripts','--no-audit','--no-fund',...locked], root);
    for (const name of missingDeps) {
      const source = path.join(isolatedDepsDir,'node_modules',name);
      requireInvariant(fs.existsSync(path.join(source,'package.json')), 'sdk_external_missing:' + name);
      const dest = path.join(sdkDir,'node_modules',name);
      fs.mkdirSync(path.dirname(dest),{recursive:true});
      if (!fs.existsSync(dest)) fs.symlinkSync(source,dest,'dir');
    }
    // Keep the isolated node_modules alive for transitive dependency resolution
    // until the studio build has completed; see cleanup near release receipt.
    tempExternalDeps = isolatedDepsDir;
  } catch (error) {
    fs.rmSync(isolatedDepsDir,{recursive:true,force:true});
    throw error;
  }
}
const localShared = path.join(sdkCad,'shared/cad');
requireInvariant(fs.existsSync(path.join(localShared,'package.json')), 'sdk_cad_shared_missing');
const localSharedLink = path.join(sdkCad,'node_modules/@inneranimalmedia/agentsam-cad-shared');
fs.mkdirSync(path.dirname(localSharedLink),{recursive:true});
if (!fs.existsSync(localSharedLink)) fs.symlinkSync(localShared,localSharedLink,'dir');
requireInvariant(fs.existsSync(path.join(sdkCad, 'agentsam.app.json')), 'sdk_cad_source_missing');
const sdkManifest = JSON.parse(fs.readFileSync(path.join(sdkCad,'agentsam.app.json'),'utf8'));
requireInvariant(sdkManifest.id === 'cad-creator', 'sdk_cad_app_identity');
requireInvariant(sdkManifest.version === studioLock.approved_app_version, 'sdk_source_version_unapproved');
const sdkBuild = path.join(sdkCad,'frontend/dist');
// The pinned CAD frontend imports source-workspace nav CSS directly. A fresh
// SDK checkout has no generated dist; build its declared nav dependency first.
run('npm', ['run','build','-w','@inneranimalmedia/agentsam-nav'], sdkDir);
// Workbench builds the linked contracts/loading-scene workspace packages as needed.
run('npm', ['run','build','-w','@inneranimalmedia/agentsam-workbench'], sdkDir);
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
if (tempExternalDeps) fs.rmSync(tempExternalDeps,{recursive:true,force:true});

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
