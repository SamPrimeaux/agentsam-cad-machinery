import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {gzipSync} from 'node:zlib';
import { build } from 'esbuild';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {mkdtempSync,rmSync} from 'node:fs';
import os from 'node:os';
import path from 'node:path';
const folder=mkdtempSync(path.join(os.tmpdir(),'agentsam-cad-worker-test-'));
const entry=path.join(folder,'worker.mjs');
await build({entryPoints:[fileURLToPath(new URL('./index.js',import.meta.url))],bundle:true,outfile:entry,platform:'node',format:'esm',banner:{js:'import {createRequire} from "node:module"; const require=createRequire(import.meta.url);'},logLevel:'silent'});
const worker=(await import(pathToFileURL(entry).href)).default;
rmSync(folder,{recursive:true,force:true});
const origin='https://cad.inneranimalmedia.com';
const prefix='public/cad/showcases/dreamhouse/v1.1/';
const content = new TextEncoder().encode('glTF verified model byte fixture');
const zipped=gzipSync(content);
const sha=(bytes)=>createHash('sha256').update(bytes).digest('hex');
function env({published=true,tamper=false}={}){
 return {
  WEBSITE_ASSETS:{async get(key){return key===prefix+'model.glb.gz' ? {arrayBuffer:async()=>zipped.buffer.slice(zipped.byteOffset,zipped.byteOffset+zipped.byteLength)}:null}},
  DB:{prepare(sql){assert.match(sql,/visibility='public'/);return {bind(key){assert.equal(key,prefix+'model.glb.gz');return {async first(){return published?{content_hash:tamper?'bad':sha(zipped)}:null}}}}}}
 };
}
test('published DreamHouse GLB is integrity checked and transparently decompressed',async()=>{
 const res=await worker.fetch(new Request(origin+'/api/cad/public-world/dreamhouse/v1.1/model.glb'),env());
 assert.equal(res.status,200);assert.equal(res.headers.get('content-type'),'model/gltf-binary');
 assert.equal(res.headers.get('x-cad-verified-sha256'),sha(zipped));
 assert.deepEqual(new Uint8Array(await res.arrayBuffer()),content);
});
test('rejects unregistered or tampered published scenes',async()=>{
 for(const flags of [{published:false},{tamper:true}]){
  const res=await worker.fetch(new Request(origin+'/api/cad/public-world/dreamhouse/v1.1/model.glb'),env(flags));
  assert.equal(res.status,flags.published===false?404:409);
 }
});
test('does not expose private IFC or native FreeCAD files through the public route',async()=>{
 const res=await worker.fetch(new Request(origin+'/api/cad/public-world/dreamhouse/v1.1/DreamHouse-V1.FCStd'),env());
 assert.equal(res.status,404);
 const privateApi=await worker.fetch(new Request(origin+'/api/cad/projects/private'),env());
 assert.equal(privateApi.status,401);
});
