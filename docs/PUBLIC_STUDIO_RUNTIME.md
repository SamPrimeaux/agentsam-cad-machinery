# CAD Creator — public studio and packaged application

**Release state:** branch preview only until the SDK 2.6.13 source is reconciled and released. Do not deploy the older 2.6.12 snapshot over the live 2.6.13 CAD Studio.

## Ownership and routes

- `agentsam-sdk` owns portable CAD Creator/SamSketch app contracts, reusable editor source, `@inneranimalmedia/agentsam-nav`, Workbench primitives, SAM operations and installer/runtime adapters.
- `agentsam-cad-machinery` owns the production Worker, public website and demonstrations, approved deployment artifacts, project-specific native machinery and case studies. The SDK **never imports** this repository.
- `https://cad.inneranimalmedia.com/` and `/case-studies/dream-house` serve the public case study.
- `https://cad.inneranimalmedia.com/studio` serves the full standalone CAD Work experience **on the same origin**. No redirect to AgentSam, an external modeling tool, or a different product domain.
- `?presentation=embedded` omits the public host shell and mounts the identical CAD editor inside an authorized host such as Local Studio. That host supplies its shared Nav and identity context; don't nest a second global Nav.
- Nav and the Workbench composer are SDK packages; this repo only supplies a deployment-specific host adapter.

## Cloudflare runtime

The root and bundled `wrangler.jsonc` configurations must match. Preserve the custom domain, `DB` (`inneranimalmedia-business`), and `WEBSITE_ASSETS` (installation R2 bucket `cad`). `ASSETS` serves published, immutable browser bundles; it does **not** grant access to private R2 content.

The `AGENTSAM_WAI` Workers AI binding is for a constrained public planning demonstration. `CAD_DEMO_RATE_LIMIT` allows at most 6 requests per minute per observed IP per Cloudflare location, and the handler requires same-origin JSON and a public model identity. The public API returns a **proposal**, not edited source, geometry validation, stored files or revision receipts.

Before enabling or advertising broader anonymous AI usage, add account/visitor quota enforcement, abuse monitoring and a total spending budget. Direct CAD-native writes require authenticated, project-scoped SAM execution through an authorized host. Do not add anonymous R2 proxy, direct native binary execution, unrestricted file writes or CORS wildcard for protected resources.

## Reproducible release handoff

The current repository contains a 2.6.12 CAD app snapshot for build compatibility. The live `/studio/source-manifest.json` identifies 2.6.13, SDK commit `f242253d0737243792ee246934477e605a3eabc2`, and **sourceDirty=true**. This cannot serve as a reproducible release.

1. Reconcile and commit the in-progress SDK CAD shell and engineering editor work without discarding existing changes.
2. Build and test CAD Creator as a **standalone package and embedded Local Studio app** from the same clean SDK commit.
3. Publish/promote the SDK package or immutable build artifact with explicit source commit and integrity digest. Replace the obsolete snapshot only through that reviewed release process, not untracked copying.
4. Set `catalog/studio-source.lock.json` to `status: approved` with the **matching** clean commit and app version after integrity review. This lock blocks production builds until that handoff exists.
5. Verify site homepage, `/studio`, `?presentation=embedded`, mobile Chat/Work, BIM source integrity, signed-in native editing and public API restrictions. Only then merge/deploy.

CI sets `CAD_PREVIEW_BUILD=1` solely to compile and dry-run the branch while release is pending; the production build intentionally requires an approved source lock.

## Current limitations

Native FreeCAD/OCCT geometry editing, authored IFC/BIM objects, document persistence, full cinematic editing and per-user CMS theme resolution are not implemented by this public Worker patch. Those belong to the SDK's native hosts, CAD model/drawing tools and the shared Settings packages. Do not report the AI public proposal as a native modeling operation.
