import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const c = JSON.parse(fs.readFileSync(path.join(root, 'backend/wrangler.jsonc'), 'utf8'));
function check(v, label) {if(!v) throw Error('cad_worker_isolation_failed:' + label)}
check(c.name === 'agentsam-cad-creator','worker_name');
check(c.main === 'worker/index.js','worker_entry');
check(c.routes?.some(r=>r.pattern==='cad.inneranimalmedia.com'&&r.custom_domain===true),'public_cad_domain');
check(c.assets?.binding === 'ASSETS','website_static_assets_binding');
check(c.assets?.directory === '../frontend/dist','website_static_assets_directory');
check(c.r2_buckets?.some(r=>r.binding==='WEBSITE_ASSETS'&&r.bucket_name==='cad'),'dedicated_r2_bucket');
check(c.d1_databases?.some(r=>r.binding==='DB'&&r.database_name==='inneranimalmedia-business'),'d1_scope');
check(c.assets?.run_worker_first?.includes('/api/*'),'private_api_worker_first');
console.log('CAD_WORKER_IDENTITY_VERIFIED');
