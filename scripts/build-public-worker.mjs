/**
 * Public CAD Creator Worker production build.
 * The CAD app and private CAD engine remain owned by the SDK. This repository
 * only packages its reviewed public frontend/Worker snapshot.
 * Wrangler invokes this before deploy even when Cloudflare Builds' explicit
 * build command is unset.
 */
import fs from 'node:fs';
import path from 'node:path';
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
