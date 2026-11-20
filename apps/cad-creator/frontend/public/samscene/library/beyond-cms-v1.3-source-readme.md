# Beyond the Blueprint — InnerAnimal V1.3 Local Art-Direction Review

**Owner:** InnerAnimalMedia public-site presentation / existing IAM navigation and scene runtime.
**Source authority:** DreamHouse V1.2 native Blender, FreeCAD, IFC, GLB and approval review package.
**Status:** Local owner-review only; this is not an architectural or production-signoff artifact.

## Run

From `~/inneranimalmedia`:

```sh
PORT=4386 node apps/inneranimalmedia/brand/preview-server.mjs
```

Visit `http://127.0.0.1:4386/beyond-the-blueprint` or
`http://127.0.0.1:4386/work/beyond-the-blueprint`.

The local preview server serves the actual DreamHouse V1.2 GLB **read-only** from
`~/dreamhouse/builds/v1.2/DreamHouse-V1.2.glb`, with an optional
`DREAMHOUSE_V12_GLB` override. That binary stays outside the site and
never becomes an automatic package dependency. It is loaded on demand
as the user approaches the model reveal, not during the initial hero.

## Page composition

Seven semantic chapters use one time-driven, fixed WebGL stage. Wheel, touch, and keyboard intents trigger one full 1.1-second transition at a time; the browser scrollbar does not scrub these scenes:

1. Aspiration — a distant building and open horizon.
2. Complexity — overlapping systems, bridges and buildings.
3. Uncertainty — follow the emerging route.
4. Perseverance — the terrain and light open.
5. Understanding — genuine V1.2 GLB architectural geometry staged in editorial clay.
6. Capability — a feature-edge technical projection derived from that same source geometry.
7. Possibility — multiple paths through the world.

The last scene hands control back to native scroll for the editorial case study. Reversing at the top of that region can re-enter the final scene. Reduced-motion readers get seven ordinary chapters instead of a gesture lock. The fixed scene is a rendering layer, not a mock CAD editor. Its procedural
landscape is intentionally fictional, with no implied surveyed geography,
engineering approvals or verified site coordinates. The model's architectural
proportions are preserved in the native GLB; any display scaling is only
editorial staging. No source-model mutations occur.

Below the journey, a full architectural case study uses actual V1.2
review images (isometric, courtyard, BIM wireframe, plan). It then links to
other industries, whose case-study destinations are separate pages rather
than popups, rendered from the host-owned editorial catalog.

## Reproducible source evidence

The `source-manifest.json` records SHA-256 for the actual local GLB, inputs
and six exported editorial thumbnails. Assets are intentionally lightweight.

```sh
node apps/inneranimalmedia/brand/beyond/scripts/prepare-v12-media.mjs --verify
# Only when original source has explicitly changed:
node apps/inneranimalmedia/brand/beyond/scripts/prepare-v12-media.mjs --update
# Generate a single seven-frame screenshot storyboard, with no source changes:
node apps/inneranimalmedia/brand/beyond/scripts/capture-storyboard.mjs
```

The single contact sheet is `review/seven-frame-storyboard.jpg`.
Scripts are explicit opt-in, not hooks in general app/package builds or
deployments. There are no R2 writes, native model copies or new theme releases.

## Architecture, performance, accessibility

- `preview/beyond-the-blueprint.html`: semantic content and full case-study structure.
- `brand/beyond/style.css`: clay surfaces, layered typography, glass panels,
  responsive presentation. Scoped to this one page.
- `brand/beyond/story.js`: scroll positions, progress rail, chapter navigation,
  motion controls, runtime fallback and lazy scene loading.
- `brand/beyond/world.js`: procedural illustrative scenery and actual native
  GLB editorial/technical projection via installed Three.js, not a duplicated vendor fork.
- `brand/beyond/chapters.json`: single storyboard/copy owner; the server renders seven semantic chapters from this manifest.
- `brand/preview-server.mjs`: local-only explicit routes and allowlisted assets.
- `packages/iam-scene-runtime/src/gesture-stage.js`: reusable transition engine, independently unit-tested; product identity and CAD geometry remain outside.

The world can fall back to actual review stills when WebGL is unavailable. Semantic
content remains navigable with keyboard controls and ordinary links.
`prefers-reduced-motion` and a visible motion toggle disable smooth camera
interpolation. Device pixel ratio is capped, WebGL render frequency is throttled
and the native GLB is on-demand. The desktop model viewer is a presentation
of the source, **not** the production CAD route or a promise of verified editing.

## Approval gates

DreamHouse V1.2 remains in architectural review. In particular the garage
opening, driveway elevation, pavilion ridge height, parametric BIM conversion,
walkthrough collision and structural/site approvals require separate work.

**Do not** publish this narrative to live InnerAnimal pages, mutate project
geometry, deploy unrelated applications, upgrade customer themes or turn this
story into a product-level default without owner review. The broader message
is about enabling aspiration through accessible capability, not claiming that
every described domain product is complete or generally available.


## Isolated remote preview (V1.4)

**Verified deployment:** `https://review.iam-beyond-blueprint-review.pages.dev/beyond-the-blueprint/`

Cloudflare Pages project `iam-beyond-blueprint-review`, branch `review`; no
`inneranimalmedia.com` production route, CAD worker, Shopify/CMS theme or SDK package is touched.
This public, unlisted preview has `x-robots-tag: noindex`; it is **not**
protected by Cloudflare Access. Do not place private customer records here.

Build-only deployment exporter, with hashed manifest and fail-closed GLB hash
check. The exporter expects an explicit verified local renderer, and only writes
the chosen `/tmp` output (it does not deploy automatically).

```sh
PORT=4386 node apps/inneranimalmedia/brand/preview-server.mjs
BEYOND_BUILD_ORIGIN=http://127.0.0.1:4386 \
  node apps/inneranimalmedia/brand/beyond/scripts/export-site.mjs \
  --out /tmp/iam-beyond-release
# Manual, scoped opt-in publication only:
wrangler pages deploy /tmp/iam-beyond-release \
  --project-name iam-beyond-blueprint-review --branch review
```

Provide `DREAMHOUSE_V12_GLB` and `BEYOND_THREE_ROOT` when the model and
installed Three.js are outside this checkout. Neither path is compiled into
the public bundle; only the verified model bytes and imported viewer modules
are deployed in this isolated preview.

This deliverable does not constitute final architectural approval, nor does it
automatically connect SamSketch, CAD Creator, AgentSam chat, or desktop identity.
Those require their own host/workspace adapters and destination tests.
