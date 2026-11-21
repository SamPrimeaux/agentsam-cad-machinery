# CAD public website: authoritative ownership

The production site at `cad.inneranimalmedia.com` is served by the Cloudflare Worker **`agentsam-cad-creator`**, deployed from **`SamPrimeaux/agentsam-cad-machinery`** (`main`). This repository is the public CAD website and its deployment owner. The `inneranimalmedia` repository is **not** the deployment owner for this hostname. The AgentSam SDK owns the underlying CAD editor/runtime packages, not the public website's CMS page inventory.

## Production bindings

- Cloudflare custom-domain route: `cad.inneranimalmedia.com` in `wrangler.jsonc` and `apps/cad-creator/backend/wrangler.jsonc`. This is a **Cloudflare route**, not a runtime variable.
- `env.DB` is D1 `inneranimalmedia-business`; the matching `cms_sites.primary_domain` row selects the site for `new URL(request.url).hostname`.
- `env.WEBSITE_ASSETS` is R2 bucket `cad`; CMS published HTML fragments, header, footer and media are served from their D1-controlled object keys.
- `env.ASSETS` is the separate Worker static-assets binding for the compiled frontend. It is **not** R2.

There must be no `CMS_SITE_DOMAIN` environment variable or repository-level runtime fallback. The canonical URL for an R2-backed page comes from the matching `cms_sites.primary_domain`. A request that does not match a CMS site returns no CMS page.

## Current page split (production D1, 2026-11-21)

| Route | CMS page delivery | Next remaster goal |
| --- | --- | --- |
| `/` | `metadata_json.app_entry=/home-app/` | Author Home sections in CMS; preserve 3D runtime as a referenced scene component |
| `/cad` | `content_object_key=cms/primetech-site/v1/pages/cad.html` | Build a proper professional product presentation as editable HTML sections |
| `/beyond-the-blueprint` | `metadata_json.app_entry=/` | Replace baked-in narrative structure with CMS-owned story beats and references, retaining the real scene renderer |
| `/about` | `metadata_json.app_entry=/about-app/` | Expose native Earth/galaxy settings as CMS-authored scene configuration |

`cms_globals` currently publishes the shared header and footer from `cms/primetech-site/v1/globals/*.html` in the `cad` R2 bucket. Do not copy the marketing-site R2 artifacts from the `inneranimalmedia` bucket into this Worker. Instead, edit the correctly scoped CMS data and publish the corresponding CAD site artifacts through the approved publisher.

`catalog/cms/primetech-site` contains site-scoped source definitions/seed templates, not the sole source of existing live CMS edits. Never overwrite live D1/R2 state just because checked-in defaults differ.

## Release path

The production GitHub/Cloudflare Builds integration runs `npx wrangler deploy` against the root config on changes to `main`; that config invokes `scripts/build-public-worker.mjs`. Verify both Wrangler configurations, preserve the custom domain and bindings, and confirm public page/media behavior after production deployment. Do not deploy from the generic InnerAnimalMedia website repo or bypass the CAD Worker release pipeline.
