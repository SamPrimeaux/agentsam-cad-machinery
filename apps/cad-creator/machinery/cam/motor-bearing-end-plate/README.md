# CAD Machinery / CAM Model 01

The authoritative code for this candidate lives in **agentsam-cad-machinery**. AgentSam SDK owns only generic orchestration contracts. Sculpt Studio consumes the STL/WebP derivative; it must not become the CAD source of truth.

## Build and inspect

From `apps/cad-creator`:

- `npm run cam:verify` runs deterministic geometry-independent NC/backplot tests (no machine required).
- `npm run cam:build:model-01` uses the host-configured native FreeCAD Python/Blender runtimes and emits JSON/FCStd/STEP/STL/drawings/NC review and evidence under `.agentsam/artifacts/cam/motor-bearing-end-plate/candidate-150mm/`.
- Native hosts can supply `AGENTSAM_FREECAD_PYTHON`, `AGENTSAM_FREECAD_RESOURCES` and `AGENTSAM_BLENDER_BIN`. No user-specific directory or Cloudflare bucket is baked into the runnable recipe.

The full pipeline includes `procedure.json` for versioned host orchestration and `package_artifacts.py` for deterministic receipt files. This host's current PTY runtime does not expose FreeCAD's system home discovery correctly (`Getting HOME path from system failed`), so native end-to-end regeneration remains a separate gate; do **not** turn a failed native build into a passing receipt. Saved 19/19 STEP geometry checks, generic G-code 12/12 validation, and the render under `.agentsam/artifacts/...` were produced with FreeCAD/Blender in the earlier approved application lane. R2 registration has not been established for these candidate assets.

## Approval boundary

The 150-mm outer diameter is a **proposed** alternative to the originally requested 120-mm layout, which conflicts with the pocket/bearing-seat geometry. The generated NC code is generic, not post-verified, not simulated on a real fixture, and not permitted for a machining run. Bore H7, feed/speed, tool calibration and collision clearance need a qualified manufacturing review.

## Ownership and Studio integration

`candidate-evidence.json` records part identity and byte hashes. The STL derivative and rendered thumbnail can be imported into Sculpt Studio without replacing its shell or editing the canonical FreeCAD/STEP geometry. Future R2/installation attachment must resolve a configured bucket and use the verified content hash; never hardcode an operator/account identity in the model package.
