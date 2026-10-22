# CAD Machinery — main consolidation / October 22, 2026

## Inventory and source owners

- `origin/main` is the baseline for CAD Creator, its standalone/embedded shell, shared CAD contracts, robotics features and existing Worker.
- Historical PR #6 (`fix/cad-public-dreamhouse-live-20261021`) is **not** safe to merge wholesale: its one snapshot commit diverges from the 21 commits on current `main`. Preserve/reuse its verified public-world route and hash checks, BIM starter serving/tests and public release browser QA, but do not replace main's whole CAD app with the old snapshot.
- PR #5 (`feat/cad-workspace-standalone-embedded-20261020`) is draft; it contains additional public AI/Workbench boundary work but cites unapproved SDK-source/version drift. Do not silently enable public AI or overwrite newer merged CAD/Studio functionality with that draft.
- `agentsam-3d-studio` Sculpt shell's original two-commit feature branch is already contained in remote `main` and passed its local 7-test/build gate. The Studio repo owns gallery, scene editing, assistant, shell and source-backed asset inventory—not engineering B-Rep authority.
- `agentsam-sdk` PR #344 owns generic authorized operations and PrimeTech protocol support. The concrete CAM model, parameters, FreeCAD/Blender code, toolpaths, and derivative provenance are moved into CAD Machinery instead of letting application domain code accumulate in SDK.

## Integrated in this change

- Preserve newer CAD `main`; transplant public-world, content-hash, privacy-gated Worker route and BIM starter library with 7 passing Worker tests.
- Keep previously validated browser capture and contract-release QA; remove personal absolute paths from its default source selection, requiring explicit project/addendum host values.
- Install CAM Model 01 under `apps/cad-creator/machinery/cam/` with native geometry source, STEP/STL pipeline, review-only NC generator, dimensioned drawings, preview and reproducible evidence packaging.
- Add `cam:verify` and `cam:build:model-01` app commands, plus a part evidence manifest. Generated binary assets are ignored in code git and tracked by SHA-256 in the evidence contract.

## Open release gates

- Reproduce the native FreeCAD build in a host with working FreeCAD system-home context. The existing remote PTY lane returns `Getting HOME path from system failed`; no new native execution receipt should be claimed.
- Cloud R2 publication and external-drive replication for the CAM asset are still pending; local artifact copies alone do not count as remote storage.
- Current CAD frontend build/typecheck passes using the existing SDK Workbench source package. Perform a clean-install `npm ci` with the published version and release lock, then validate standalone and embedded routes before deployment.
- The public Worker does not grant anonymous CAD project mutations. Authenticate before adding private CAD, project or manufacturing endpoints.
- Only after this newer-`main` integration is accepted should PR #6 be closed as superseded, and its old branch pruned; PR #5 must receive a separate qualified disposition, not an unreviewed snapshot merge.
