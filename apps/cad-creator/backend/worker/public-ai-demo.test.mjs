import test from 'node:test';
import assert from 'node:assert/strict';
import {handleCadPublicDemo} from './public-ai-demo.js';

const base = 'https://cad.inneranimalmedia.com';
function input(prompt='Extend the courtyard wall by two meters') {
  return new Request(base+'/api/cad/demo/plan',{
    method:'POST', headers:{origin:base,'content-type':'application/json','cf-connecting-ip':'203.0.113.4'},
    body:JSON.stringify({project:'dreamhouse-v1.1-public',workspace:'model',prompt}),
  });
}
const env = () => ({
  AGENTSAM_WAI:{run:async()=>({response:'Inspect dependent walls; update constraints; verify the roof and elevations.'})},
  CAD_DEMO_RATE_LIMIT:{limit:async()=>({success:true})},
});
test('public capability discovery does not imply native writes',async()=>{
  const r=await handleCadPublicDemo(new Request(base+'/api/cad/demo/capabilities'),env());
  const d=await r.json();
  assert.equal(r.status,200);
  assert.equal(d.native_project_write,false);
});
test('successful AI planning never claims executed revision',async()=>{
  const r=await handleCadPublicDemo(input(),env());
  const d=await r.json();
  assert.equal(r.status,200);
  assert.equal(d.native_execution,'not_started');
  assert.equal(d.committed_revision,null);
});
test('cross-origin callers cannot invoke AI',async()=>{
  const r=await handleCadPublicDemo(new Request(base+'/api/cad/demo/plan',{
    method:'POST',headers:{origin:'https://elsewhere.test','content-type':'application/json'},
    body:'{}',
  }),env());
  assert.equal(r.status,403);
});
test('no rate limiter means no model usage',async()=>{
  const r=await handleCadPublicDemo(input(),{AGENTSAM_WAI:env().AGENTSAM_WAI});
  assert.equal(r.status,503);
});
test('non-public projects are rejected before model invocation',async()=>{
  const r=await handleCadPublicDemo(new Request(base+'/api/cad/demo/plan',{
    method:'POST',headers:{origin:base,'content-type':'application/json','cf-connecting-ip':'203.0.113.4'},
    body:JSON.stringify({project:'private-project',workspace:'model',prompt:'Change the private model'}),
  }),env());
  assert.equal(r.status,400);
});
test('rate-limited visitors cannot invoke model',async()=>{
  const e=env(); e.CAD_DEMO_RATE_LIMIT.limit=async()=>({success:false});
  const r=await handleCadPublicDemo(input(),e);
  assert.equal(r.status,429);
});
