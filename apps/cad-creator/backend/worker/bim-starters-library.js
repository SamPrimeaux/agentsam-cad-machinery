/** Read-only, allowlisted BIM starter library from CAD Creator's existing R2 binding.
 * No arbitrary object key proxy, S3 credentials, model execution or project writes.
 */
const PREFIX = '/api/cad/bim-starters';
const KEY_ROOT = 'library/bim-starters/';
export const BIM_STARTER_FILES = Object.freeze({
  archdetail: Object.freeze({
    manifest: 'ArchDetail-Manifest.json',
    source: 'ArchDetail-FreeCAD-Source.FCStd',
    working: 'ArchDetail-FreeCAD-Working.FCStd',
    preview: 'ArchDetail-Interactive-Preview.glb',
    thumbnail: 'ArchDetail-Thumbnail.png',
  }),
  bimexample: Object.freeze({
    manifest: 'BIMExample-Manifest.json',
    source: 'BIMExample-FreeCAD-Source.FCStd',
    preview: 'BIMExample-Interactive-Preview.glb',
    thumbnail: 'BIMExample-Thumbnail.png',
  }),
});
const MIME = Object.freeze({
  source: 'application/octet-stream', working: 'application/octet-stream',
  preview: 'model/gltf-binary', thumbnail: 'image/png',
});
function responseJson(value, status = 200) {
  return new Response(JSON.stringify(value), {
    status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' },
  });
}
const error = (code, status) => responseJson({ ok: false, error: code }, status);
const keyFor = (id, kind) => `${KEY_ROOT}${id}/${BIM_STARTER_FILES[id][kind]}`;
async function getManifest(binding, id) {
  const row = await binding.get(keyFor(id, 'manifest'));
  if (!row) return null;
  if (row.size > 1_048_576) throw new Error('bim_starter_manifest_too_large');
  const doc = JSON.parse(await row.text());
  if (doc.schema !== 'agentsam.cad.bim-starter.v1' || doc.id !== id ||
      !Array.isArray(doc.objects) || doc.objects.length !== doc.objectCount) {
    throw new Error('bim_starter_manifest_invalid');
  }
  return { ...doc, readOnly: true, workingExists: Boolean(BIM_STARTER_FILES[id].working),
    artifactAuthority: 'FreeCAD .FCStd', storage: 'r2',
  };
}
function rangeFor(header, size) {
  if (!header) return null;
  const match = /^bytes=(\d*)-(\d*)$/.exec(header.trim());
  if (!match || (!match[1] && !match[2])) return false;
  const first = match[1] ? Number(match[1]) : null;
  const last = match[2] ? Number(match[2]) : null;
  if ((first !== null && !Number.isSafeInteger(first)) ||
      (last !== null && !Number.isSafeInteger(last)) || !size) return false;
  let start;
  let end;
  if (first === null) {
    start = Math.max(0, size - last);
    end = size - 1;
  } else {
    start = first;
    end = last === null ? size - 1 : Math.min(last, size - 1);
  }
  if (start >= size || end < start) return false;
  return { offset: start, length: end - start + 1 };
}
async function fileResponse(request, binding, id, kind) {
  const key = keyFor(id, kind);
  const head = await binding.head(key);
  if (!head) return error('bim_starter_asset_unavailable', 404);
  const range = rangeFor(request.headers.get('range'), head.size);
  if (range === false) return new Response(null, { status: 416, headers: {
    'content-range': `bytes */${head.size}`, 'accept-ranges': 'bytes',
  } });
  const headers = new Headers({
    'content-type': MIME[kind], 'accept-ranges': 'bytes',
    'x-content-type-options': 'nosniff', 'cache-control': 'public, max-age=600',
    'content-length': String(range ? range.length : head.size),
  });
  if (range) headers.set('content-range', `bytes ${range.offset}-${range.offset + range.length - 1}/${head.size}`);
  if (kind === 'source' || kind === 'working') {
    headers.set('content-disposition', `attachment; filename="${BIM_STARTER_FILES[id][kind]}"`);
  }
  if (request.method === 'HEAD') return new Response(null, { status: range ? 206 : 200, headers });
  const obj = await binding.get(key, range ? { range } : undefined);
  if (!obj) return error('bim_starter_asset_unavailable', 404);
  return new Response(obj.body, { status: range ? 206 : 200, headers });
}
export async function handlePublicBimStarters(request, env) {
  const segments = new URL(request.url).pathname.split('/').filter(Boolean);
  if (segments[0] !== 'api' || segments[1] !== 'cad' || segments[2] !== 'bim-starters') return null;
  if (!['GET', 'HEAD'].includes(request.method)) return error('bim_starter_read_only', 405);
  if (!env.WEBSITE_ASSETS) return error('cad_assets_binding_missing', 503);
  try {
    if (segments.length === 3) {
      const list = await Promise.all(Object.keys(BIM_STARTER_FILES).map(id => getManifest(env.WEBSITE_ASSETS, id)));
      const starters = list.filter(Boolean).map(({ objects: _objects, ...entry }) => entry);
      return request.method === 'HEAD' ? new Response(null, { status: 200 })
        : responseJson({ ok: true, starters, readOnly: true, localOnly: false });
    }
    const id = segments[3];
    if (!Object.hasOwn(BIM_STARTER_FILES, id)) return error('bim_starter_not_found', 404);
    if (segments.length === 4) {
      const starter = await getManifest(env.WEBSITE_ASSETS, id);
      if (!starter) return error('bim_starter_not_found', 404);
      return request.method === 'HEAD' ? new Response(null, { status: 200 })
        : responseJson({ ok: true, starter });
    }
    if (segments.length === 6 && segments[4] === 'file' &&
        Object.hasOwn(MIME, segments[5]) && Object.hasOwn(BIM_STARTER_FILES[id], segments[5])) {
      return fileResponse(request, env.WEBSITE_ASSETS, id, segments[5]);
    }
    return error('bim_starter_route_not_found', 404);
  } catch (err) {
    return error(err?.message === 'bim_starter_manifest_invalid' ? 'bim_starter_manifest_invalid' : 'bim_starter_library_unavailable', 503);
  }
}
