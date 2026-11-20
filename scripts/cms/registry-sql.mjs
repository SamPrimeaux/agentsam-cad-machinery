/**
 * Registers a site's reusable content in the CMS tables from catalog/cms/<site>/registry.json:
 * definitions (scenes, sections, 3d assets), media (cms_assets + cms_3d_assets), page sections,
 * and the onboarding focus options (cms_section_blocks) that route a new visitor to the right UI.
 * Everything is idempotent (deterministic ids + ON CONFLICT), so re-running only updates.
 */
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const q = (v) => (v === null || v === undefined ? 'NULL' : "'" + String(v).replace(/'/g, "''") + "'");
const j = (v) => q(JSON.stringify(v));
const hid = (prefix, s) => `${prefix}_${crypto.createHash('sha1').update(s).digest('hex').slice(0, 12)}`;
const MIME = { glb: 'model/gltf-binary', gltf: 'model/gltf+json', webp: 'image/webp', mov: 'video/quicktime' };

function walk(dir, recursive) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const f = path.join(dir, e.name);
    return e.isDirectory() ? (recursive ? walk(f, true) : []) : [f];
  });
}

export function registrySql({ registry, publicDir, domain, bucket, status, r2Prefix = 'public-static' }) {
  const out = [];
  const siteRow = `(SELECT id FROM cms_sites WHERE primary_domain = ${q(domain)})`;
  const account = `(SELECT account_id FROM cms_sites WHERE primary_domain = ${q(domain)})`;
  const defId = (kind, key) => `(SELECT id FROM cms_definitions WHERE account_id = ${account} AND kind = ${q(kind)} AND definition_key = ${q(key)} ORDER BY version DESC LIMIT 1)`;
  const pageId = (slug) => `(SELECT id FROM cms_pages WHERE site_id = ${siteRow} AND slug = ${q(slug)})`;

  for (const d of registry.definitions) {
    if (d.reuse) continue;
    const meta = { site: domain, ...(d.renderer_key ? { renderer_key: d.renderer_key } : {}), ...(d.scene_id ? { scene_id: d.scene_id } : {}), ...(d.scene_doc ? { scene_doc: d.scene_doc } : {}) };
    out.push(`INSERT INTO cms_definitions (account_id, definition_key, kind, label, category, origin, version, metadata_json, status)
      VALUES (${account}, ${q(d.key)}, ${q(d.kind)}, ${q(d.label)}, ${q(d.category || null)}, 'app', '1', ${j(meta)}, 'active')
      ON CONFLICT (account_id, kind, definition_key, version) DO UPDATE SET label = excluded.label, category = excluded.category,
        metadata_json = excluded.metadata_json, status = 'active', updated_at = datetime('now');`);
  }

  for (const m of registry.media) {
    for (const file of walk(path.join(publicDir, m.dir), m.recursive)) {
      const ext = path.extname(file).slice(1).toLowerCase();
      if (!m.ext.includes(ext)) continue;
      const url = m.urlBase + file.slice(path.join(publicDir, m.dir).length).split(path.sep).join('/');
      const stat = fs.statSync(file), filename = path.basename(file);
      const assetId = hid('asset_pt', url);
      const category = ext === 'mov' ? 'video' : ext === 'webp' ? 'image' : m.category;
      out.push(`INSERT INTO cms_assets (id, filename, original_filename, path, size, mime_type, category, r2_key, public_url, r2_bucket, is_live, asset_key, label, usage_context, created_at_unix, site_id)
        VALUES (${q(assetId)}, ${q(filename)}, ${q(filename)}, ${q(url)}, ${stat.size}, ${q(MIME[ext])}, ${q(category)}, ${q(r2Prefix + url)}, ${q('https://' + domain + url)}, ${q(bucket)}, 1, ${q(url)}, ${q(filename)}, 'public-site', unixepoch(), ${siteRow})
        ON CONFLICT (id) DO UPDATE SET size = excluded.size, r2_key = excluded.r2_key, public_url = excluded.public_url, is_live = 1, updated_at = CURRENT_TIMESTAMP;`);
      if (category === 'model_3d') {
        const family = url.split('/').filter(Boolean).slice(0, -1).join('/') || 'root';
        out.push(`INSERT INTO cms_3d_assets (id, asset_id, sku, asset_name, asset_family, category, version, definition_id, source_provider, build_provider, r2_key, r2_bucket, created_at, specs_json, runtime_json)
          VALUES (${q(hid('3d_pt', url))}, ${q(assetId)}, ${q('PT-' + hid('', url).slice(1).toUpperCase())}, ${q(filename)}, ${q(family)}, 'model_3d', '1.0.0', ${defId('3d_asset', 'primetech:model')}, 'primetech', 'samscene', ${q(r2Prefix + url)}, ${q(bucket)}, unixepoch(), ${j({ format: ext, bytes: stat.size })}, ${j({ url })})
          ON CONFLICT (id) DO UPDATE SET r2_key = excluded.r2_key, specs_json = excluded.specs_json, runtime_json = excluded.runtime_json;`);
      }
    }
  }

  const sectionId = (slug, key) => hid('cmss_pt', `${slug}/${key}`);
  const kindOf = Object.fromEntries(registry.definitions.map((d) => [d.key, d.kind]));
  if (registry.studioPage) {
    const s = registry.studioPage;
    out.push(`INSERT INTO cms_pages (id, site_id, slug, route_path, title, status, metadata_json, requires_auth, nav_visible, sort_order, published_at)
      VALUES (${q(hid('cmsp_pt', s.slug))}, ${siteRow}, ${q(s.slug)}, ${q(s.route)}, ${q(s.title)}, ${q(status)}, ${j({ handler: 'studio', requires_onboarding: true })}, 0, 0, 90, ${status === 'published' ? 'unixepoch()' : 'NULL'})
      ON CONFLICT (site_id, slug) DO UPDATE SET route_path = excluded.route_path, title = excluded.title, status = excluded.status, metadata_json = excluded.metadata_json, updated_at = unixepoch();`);
  }
  for (const [slug, sections] of Object.entries(registry.pages)) {
    sections.forEach((s, i) => {
      const kind = kindOf[s.section] || 'section';
      out.push(`INSERT INTO cms_page_sections (id, page_id, section_type, section_name, section_data, sort_order, is_visible, definition_id, section_key, metadata_json)
        VALUES (${q(sectionId(slug, s.key))}, ${pageId(slug)}, ${q(kind)}, ${q(s.name)}, ${j(s.data || {})}, ${i * 10}, 1, ${defId(kind, s.section)}, ${q(s.key)}, ${j({ definition_key: s.section })})
        ON CONFLICT (id) DO UPDATE SET section_name = excluded.section_name, section_data = excluded.section_data, sort_order = excluded.sort_order,
          definition_id = excluded.definition_id, metadata_json = excluded.metadata_json, updated_at = datetime('now');`);
    });
  }
  (registry.onboardingFocus || []).forEach((f, i) => {
    out.push(`INSERT INTO cms_section_blocks (account_id, section_id, block_key, block_type, sort_order, content_json)
      VALUES (${account}, ${q(sectionId('samscene', 'onboarding'))}, ${q(f.id)}, 'focus_option', ${i * 10}, ${j({ label: f.label, color: f.color, route: f.route })})
      ON CONFLICT (section_id, block_key) DO UPDATE SET content_json = excluded.content_json, sort_order = excluded.sort_order, updated_at = datetime('now');`);
  });
  return out;
}
