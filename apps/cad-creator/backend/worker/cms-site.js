/**
 * CMS-driven public pages for the CAD site.
 *
 * Contract (existing tables only, no new schema):
 *   cms_sites.primary_domain        -> resolves the site from env.CMS_SITE_DOMAIN
 *   cms_pages (published)           -> route_path, title, seo_json, metadata_json, content_object_key
 *   cms_globals header / footer     -> content_object_key (HTML template in R2)
 *   cms_navigation_menus            -> menu_items JSON; templates reference {{menu:<name>}}
 *
 * Nav is data: editing a menu row changes every page without a redeploy.
 * Returns null when the path is not a published CMS page so the caller falls
 * through to the static assets / SPA.
 */

const esc = (v) => String(v ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function safeJson(text, fallback) {
  try { return JSON.parse(text); } catch { return fallback; }
}

function renderMenu(items, currentPath) {
  return (Array.isArray(items) ? items : []).map((item) => {
    const href = String(item.href || '#');
    const here = href.replace(/\/+$/, '') === currentPath ? ' aria-current="page"' : '';
    return `<a href="${esc(href)}"${here}>${esc(item.label)}</a>`;
  }).join('');
}

async function readText(env, key) {
  if (!key) return '';
  const object = await env.WEBSITE_ASSETS.get(key);
  return object ? object.text() : '';
}

export async function handleCmsPage(request, env) {
  if (!['GET', 'HEAD'].includes(request.method)) return null;
  if (!env.DB || !env.WEBSITE_ASSETS || !env.CMS_SITE_DOMAIN) return null;

  const url = new URL(request.url);
  const lastSegment = url.pathname.split('/').pop() || '';
  if (lastSegment.includes('.')) return null; // a file request, not a page

  const path = url.pathname.replace(/\/+$/, '') || '/';
  const site = await env.DB.prepare('SELECT id FROM cms_sites WHERE primary_domain = ?')
    .bind(env.CMS_SITE_DOMAIN).first();
  if (!site) return null;

  const page = await env.DB.prepare(
    "SELECT title, seo_json, metadata_json, content_object_key FROM cms_pages WHERE site_id = ? AND route_path = ? AND status = 'published'"
  ).bind(site.id, path).first();
  if (!page || !page.content_object_key) return null;

  const [globals, menus] = await Promise.all([
    env.DB.prepare(
      "SELECT global_key, content_object_key FROM cms_globals WHERE site_id = ? AND global_key IN ('header','footer') AND status = 'published'"
    ).bind(site.id).all(),
    env.DB.prepare('SELECT menu_name, menu_items FROM cms_navigation_menus WHERE site_id = ? AND is_active = 1')
      .bind(site.id).all(),
  ]);

  const menuHtml = {};
  for (const row of menus.results || []) menuHtml[row.menu_name] = renderMenu(safeJson(row.menu_items, []), path);
  const fillMenus = (html) => html.replace(/\{\{menu:([a-z0-9_-]+)\}\}/gi, (_, name) => menuHtml[name] || '');

  const globalKey = Object.fromEntries((globals.results || []).map((g) => [g.global_key, g.content_object_key]));
  const [header, footer, body] = await Promise.all([
    readText(env, globalKey.header), readText(env, globalKey.footer), readText(env, page.content_object_key),
  ]);
  if (!body) return null;

  const seo = safeJson(page.seo_json, {});
  const meta = safeJson(page.metadata_json, {});
  const styles = (Array.isArray(meta.styles) ? meta.styles : [])
    .map((href) => `<link rel="stylesheet" href="${esc(href)}">`).join('');
  const bodyClass = meta.body_class ? ` class="${esc(meta.body_class)}"` : '';
  const description = seo.description ? `<meta name="description" content="${esc(seo.description)}">` : '';

  const html = '<!doctype html><html lang="en"><head><meta charset="utf-8">'
    + '<meta name="viewport" content="width=device-width,initial-scale=1">'
    + `<title>${esc(seo.title || page.title)}</title>${description}`
    + `<link rel="canonical" href="https://${esc(env.CMS_SITE_DOMAIN)}${esc(path)}">`
    + '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
    + '<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">'
    + `${styles}</head><body${bodyClass}>${fillMenus(header)}${body}${fillMenus(footer)}</body></html>`;

  return new Response(request.method === 'HEAD' ? null : html, {
    status: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=60',
      'x-content-type-options': 'nosniff',
    },
  });
}
