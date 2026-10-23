# DSK-001 — Mechanical engineering assembly proof

This is the **CAD Machinery-owned** source for a simple, parametric desk assembly. CAD Creator / SamSketch, hosted Studio and SDK should consume the same registered derivatives; they must not fork another desk asset catalog. This is a design candidate, not an approved manufacturing product.

## Source and boundaries

- `parameters.json` is the single named parameter authority. All dimensions are in mm.
- `build.py` is a CAD-container Python recipe: CadQuery/OCP exact B-rep assembly STEP, derived tessellated GLB in **metres**, STL in **millimetres**, with named parts.
- `verify.py` runs stdlib-only parameter-contract checks.
- Generated files belong in the gitignored `out/`, or in the existing authorized artifact/storage target registry with a checksum receipt. Binary files are not committed to Git.
- No physical CNC or robot hardware execution, postprocessed machine code, or certified structural ratings are included.

## First design

1200 × 600 × 740 mm nominal envelope; 25 mm birch plywood top, four SHS 40×40×2 legs, two long and two short RHS 40×20×2 rails, top and rail mounting plates, sixteen M8 fastener/washer/rivnut sets, sixteen desktop screws, four adjustable glides. This is the simple mechanical engineering lane complementary to the DreamHouse architectural/BIM lane.

The original conversation's Rev A generated prototype includes a PDF drawing set, exploded illustration, DXF plate profile, BOM, cut list and corresponding STEP/GLB/STL downloads. Those **generated** review artifacts are NOT represented as published R2 objects by this commit and need a verified storage-registration handoff. Their original preflight STEP bounds were 1200×600×740 mm with 89 named GLB nodes; this recipe intentionally uses true glTF metre scaling when regenerating.

## Local digital-only verification

```sh
python3 apps/cad-creator/machinery/cam/desk-assembly/verify.py
# Optional, only in the existing CAD container with CadQuery/OCP + trimesh + NumPy:
python3 apps/cad-creator/machinery/cam/desk-assembly/build.py
```

Before it is listed as a verified Studio catalog item, compare freshly regenerated geometry against the original package, inspect part interferences and drawings, resolve the selected fastener supplier details, and register the actual files in the existing artifact catalog. No claim of machine readiness is made.

This source is owned by `agentsam-cad-machinery`; SDK/runtime components should link to it rather than duplicate it.
