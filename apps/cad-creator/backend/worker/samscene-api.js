/**
 * Public API for the SamScene studio mounted at /samscene.
 * Read-only data is served from build-time snapshots shipped with the deploy
 * (/samscene/api-data/*.json). Anything that creates, changes or generates fails
 * closed, exactly like the public CAD API: a preview must not spend credits or write data.
 */
const MOUNT = '/samscene/api/';

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=60' },
});

async function snapshot(env, request, name) {
  const res = await env.ASSETS.fetch(new Request(new URL(`/samscene/api-data/${name}.json`, request.url)));
  if (!res.ok) return null;
  const text = await res.text();
  return /^\s*</.test(text) ? null : JSON.parse(text); // SPA fallback is not data
}

export async function handleSamSceneApi(request, env) {
  const url = new URL(request.url);
  if (!url.pathname.startsWith(MOUNT) || !env.ASSETS) return null;
  const route = url.pathname.slice(MOUNT.length).replace(/\/+$/, '');

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return json({
      ok: false,
      error: 'authentication_required',
      message: 'Generating, saving or deleting in SamScene requires a signed-in session. The public studio is read-only.',
    }, 401);
  }

  if (route === 'health') return json({ ok: true, mode: 'public-readonly' });

  if (route === 'theme-scenes') return json(await snapshot(env, request, 'theme-scenes') ?? { scenes: [] });
  if (route.startsWith('theme-scenes/')) {
    const slug = decodeURIComponent(route.slice('theme-scenes/'.length));
    const { scenes = [] } = (await snapshot(env, request, 'theme-scenes')) ?? {};
    const scene = scenes.find((s) => s.slug === slug || s.id === slug || s.environmentId === slug);
    return scene ? json({ scene }) : json({ error: `Theme scene "${slug}" not found.` }, 404);
  }

  if (route === 'primetech/ecosystem') return json(await snapshot(env, request, 'ecosystem') ?? {});
  if (route === 'primetech/arch-lookup') {
    const nominal = url.searchParams.get('nominal') || undefined;
    const { specs = [] } = (await snapshot(env, request, 'lumber')) ?? {};
    return json({ nominal: nominal || 'all', specs: nominal ? specs.filter((s) => s.nominal === nominal) : specs });
  }

  if (route === 'templates') {
    let { templates = [] } = (await snapshot(env, request, 'templates')) ?? {};
    for (const key of ['category', 'resource_kind', 'status']) {
      const want = url.searchParams.get(key);
      if (want) templates = templates.filter((t) => t[key] === want);
    }
    const q = (url.searchParams.get('q') || '').toLowerCase();
    if (q) templates = templates.filter((t) => JSON.stringify(t).toLowerCase().includes(q));
    return json({ templates });
  }
  if (route.startsWith('templates/')) {
    const id = decodeURIComponent(route.slice('templates/'.length));
    const { templates = [] } = (await snapshot(env, request, 'templates')) ?? {};
    const template = templates.find((t) => t.id === id);
    return template ? json({ template }) : json({ error: 'Template not found.' }, 404);
  }

  return json({ error: 'not_found' }, 404);
}
