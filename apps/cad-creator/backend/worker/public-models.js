/**
 * Large public media (3D models, scene parts, images, video) is gitignored, so it lives
 * in R2 under an explicit public prefix and is served at the same URL it is referenced by.
 * Only the types below are looked up, and only inside PUBLIC_PREFIX, so the rest of the
 * private CAD bucket is never reachable from here. Anything not hosted falls through
 * to the static assets.
 */
const PUBLIC_PREFIX = 'public-static';
const TYPES = {
  glb: 'model/gltf-binary',
  gltf: 'model/gltf+json',
  webp: 'image/webp',
  mov: 'video/quicktime',
};

function parseRange(header, size) {
  const m = /^bytes=(\d*)-(\d*)$/.exec(header || '');
  if (!m || (m[1] === '' && m[2] === '')) return null;
  let start = m[1] === '' ? size - Number(m[2]) : Number(m[1]);
  let end = m[1] === '' || m[2] === '' ? size - 1 : Number(m[2]);
  if (start < 0 || start > end || start >= size) return null;
  end = Math.min(end, size - 1);
  return { start, end };
}

export async function handlePublicModel(request, env) {
  if (request.method !== 'GET' && request.method !== 'HEAD') return null;
  const path = new URL(request.url).pathname;
  const type = TYPES[path.split('.').pop().toLowerCase()];
  if (!type || path.includes('..') || !env.WEBSITE_ASSETS) return null;

  const key = `${PUBLIC_PREFIX}${path}`;
  const head = await env.WEBSITE_ASSETS.head(key);
  if (!head) return null;

  const headers = {
    'content-type': type,
    'accept-ranges': 'bytes',
    etag: head.httpEtag,
    'cache-control': 'public, max-age=86400',
    'access-control-allow-origin': '*',
  };
  const range = parseRange(request.headers.get('range'), head.size);
  if (range) {
    const part = await env.WEBSITE_ASSETS.get(key, { range: { offset: range.start, length: range.end - range.start + 1 } });
    if (!part) return null;
    return new Response(request.method === 'HEAD' ? null : part.body, {
      status: 206,
      headers: { ...headers, 'content-range': `bytes ${range.start}-${range.end}/${head.size}`, 'content-length': String(range.end - range.start + 1) },
    });
  }
  const object = request.method === 'HEAD' ? null : await env.WEBSITE_ASSETS.get(key);
  return new Response(object ? object.body : null, { headers: { ...headers, 'content-length': String(head.size) } });
}
