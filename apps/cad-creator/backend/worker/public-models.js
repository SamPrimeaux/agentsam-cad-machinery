/**
 * Public 3D models (.glb) are too large for the repository (see .gitignore), so they
 * live in R2 under an explicit public prefix and are served at the same URL they are
 * referenced by. Only .glb paths are looked up, and only inside PUBLIC_PREFIX, so the
 * rest of the private CAD bucket is never reachable from here.
 */
const PUBLIC_PREFIX = 'public-static';

export async function handlePublicModel(request, env) {
  if (request.method !== 'GET' && request.method !== 'HEAD') return null;
  const path = new URL(request.url).pathname;
  if (!path.toLowerCase().endsWith('.glb') || path.includes('..') || !env.WEBSITE_ASSETS) return null;

  const object = await env.WEBSITE_ASSETS.get(`${PUBLIC_PREFIX}${path}`);
  if (!object) return null; // not a hosted model: fall through to the static assets

  return new Response(request.method === 'HEAD' ? null : object.body, {
    headers: {
      'content-type': 'model/gltf-binary',
      'content-length': String(object.size),
      etag: object.httpEtag,
      'cache-control': 'public, max-age=86400',
      'access-control-allow-origin': '*',
    },
  });
}
