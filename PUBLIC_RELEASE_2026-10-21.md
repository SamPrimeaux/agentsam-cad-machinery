# CAD Creator public release — 2026-10-21

- Production Worker: `agentsam-cad-creator` at `https://cad.inneranimalmedia.com`.
- Cloudflare deployed version: `c73f0d1b-3764-4347-b7a7-292ea49e1e66`.
- Canonical SDK CAD frontend source: `SamPrimeaux/agentsam-sdk` commit `de17b6895b9f7fdb2428a2c2532df7a40164ba4b`, product version `2.6.13`.
- Build entry: `AGENTSAM_SDK_SOURCE_ROOT=<verified SDK checkout> wrangler deploy -c wrangler.jsonc`.
- Assets: Cloudflare `ASSETS` binding for Vite frontend; `WEBSITE_ASSETS` for authorized R2 CAD artifacts; `DB` for artifact-publication verification.
- Only the explicitly registered `public/cad/showcases/dreamhouse/v1.1/` projection is anonymously readable. Private project CRUD and native `.FCStd` / `.ifc` remain protected.
- Pre-deploy checks: public build, Wrangler `--dry-run`, public-world authorization/hash/decompression tests, BIM starter tests all passed.
- Live readback: HTTP 200 for `/`, `/studio`, `/studio/source-manifest.json`, `manifest.json`, `design.json`, `model.glb`; downloaded GLB has `glTF` binary magic and `model/gltf-binary` MIME type. Private CAD route returns 401 and private native source through public world returns 404.
- The public Worker serves a visual scene and preview; it cannot execute FreeCAD on a remote user's Mac. Native FreeCAD execution belongs to the SDK host/desktop adapter (separate PR #338).

This production snapshot is source-controlled separately from the canonical reusable SDK product. Do not manually edit a cloned SDK frontend to diverge from the source commit; refresh through the build script.
