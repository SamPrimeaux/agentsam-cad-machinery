import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { handleCmsPage } from './cms-site.js';

function mockEnv() {
  const calls=[];
  const site={id:'site-cad',primary_domain:'cad.inneranimalmedia.com'};
  const page={title:'CAD & Spatial Design',seo_json:'{}',metadata_json:'{}',content_object_key:'cms/primetech-site/v1/pages/cad.html'};
  return {
    calls,
    DB: { prepare(sql) { return {
      bind(...args) { calls.push({sql,args}); return this; },
      async first() {
        if (sql.includes('FROM cms_sites')) return calls.at(-1).args[0]===site.primary_domain ? site : null;
        if (sql.includes('FROM cms_pages')) return calls.at(-1).args[1]==='/cad' ? page : null;
        return null;
      },
      async all() { return {results:[]}; }
    }; } },
    WEBSITE_ASSETS: { async get(key) { return key===page.content_object_key ? {text:async()=>'<main><h1>CAD site from R2</h1></main>'} : null; } },
  };
}

test('CMS resolves site from actual Cloudflare-routed hostname; no CMS_SITE_DOMAIN variable',async()=>{
  const env=mockEnv();
  const result=await handleCmsPage(new Request('https://cad.inneranimalmedia.com/cad'),env);
  assert.equal(result.status,200);
  assert.match(await result.text(),/CAD site from R2/);
  const lookup=env.calls.find(c=>c.sql.includes('FROM cms_sites'));
  assert.deepEqual(lookup.args,['cad.inneranimalmedia.com']);
});

test('CMS canonical URL comes from matched D1 primary_domain',async()=>{
  const result=await handleCmsPage(new Request('https://cad.inneranimalmedia.com/cad?ref=campaign'),mockEnv());
  assert.match(await result.text(),/<link rel="canonical" href="https:\/\/cad\.inneranimalmedia\.com\/cad">/);
});

test('CMS does not leak the CAD site into a different incoming hostname',async()=>{
  const env=mockEnv();
  const result=await handleCmsPage(new Request('https://other.example/cad'),env);
  assert.equal(result,null);
  assert.deepEqual(env.calls.find(c=>c.sql.includes('FROM cms_sites')).args,['other.example']);
});

test('custom domain route and D1/R2 bindings remain, without environment domain variable',()=>{
  for(const name of ['../../wrangler.jsonc','../../../wrangler.jsonc']) {
    // backend file is in apps/cad-creator/backend/worker, so configs differ in traversal.
    const path=name==='../../wrangler.jsonc' ? new URL('../wrangler.jsonc',import.meta.url) : new URL('../../../../wrangler.jsonc',import.meta.url);
    const config=JSON.parse(readFileSync(path));
    assert.equal(config.name,'agentsam-cad-creator');
    assert.equal(config.vars?.CMS_SITE_DOMAIN,undefined);
    assert.ok(config.routes.some(r=>r.pattern==='cad.inneranimalmedia.com'&&r.custom_domain));
    assert.ok(config.d1_databases.some(d=>d.binding==='DB'&&d.database_name==='inneranimalmedia-business'));
    assert.ok(config.r2_buckets.some(d=>d.binding==='WEBSITE_ASSETS'&&d.bucket_name==='cad'));
  }
});
