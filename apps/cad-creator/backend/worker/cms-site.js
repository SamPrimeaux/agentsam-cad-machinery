/**
 * CMS-driven public pages for the CAD site.
 *
 * Contract (existing tables only, no new schema):
 *   cms_sites.primary_domain        -> resolves the site from env.CMS_SITE_DOMAIN
 *   cms_pages (published)           -> route_path, title, seo_json, metadata_json, content_object_key
 *   cms_globals header / footer     -> content_object_key (HTML template in R2)
 *   cms_navigation_menus            -> menu_items JSON; templates reference {{menu:<name>}}
 *
 * Two page kinds:
 *   content pages  - R2 HTML fragment wrapped in the header/footer globals
 *   app pages      - metadata.app_entry names a built SPA; the worker injects the header
 *                    global (and the footer when metadata.app_footer) at serve time and
 *                    sets <meta name="iam-chrome" content="external"> so the app drops its own.
 * Nav is data: editing a menu row changes every page without a redeploy.
 * Returns null when the path is not a published CMS page so the caller falls through.
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
  // R2 holds the editable copy; the deploy ships a seed copy so a fresh site renders before any edit.
  const object = await env.WEBSITE_ASSETS.get(key);
  if (object) return object.text();
  if (!env.ASSETS) return '';
  const seed = await env.ASSETS.fetch(new Request(`https://seed.invalid/cms-content/${key.replace(/\.html$/, '')}`));
  if (!seed.ok) return '';
  const text = await seed.text();
  // The SPA fallback answers unknown paths with the app shell; that is not a fragment.
  return /^\s*<!doctype/i.test(text) ? '' : text;
}

async function loadChrome(env, siteId, path) {
  const [globals, menus] = await Promise.all([
    env.DB.prepare(
      "SELECT global_key, content_object_key FROM cms_globals WHERE site_id = ? AND global_key IN ('header','footer') AND status = 'published'"
    ).bind(siteId).all(),
    env.DB.prepare('SELECT menu_name, menu_items FROM cms_navigation_menus WHERE site_id = ? AND is_active = 1')
      .bind(siteId).all(),
  ]);
  const menuHtml = {};
  for (const row of menus.results || []) menuHtml[row.menu_name] = renderMenu(safeJson(row.menu_items, []), path);
  const fill = (html) => html.replace(/\{\{menu:([a-z0-9_-]+)\}\}/gi, (_, name) => menuHtml[name] || '');
  const keys = Object.fromEntries((globals.results || []).map((g) => [g.global_key, g.content_object_key]));
  const [header, footer] = await Promise.all([readText(env, keys.header), readText(env, keys.footer)]);
  return { header: fill(header), footer: fill(footer), menus: menuHtml };
}

const FONT_LINK = '<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">';

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

  const pageQuery = "SELECT title, seo_json, metadata_json, content_object_key FROM cms_pages WHERE site_id = ? AND route_path = ? AND status = 'published'";
  let page = await env.DB.prepare(pageQuery).bind(site.id, path).first();
  if (!page) {
    // Section routes (e.g. /blog/some-post) resolve to their parent app page.
    const parent = '/' + path.split('/')[1];
    const candidate = parent === path ? null : await env.DB.prepare(pageQuery).bind(site.id, parent).first();
    if (candidate && safeJson(candidate.metadata_json, {}).app_prefix) page = candidate;
  }
  if (!page) return null;

  const meta = safeJson(page.metadata_json, {});
  if (meta.redirect_to) return Response.redirect(new URL(meta.redirect_to, request.url).toString(), 301);
  const chrome = await loadChrome(env, site.id, path);

  if (meta.app_entry) {
    if (!env.ASSETS) return null;
    const res = await env.ASSETS.fetch(new Request(new URL(meta.app_entry, request.url), request));
    if (meta.app_chrome === false) {
      // The app ships its own header/footer; serve it untouched.
      // Keep the app's own header element (its scripts depend on it) but drive its
      // links from the same CMS menu so every surface shows one navigation.
      return new HTMLRewriter()
        .on('#main-nav', { element(el) { if (chrome.menus.main) el.setInnerContent(chrome.menus.main, { html: true }); } })
        .on('a.login-link', { element(el) {
          el.setAttribute('href', '/studio');
          el.setInnerContent('<span class="login-arrow" aria-hidden="true">↗</span><span>Open Studio</span>', { html: true });
        } })
        .transform(new Response(res.body, { status: 200, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=60' } }));
    }
    const appCss = meta.app_css ? `<style>${String(meta.app_css).replace(/<\/style/gi, '')}</style>` : '';
    const head = `<meta name="iam-chrome" content="external"><link rel="stylesheet" href="/brand/primetech.css">${FONT_LINK}${appCss}`;
    const rewritten = new HTMLRewriter()
      .on('head', { element(el) { el.append(head, { html: true }); } })
      .on('body', { element(el) {
        el.prepend(chrome.header, { html: true });
        if (meta.app_footer) el.append(chrome.footer, { html: true });
      } })
      .transform(new Response(res.body, { status: 200, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=60' } }));
    return rewritten;
  }

  if (!page.content_object_key) return null;
  const body = await readText(env, page.content_object_key);
  if (!body) return null;

  const seo = safeJson(page.seo_json, {});
  const styles = (Array.isArray(meta.styles) ? meta.styles : [])
    .map((href) => `<link rel="stylesheet" href="${esc(href)}">`).join('');
  const bodyClass = meta.body_class ? ` class="${esc(meta.body_class)}"` : '';
  const description = seo.description ? `<meta name="description" content="${esc(seo.description)}">` : '';

  const html = '<!doctype html><html lang="en"><head><meta charset="utf-8">'
    + '<meta name="viewport" content="width=device-width,initial-scale=1">'
    + `<title>${esc(seo.title || page.title)}</title>${description}`
    + `<link rel="canonical" href="https://${esc(env.CMS_SITE_DOMAIN)}${esc(path)}">`
    + '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
    + `${FONT_LINK}${styles}</head><body${bodyClass}>${chrome.header}${body}${chrome.footer}</body></html>`;

  return new Response(request.method === 'HEAD' ? null : html, {
    status: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=60',
      'x-content-type-options': 'nosniff',
    },
  });
}


// /studio: the SDK-built editor wrapped in the same site header as every other page.
// The public studio never points visitors at another app, so those controls are removed.
export async function handleStudio(request, env) {
  // Both studios sit behind the PrimeTech onboarding: no cookie yet -> onboarding, which hands back here.
  if (!/(?:^|;\s*)pt_onboarded=1(?:;|$)/.test(request.headers.get('cookie') || '')) {
    return Response.redirect(new URL('/samscene?next=/studio', request.url).toString(), 302);
  }
  const entry = await env.ASSETS.fetch(new Request(new URL('/studio-entry.txt', request.url), request));
  if (!entry.ok) return null;
  // The studio is full-bleed and brings its own navigation, so the public site header is not injected here.
  const head = '<meta name="iam-chrome" content="external">'
    + '<script>(function(){var re=/^\\s*(Open AgentSam|AgentSam Work)/i;function sweep(){document.querySelectorAll("a,button").forEach(function(e){if(re.test(e.textContent||"")){var t=e.closest("li")||e;t.remove()}})}new MutationObserver(sweep).observe(document.documentElement,{childList:true,subtree:true});sweep()})()</script>';
  return new HTMLRewriter()
    .on('head', { element(el) { el.append(head, { html: true }); } })
    .transform(new Response(entry.body, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } }));
}
