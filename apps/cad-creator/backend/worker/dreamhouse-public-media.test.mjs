import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { handleDreamHousePublishedMedia } from './dreamhouse-public-media.js';
import media from '../../shared/dreamhouse-case-study-media.json' with { type: 'json' };

const origin = 'https://cad.inneranimalmedia.com';
const data = new Uint8Array(20);
for (const [index, byte] of [82,73,70,70,12,0,0,0,87,69,66,80].entries()) data[index] = byte;
const sha = createHash('sha256').update(data).digest('hex');
const entry = {
  id: 'aerial',
  public_path: '/case-studies/dream-house/assets/aerial.webp',
  r2_key: 'case-studies/dreamhouse/v1.5/aerial.webp',
  r2_bucket: 'cad',
  content_type: 'image/webp',
  bytes: data.byteLength,
  status: 'schematic-design-review',
};
const catalog = new Map([[entry.public_path, entry]]);
function request(path, method = 'GET', headers = {}) {
  return new Request(origin + path, { method, headers });
}
function binding(value = data) {
  return { WEBSITE_ASSETS: { async get(key) {
    assert.equal(key, entry.r2_key);
    return value === null ? null : { async arrayBuffer() { return value.buffer.slice(value.byteOffset, value.byteOffset+value.byteLength); } };
  } } };
}

test('public CAD case study returns only listed R2 WebP and computes digest', async () => {
  const res = await handleDreamHousePublishedMedia(request(entry.public_path), binding(), catalog);
  assert.equal(res.status, 200);
  assert.equal(res.headers.get('content-type'), 'image/webp');
  assert.equal(res.headers.get('etag'), '"' + sha + '"');
  assert.equal(res.headers.get('x-cad-computed-sha256'), sha);
  assert.deepEqual(new Uint8Array(await res.arrayBuffer()), data);
});

test('HEAD and conditional request share the same content digest and ETag', async () => {
  const head = await handleDreamHousePublishedMedia(request(entry.public_path,'HEAD'),binding(),catalog);
  assert.equal(head.status,200);
  assert.equal(head.headers.get('etag'),'"' + sha + '"');
  const cached = await handleDreamHousePublishedMedia(
    request(entry.public_path,'GET',{'if-none-match':'"'+sha+'"'}),binding(),catalog);
  assert.equal(cached.status,304);
});

test('rejects unlisted files and refuses to expose native IFC or FCStd', async () => {
  for (const bad of ['private.webp','DreamHouse.FCStd','DreamHouse.ifc','model.glb','%2e%2e%2fprivate.webp']) {
    const result = await handleDreamHousePublishedMedia(
      request('/case-studies/dream-house/assets/'+bad),{},catalog);
    assert.ok(!result || result.status===404,bad);
  }
  const post=await handleDreamHousePublishedMedia(request(entry.public_path,'POST'),{},catalog);
  assert.equal(post.status,405);
});

test('missing or tampered R2 bytes fail closed; future SHA-pinned assets are checked', async () => {
  const missing=await handleDreamHousePublishedMedia(request(entry.public_path),binding(null),catalog);
  assert.equal(missing.status,404);
  const tampered=new TextEncoder().encode('bad');
  const malformed=await handleDreamHousePublishedMedia(request(entry.public_path),binding(tampered),catalog);
  assert.equal(malformed.status,409);
  const pinned=new Map([[entry.public_path,{...entry,sha256:'0'.repeat(64)}]]);
  const mismatch=await handleDreamHousePublishedMedia(request(entry.public_path),binding(),pinned);
  assert.equal(mismatch.status,409);
});

test('published manifest contains eight review-only V1.5 files and no model binaries',()=>{
  assert.equal(media.schema,'dreamhouse.case-study-media.v1');
  assert.equal(media.revision,'V1.5');
  assert.equal(media.assets.length,8);
  assert.equal(new Set(media.assets.map(a=>a.id)).size,8);
  for(const asset of media.assets){
    assert.match(asset.r2_key,/^case-studies\/dreamhouse\/v1\.5\/[a-z0-9-]+\.webp$/);
    assert.equal(asset.r2_bucket,'cad');
    assert.equal(asset.status,'schematic-design-review');
    assert.equal(asset.public_path,'/case-studies/dream-house/assets/'+asset.id+'.webp');
    assert.equal(asset.width,960);
  }
});
