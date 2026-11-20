#!/usr/bin/env node
/**
 * Applies catalog/cms/<site>/ to the CMS (D1 rows + R2 objects).
 *
 *   node scripts/cms/apply-site-catalog.mjs --site primetech-site --domain cad.inneranimalmedia.com \
 *        --target local [--publish] [--bootstrap]
 *
 * --target local   wrangler local state (D1 + R2); --bootstrap creates the fixture schema and a stand-in site row
 * --target remote  production D1 + R2 (the site row must already exist)
 * Rows are upserted; re-running is safe. Rows stay 'draft' unless --publish is given.
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const args = process.argv.slice(2);
const opt = (name, fallback) => { const i = args.indexOf('--' + name); return i < 0 ? fallback : args[i + 1]; };
const flag = (name) => args.includes('--' + name);
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const site = opt('site'), domain = opt('domain'), target = opt('target', 'local');
const config = opt('config', 'wrangler.jsonc');
const version = opt('version', 'v1');
if (!site || !domain || !['local', 'remote', 'dump'].includes(target)) {
  console.error('usage: --site <catalog dir> --domain <primary domain> --target local|remote|dump [--publish] [--bootstrap] [--config file]');
  process.exit(2);
}
const dir = path.join(root, 'catalog/cms', site);
const manifest = JSON.parse(fs.readFileSync(path.join(dir, 'site.json'), 'utf8'));
const status = flag('publish') ? 'published' : 'draft';
const q = (v) => "'" + String(v).replace(/'/g, "''") + "'";
const dump = target === 'dump'; // emit a manifest instead of calling wrangler (for token-less environments)
const dumped = { uploads: [], sql: null };
const wrangler = (a) => {
  if (dump) {
    if (a[0] === 'r2') dumped.uploads.push({ key: a[3].split('/').slice(1).join('/'), file: a[5] });
    if (a[0] === 'd1') dumped.sql = a[4];
    return;
  }
  const r = spawnSync('npx', ['--no-install', 'wrangler', ...a, '-c', config, '--' + target], { cwd: root, stdio: 'inherit' });
  if (r.status !== 0) { console.error('wrangler failed:', a.join(' ')); process.exit(r.status || 1); }
};
const bucket = JSON.parse(fs.readFileSync(path.join(root, config), 'utf8').replace(/^\s*\/\/.*$/gm, '')).r2_buckets[0].bucket_name;
const siteId = `(SELECT id FROM cms_sites WHERE primary_domain = ${q(domain)})`;
const sql = [];

if (flag('bootstrap')) {
  if (target !== 'local') { console.error('--bootstrap is local only'); process.exit(2); }
  wrangler(['d1', 'execute', 'DB', '--file', path.join(root, 'catalog/cms/local-schema.sql')]);
  sql.push(`INSERT OR IGNORE INTO cms_sites (id, account_id, name, slug, status, primary_domain) VALUES ('site_local_fixture','acct_local','CAD (local)','cad-local','active',${q(domain)});`);
}

const upload = (key, file) => wrangler(['r2', 'object', 'put', `${bucket}/${key}`, '--file', file, '--content-type', 'text/html; charset=utf-8']);
const prefix = `cms/${site}/${version}`;

for (const [globalKey, file] of Object.entries(manifest.globals)) {
  const key = `${prefix}/${file}`; upload(key, path.join(dir, file));
  sql.push(`INSERT INTO cms_globals (account_id, site_id, global_key, global_type, status, content_object_key, content_version)
    SELECT account_id, id, ${q(globalKey)}, ${q(globalKey)}, ${q(status)}, ${q(key)}, 1 FROM cms_sites WHERE primary_domain = ${q(domain)}
    ON CONFLICT (site_id, global_key) DO UPDATE SET status = excluded.status, content_object_key = excluded.content_object_key,
      content_version = content_version + 1, updated_at = datetime('now');`);
}
for (const page of manifest.pages) {
  const key = (page.app_entry || page.redirect_to) ? null : `${prefix}/pages/${page.slug}.html`;
  if (key) upload(key, path.join(dir, 'pages', `${page.slug}.html`));
  sql.push(`INSERT INTO cms_pages (id, site_id, slug, route_path, title, status, seo_json, metadata_json, sort_order, content_object_key, published_at)
    VALUES ('cmsp_' || lower(hex(randomblob(8))), ${siteId}, ${q(page.slug)}, ${q(page.route)}, ${q(page.title)}, ${q(status)},
      ${q(JSON.stringify(page.seo || {}))}, ${q(JSON.stringify({ styles: manifest.styles || [], body_class: page.body_class || '', ...(page.app_entry ? { app_entry: page.app_entry, app_prefix: !!page.app_prefix, app_footer: !!page.app_footer, app_chrome: page.app_chrome !== false } : {}), ...(page.redirect_to ? { redirect_to: page.redirect_to } : {}) }))}, ${page.sort || 0}, ${key ? q(key) : 'NULL'},
      ${status === 'published' ? 'unixepoch()' : 'NULL'})
    ON CONFLICT (site_id, slug) DO UPDATE SET route_path = excluded.route_path, title = excluded.title, status = excluded.status,
      seo_json = excluded.seo_json, metadata_json = excluded.metadata_json, sort_order = excluded.sort_order,
      content_object_key = excluded.content_object_key, published_at = excluded.published_at, updated_at = unixepoch();`);
}
for (const [name, items] of Object.entries(manifest.menus)) {
  sql.push(`INSERT INTO cms_navigation_menus (project_id, project_slug, menu_name, menu_items, site_id)
    SELECT slug, slug, ${q(name)}, ${q(JSON.stringify(items))}, id FROM cms_sites WHERE primary_domain = ${q(domain)}
    ON CONFLICT (project_id, menu_name) DO UPDATE SET menu_items = excluded.menu_items, updated_at = datetime('now');`);
}
const file = path.join(os.tmpdir(), `cms-apply-${process.pid}.sql`);
fs.writeFileSync(file, sql.join('\n') + '\n');
wrangler(['d1', 'execute', 'DB', '--file', file]);
if (dump) { fs.copyFileSync(file, '/tmp/cms-apply-dump.sql'); dumped.sql = '/tmp/cms-apply-dump.sql'; }
fs.rmSync(file, { force: true });
console.log(`CMS_CATALOG_APPLIED site=${site} target=${target} status=${status} pages=${manifest.pages.length}`);
if (dump) console.log('MANIFEST ' + JSON.stringify(dumped));
