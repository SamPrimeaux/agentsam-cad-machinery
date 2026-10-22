import assert from 'node:assert/strict';
import { test } from 'node:test';
import { handlePublicBimStarters } from './bim-starters-library.js';
const ROOT = 'http://cad.local/api/cad/bim-starters';
const prefix='library/bim-starters/';
function fakeR2() {
  const m = new Map();
  const files = {
    archdetail: ['ArchDetail', 'ArchDetail-Thumbnail.png', 'ArchDetail-Interactive-Preview.glb', 'ArchDetail-FreeCAD-Source.FCStd', 'ArchDetail-FreeCAD-Working.FCStd', 'ArchDetail-Manifest.json'],
    bimexample: ['BIMExample', 'BIMExample-Thumbnail.png', 'BIMExample-Interactive-Preview.glb', 'BIMExample-FreeCAD-Source.FCStd', null, 'BIMExample-Manifest.json'],
  };
  for(const [id,[name,thumb,preview,source,working,manifest]] of Object.entries(files)) {
    const base=prefix+id+'/';
    m.set(base+manifest, Buffer.from(JSON.stringify({schema:'agentsam.cad.bim-starter.v1',id,title:name,
      objectCount:1, meshCount:1, materialCount:1, sourceSha256:'f'.repeat(64),
      sourceFile:'source.FCStd', previewFile:'preview.glb', thumbnailFile:'thumbnail.png',
      objects:[{name:'Wall',label:'Wall',type:'IfcWall',parents:[],children:[],inPreview:true,visible:true}]})));
    m.set(base+thumb,Buffer.from('PNG_BYTES_TEST'));
    m.set(base+preview,Buffer.from('glTF_PAYLOAD_ABCD'));
    m.set(base+source,Buffer.from('FCStd_NATIVE_DOC'));
    if (working) m.set(base+working,Buffer.from('FCStd_WORKING_DOC'));
  }
  const lookups=[];
  function obj(key,bytes){return {size:m.get(key).length,body:bytes,text:async()=>m.get(key).toString(),httpEtag:'"etag"'};}
  return { lookups, m,
    async head(key){lookups.push(['head',key]);return m.has(key)?obj(key,null):null;},
    async get(key,opts){lookups.push(['get',key,opts]);if(!m.has(key))return null;
      const bytes=m.get(key);const r=opts?.range;const raw=r?bytes.subarray(r.offset,r.offset+r.length):bytes;
      return obj(key,new Response(raw).body);},
  };
}
const req=(suffix='',method='GET',headers={})=>new Request(ROOT+suffix,{method,headers});
async function called(r2,suffix='',method='GET',headers={}){
  return handlePublicBimStarters(req(suffix,method,headers),{WEBSITE_ASSETS:r2});
}
test('existing BIM workspace list and manifest preserve real object metadata',async()=>{
  const r2=fakeR2();const response=await called(r2);assert.equal(response.status,200);
  const body=await response.json();assert.equal(body.starters.length,2);assert.equal(body.readOnly,true);
  assert.equal(body.starters[0].sourceSha256,'f'.repeat(64));assert.ok(!('objects' in body.starters[0]));
  const detail=await (await called(r2,'/archdetail')).json();
  assert.equal(detail.starter.objects[0].name,'Wall');assert.equal(detail.starter.readOnly,true);
  assert.equal(detail.starter.workingExists,true);
  assert.equal((await (await called(r2,'/bimexample')).json()).starter.workingExists,false);
});
test('preview, native source, thumbnail and working maps are correct and never arbitrary',async()=>{
  const r2=fakeR2();
  for(const [kind,mime] of [['preview','model/gltf-binary'],['thumbnail','image/png'],['source','application/octet-stream'],['working','application/octet-stream']]){
    const resp=await called(r2,'/archdetail/file/'+kind);assert.equal(resp.status,200,kind);
    assert.equal(resp.headers.get('content-type'),mime);assert.ok((await resp.arrayBuffer()).byteLength>5);
  }
  assert.equal((await called(r2,'/bimexample/file/working')).status,404);
  assert.equal((await called(r2,'/archdetail/file/evidence')).status,404);
  assert.equal((await called(r2,'/archdetail/file/secret')).status,404);
  assert.equal((await called(r2,'/archdetail/file/manifest')).status,404);
  assert.equal((await called(r2,'/some-user-id')).status,404);
  assert.ok(r2.lookups.every(([,key])=>key.startsWith(prefix)));
});
test('single Range reads and HEAD return correct byte ranges; malformed requests fail 416',async()=>{
  const r2=fakeR2();const path='/archdetail/file/preview';
  const part=await called(r2,path,'GET',{range:'bytes=3-6'});
  assert.equal(part.status,206);assert.equal(part.headers.get('content-range'),'bytes 3-6/17');
  assert.equal(part.headers.get('accept-ranges'),'bytes');
  assert.equal(part.headers.get('content-length'),'4');
  assert.equal(await part.text(),'F_PA');
  const tail=await called(r2,path,'GET',{range:'bytes=-4'});assert.equal(await tail.text(),'ABCD');
  const head=await called(r2,path,'HEAD',{range:'bytes=2-3'});
  assert.equal(head.status,206);assert.equal(head.headers.get('content-length'),'2');
  assert.equal(await head.text(),'');
  assert.equal((await called(r2,path,'GET',{range:'bytes=500-800'})).status,416);
  assert.equal((await called(r2,path,'GET',{range:'bytes=1-4,9-11'})).status,416);
});
test('fail closed for writing, missing binding, invalid manifest and unrecognized paths',async()=>{
  const r2=fakeR2();const originalSize=r2.lookups.length;
  assert.equal((await called(r2,'/archdetail/file/source','PUT')).status,405);
  assert.equal(r2.lookups.length,originalSize);
  assert.equal((await handlePublicBimStarters(req(),{})).status,503);
  assert.equal(await handlePublicBimStarters(new Request('http://cad.local/api/cad/project/private'),{WEBSITE_ASSETS:r2}),null);
  const manifestKey=prefix+'archdetail/ArchDetail-Manifest.json';r2.m.set(manifestKey,Buffer.from('{"bad":true}'));
  assert.equal((await called(r2,'/archdetail')).status,503);
});
