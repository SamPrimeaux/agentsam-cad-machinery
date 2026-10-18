# CAD Machinery — Source Ownership and Integration

**Status:** Source-convergence plan; no source migration has been performed.

## System boundaries

| Authority | Responsibilities |
| --- | --- |
| `agentsam-sdk` | SAM operation vocabulary, `sam.invoke()`, portable `cad.project` contracts, capability resolution, hooks, receipts, app installation contracts |
| `agentsam-cad-machinery` | Specialized CAD/BIM/geometry/scene execution implementations, engine adapters, transformation pipelines, integration tests and production case-study specifications |
| `apps/cad-creator` | The user-facing CAD product; remains in its existing SDK location until a verified migration and installed-app acceptance test |
| Existing MovieMode / CoPro | Edit and render cinematic presentations of model-derived shots; not a separate CAD model authority |
| R2 / Cloudflare Images / local storage | Real asset bytes, revisioned sources, high-resolution scenes, imagery and delivered media; no parallel catalog inside Git |

## Known source locations — read before moving

- SDK: `apps/cad-creator/`, `services/cad/`, `src/lib/cad/`
- 3D studio: `agentsam-3d-studio/` (existing Blender scenes and generated CAD assets)
- SDK CAD BIM library: `~/.agentsam/cad/bim-starters/` (FreeCAD parametric sources, derived GLB, thumbnails and manifests)
- SD-02 DreamHouse: existing project contract and verified revisioned outputs held separately
- MovieMode / CoPro: existing editing components, rendering contracts and runtime adapters

Local paths are discovery hints, not publicly accessible asset links.

## Migration acceptance gates

1. Inspect every canonical source, dirty worktree, branch, existing consumer and recorded provenance.
2. Create a file-and-capability inventory; preserve hashes, licenses, owners and asset relationships.
3. Select one owner for each implementation; do not blindly copy apps or move independent platform API contracts.
4. Migrate a cohesive implementation **with its tests** and maintain compatibility for existing SDK consumers.
5. Test actual artifact production from native CAD/BIM tools, not only binary discovery.
6. Verify CAD Creator launch from standalone and Local Studio host; avoid duplicate navigation shells.
7. Use source-derived 2D drawings, BIM, interactive GLB, cinematic media and document handoffs from the **same project revision**.
8. Only then retire the former source, update package/install authorities and merge into release branches.

## Quality / claims

- Installed != connected != capable != operation verified.
- A beautiful concept render is not a dimensioned building model.
- Derived `.glb` geometry never supersedes an editable FreeCAD / BIM source.
- Construction document drafts require licensed professional review; do not describe them as sealed or permit-approved.
- Published case-study content must have an explicit visibility decision and verifiable asset provenance.
- Do not publish unknown-license source models, personal paths, account credentials, client data or private raw captures.

## Repository convention

`case-studies/` contains authored work and verified development narratives. `catalog/` contains lightweight **indexes** of existing assets and status, not duplicate binary files. `docs/` captures source ownership, integration decisions and release standards. Engine/pipeline source directories should be created only when audited code is graduated into this repository.
