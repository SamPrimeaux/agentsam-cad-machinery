# DreamHouse V1.2 — Architecture and BIM review

**Status:** Prepared for owner design review. Not issued for construction or final virtual-tour production.

## Source of truth
- Original FreeCAD: `builds/v1/DreamHouse-V1.FCStd` — preserved and hash-verified.
- Original IFC: `builds/v1/DreamHouse-V1.ifc` — preserved and hash-verified.
- Latest Blender: `builds/v1.2/DreamHouse-V1.2.blend` — preserved and hash-verified.
- This revision FreeCAD: `bim/DreamHouse-V1.2-Review-BIM.FCStd`.
- This revision IFC4: `bim/DreamHouse-V1.2-Review-BIM.ifc`.

**Independent QA:** 189 / 189 proposed items re-open as valid native FreeCAD solids; 189 IFC4 representations with spatial containment were created; 21 original room GUIDs and names retained. Previous `Pool terrace` and `Roof rear_veranda` superseded elements omitted from V1.2 outputs. The original V1 source files remain intact.

These newly classified BIM solids are currently geometry-based/faceted components, rather than fully rebuilt parametric FreeCAD Arch walls, roof objects, and hostable openings. This is a material limitation, not equivalent to a final fully parametric construction BIM.

## Document index
- A01 — Ground floor native FreeCAD wall / opening cut at Z +1.20m, SVG / DXF.
- A02 — Dimensioned site, pool, courtyard, garage and driveway plan, SVG / DXF.
- A03 — Original plus new roof plan, SVG.
- A04 — Pavilion transverse section, actual geometric intersections at Y +16m, SVG.
- A05 — Courtyard and pool level section at X -7m, SVG.
- A06 — Original 21-space IFC identity schedule, SVG.
- A07-A13 — Orthographic overview/isometrics, four facades and roof-off context, PNG.
- A14 — BIM-labeled isometric technical wireframe, SVG.
- `DreamHouse-V1.2-Architectural-Approval-Review.pdf` — 14 pages, verified.
- `bim/independent-qa.json` and `bim/bim-assembly-receipt.json` — reproducible verification records.

## Proposed design being reviewed
- Enlarged pool **17.4 × 8.2 m**.
- Pavilion **14.0 × 9.05 m**, intended apex reference +8.55 m.
- Angled shop rotation **-12 degrees**, shop slab 12.2 × 13.0 m.
- Courtyard walking surfaces and garage slab are all at **Z +0.000 m** by design.
- Side service driveway designed at **5.7m nominal width**.

## Attention required — owner approval / pre-tour blockers
1. **Workshop access:** The new glazed garage facade is currently modeled as pane/metal panel geometry without an operable BIM `IfcDoor`, hosted opening, or confirmed pedestrian path into the house. Correct before collision-ready touring.
2. **Driveway transition:** The revised driveway modeled top is **Z -0.09 m** while the workshop/courtyard slabs finish at **Z +0.00 m**. Confirm the 90mm transition as an accessible/ramped connection rather than an unintended lip or step.
3. **Pavilion roof apex:** The proposal declares a +8.55 m design ridge, but some evaluated roof-solid geometry extends above it (up to +8.7053 m due to roof thickness). Reconcile structural/reference elevation before dimension signoff.
4. **Structural fit:** Verify beam/post spans, cross-ties, roof overhangs and actual intersection with original house. They are conceptual and have not been structurally engineered.
5. **Pool/land grading:** Flat walking elevation is modeled, but certified drainage, pool water/basin construction, waterproofing, and real terrain elevations are unresolved.
6. **Circulation + room interiors:** The original 21 IFC room identities survive, but furnished clearances, door swings, ADA/accessibility, true walkthrough openings, stair relationships, and collisions have not been proven in the updated FreeCAD project.
7. **Survey and bearings:** X/Y drawing sides are model coordinates, not georeferenced cardinal elevations. Property setbacks, setbacks, drainage and code need site evidence.
8. **Parametric authoring:** Convert accepted faceted components to native parametric Arch objects/hosted openings before representing the result as a final production-editable BIM.

## Approval walkthrough
Check the courtyard/pool orientation first (A02, A05), then the angled garage and driveway (A01, A02, A14), the pavilion/roof (A03, A04), the four exterior facades (A09-A12), and interior space schedule (A06) with the actual 3D model open. Mark corrections before finalizing technical drawings.

**Do not start the finished virtual-tour / cinematic presentation pipeline until the owner has inspected, corrections are applied, a new revision is frozen, IFC geometry and collision QA pass, and the owner explicitly approves the architectural model.**

## Reproduction
```sh
cd ~/dreamhouse
/Applications/Blender.app/Contents/MacOS/Blender -b builds/v1.2/DreamHouse-V1.2.blend -P builds/v1.2/export_to_native_bim.py
FC=/Applications/FreeCAD.app/Contents/Resources
PYTHONPATH="$FC/lib:$FC/Mod:$FC/lib/python3.11/site-packages" "$FC/bin/python" builds/v1.2/assemble_native_bim.py
PYTHONPATH="$FC/lib:$FC/Mod:$FC/lib/python3.11/site-packages" "$FC/bin/python" builds/v1.2/generate_bim_drawing_set.py
PYTHONPATH="$FC/lib:$FC/Mod:$FC/lib/python3.11/site-packages" "$FC/bin/python" builds/v1.2/verify_bim_review.py
/Applications/Blender.app/Contents/MacOS/Blender -b builds/v1.2/DreamHouse-V1.2.blend -P builds/v1.2/render_documentation_views.py
/Applications/Blender.app/Contents/MacOS/Blender -b builds/v1.2/DreamHouse-V1.2.blend -P builds/v1.2/render_bim_wireframe.py
swift builds/v1.2/package_architectural_review.swift
```
