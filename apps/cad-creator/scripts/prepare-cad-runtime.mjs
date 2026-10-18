import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {brotliDecompressSync} from 'node:zlib';
import {build} from 'esbuild';

const app = path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const sdk = path.resolve(app,'../..');
const runtime = path.join(app,'backend/runtime');
const bundled = path.join(runtime,'project-cli.mjs');
const source = path.join(sdk,'src/lib/cad/project-cli.js');
const manifestPath = path.join(runtime,'SOURCE.json');
fs.mkdirSync(runtime,{recursive:true});

if(fs.existsSync(source)){
  // SDK checkout: regenerate the executable bundle using the source authority.
  await build({entryPoints:[source],outfile:bundled,bundle:true,platform:'node',format:'esm',target:'node20'});
  if(fs.existsSync(path.join(sdk,'src/lib/cad/project-cli.d.ts')))
    fs.copyFileSync(path.join(sdk,'src/lib/cad/project-cli.d.ts'),path.join(runtime,'project-cli.d.mts'));
  fs.mkdirSync(path.join(runtime,'cad/blender'),{recursive:true});
  fs.copyFileSync(path.join(sdk,'services/cad/blender/adapter.py'),path.join(runtime,'cad/blender/adapter.py'));
}else if(!fs.existsSync(bundled)){
  // Standalone installation: restore a SHA-256-verified compiled SDK runtime.
  // This is a bundled executable derived from the SDK, NOT a competing API contract.
  const encoded = fs.readFileSync(path.join(runtime,'project-cli.mjs.br.b64'),'utf8').trim();
  const bytes = brotliDecompressSync(Buffer.from(encoded,'base64'));
  const expected = JSON.parse(fs.readFileSync(manifestPath,'utf8')).files['project-cli.mjs'];
  const actual = createHash('sha256').update(bytes).digest('hex');
  if(actual !== expected) throw new Error('packaged_cad_runtime_hash_mismatch');
  fs.writeFileSync(bundled, bytes);
}
if(!fs.existsSync(bundled)) throw new Error('packaged_cad_runtime_missing');
const provenance = JSON.parse(fs.readFileSync(manifestPath,'utf8'));
for(const [file,expected] of Object.entries(provenance.files)){
  const target = path.join(runtime,file);
  if(!fs.existsSync(target)) throw new Error('packaged_cad_runtime_file_missing:'+file);
  const actual=createHash('sha256').update(fs.readFileSync(target)).digest('hex');
  if(!fs.existsSync(source) && actual!==expected)
    throw new Error('packaged_cad_runtime_file_invalid:'+file);
}
const distCad = path.join(app,'backend/dist/cad');
fs.mkdirSync(path.dirname(distCad),{recursive:true});
fs.cpSync(path.join(runtime,'cad'),distCad,{recursive:true});
