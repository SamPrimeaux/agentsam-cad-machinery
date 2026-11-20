/**
 * Exact R2 allowlist for ONE current DreamHouse project case study.
 * The CAD bucket and private IFC, FCStd, GLB and other project objects
 * are NOT exposed by this endpoint.
 */
import media from '../../shared/dreamhouse-case-study-media.json' with { type: 'json' };

const ROUTE = '/case-studies/dream-house/assets/';
const APPROVED_KEY = /^case-studies\/dreamhouse\/(?:v1\.5|current)\/[a-z0-9-]+\.webp$/;
const VALID_NAME = /^[a-z0-9-]+\.webp$/;
const publication = new Map(media.assets.map(asset => [asset.public_path, asset]));

function problem(error, status) {
  return Response.json({ ok: false, error }, {
    status, headers: {
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
    },
  });
}

async function digestHex(bytes) {
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function validWebp(bytes) {
  const b = new Uint8Array(bytes);
  return b.byteLength >= 12 &&
    b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 &&
    b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50;
}

export async function handleDreamHousePublishedMedia(request, env, catalog = publication) {
  const pathname = new URL(request.url).pathname;
  if (!pathname.startsWith(ROUTE) || !pathname.endsWith('.webp')) return null;
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return problem('method_not_allowed', 405);
  }
  const filename = pathname.slice(ROUTE.length);
  if (!VALID_NAME.test(filename)) return problem('asset_not_public', 404);

  const entry = catalog.get(pathname);
  if (!entry || entry.content_type !== 'image/webp' || entry.r2_bucket !== 'cad' ||
      !APPROVED_KEY.test(entry.r2_key) || !entry.r2_key.endsWith('/' + filename) ||
      entry.status !== 'schematic-design-review' ||
      !Number.isSafeInteger(entry.bytes) || entry.bytes <= 0) {
    return problem('asset_not_public', 404);
  }
  if (!env?.WEBSITE_ASSETS?.get) return problem('cad_r2_binding_missing', 503);

  const object = await env.WEBSITE_ASSETS.get(entry.r2_key);
  if (!object) return problem('asset_not_published', 404);

  const payload = await object.arrayBuffer();
  if (payload.byteLength !== entry.bytes || !validWebp(payload)) {
    return problem('asset_integrity_failed', 409);
  }

  const computedHash = await digestHex(payload);
  // All eleven curated images require the canonical DreamHouse source SHA-256;
  // no native BIM, private models or unaudited media ever enter this allowlist.
  if (!/^[0-9a-f]{64}$/.test(entry.sha256 || '') || entry.sha256 !== computedHash) {
    return problem('asset_integrity_failed', 409);
  }
  const etag = '"' + computedHash + '"';
  const headers = new Headers({
    'content-type': 'image/webp',
    'cache-control': 'public, max-age=3600',
    'etag': etag,
    'x-cad-computed-sha256': computedHash,
    'x-content-type-options': 'nosniff',
  });
  if (request.headers.get('if-none-match') === etag) {
    return new Response(null, { status: 304, headers });
  }
  if (request.method === 'HEAD') return new Response(null, { status: 200, headers });
  return new Response(payload, { status: 200, headers });
}
