#!/usr/bin/env python3
"""DSK-001: CAD-only parametric assembly export; hardware is nominal presentation geometry.
Regenerates STEP (B-rep) and GLB/STL derivatives; does not issue NC instructions.
Requires CadQuery/OCP, trimesh, numpy as optional CAD-container dependencies.
"""
from pathlib import Path
import json
import cadquery as cq
import trimesh
import numpy as np
from cadquery import exporters

HERE = Path(__file__).resolve().parent
P = json.loads((HERE / "parameters.json").read_text())
OUT = HERE / "out"
OUT.mkdir(exist_ok=True)
g, steel, layout, holes = P["envelope"], P["steel"], P["layout"], P["holes"]
parts = []
pal = {"wood": (.69,.47,.28), "steel": (.18,.19,.21), "metal": (.55,.56,.58), "foot": (.08,.08,.09)}

def box(size, loc):
    return cq.Workplane("XY").box(*size).val().translate(cq.Vector(*loc))
def cylinder(radius, length, p, direction=(0,0,1)):
    return cq.Solid.makeCylinder(radius,length,cq.Vector(*p),cq.Vector(*direction))
def add(name,solid,material):
    parts.append((name,solid,material))

# Top and blind mounting holes; nominal CAD coordinate system, top at Z=740.
L,D,T=g["length"],g["depth"],g["top_thickness"]
top=cq.Workplane("XY").box(L,D,T).edges("|Z").fillet(P["wood"]["corner_radius"]).val().translate(cq.Vector(0,0,g["height"]-T/2))
for x in layout["leg_x"]:
    for y in layout["leg_y"]:
        for dx in (-30,30):
            for dy in (-30,30):
                top=top.cut(cylinder(holes["top_plate_diameter"]/2-1.5,P["wood"]["pilot_depth"],(x+dx,y+dy,g["height"]-T)))
add("P01-Desktop",top,"wood")
for ix,x in enumerate(layout["leg_x"]):
    for iy,y in enumerate(layout["leg_y"]):
        suffix=f"{ix+1}{iy+1}"
        z0,z1=layout["leg_bottom"],layout["leg_top"]
        outer=box((40,40,z1-z0),(x,y,(z0+z1)/2))
        leg=outer.cut(box((36,36,z1-z0+2),(x,y,(z0+z1)/2)))
        xface=x+20 if x<0 else x-20
        yface=y+20 if y<0 else y-20
        for z in holes["rail_plate_z"]:
            leg=leg.cut(cylinder(holes["rivnut_nominal_diameter"]/2,4,(xface-2,y,z),(1,0,0)))
            leg=leg.cut(cylinder(holes["rivnut_nominal_diameter"]/2,4,(x,yface-2,z),(0,1,0)))
            for axis,p,d in (("X",(xface,y,z),(-1,0,0) if x<0 else (1,0,0)),
                             ("Y",(x,yface,z),(0,-1,0) if y<0 else (0,1,0))):
                sleeve=cylinder(5.5,10.5,p,d).cut(cylinder(4.1,10.5,p,d))
                add(f"H08-Rivnut-{suffix}-{axis}-{z}",sleeve,"metal")
        add(f"P02-Leg-{suffix}",leg,"steel")
        plate=box((80,80,3),(x,y,713.5))
        for dx in (-30,30):
            for dy in (-30,30):
                plate=plate.cut(cylinder(holes["top_plate_diameter"]/2,5,(x+dx,y+dy,711)))
        add(f"P03-TopPlate-{suffix}",plate,"steel")
        foot=cq.Compound.makeCompound([box((36,36,25),(x,y,17.5)),cylinder(12.5,5,(x,y,0)),cylinder(4,8,(x,y,5))])
        add(f"H04-Foot-{suffix}",foot,"foot")

# Long/short rails, end plates, 16 nominal screw+washer sets.
n=0
for side,y in enumerate(layout["leg_y"]):
    length=steel["long_rail_length"]
    add(f"P05-LongRail-{side+1}",box((length,20,40),(0,y,690)).cut(box((length+2,16,36),(0,y,690))),"steel")
    for x in (-518.5,518.5):
        plate=box((3,40,40),(x,y,690))
        for z in holes["rail_plate_z"]:
            plate=plate.cut(cylinder(holes["rail_plate_diameter"]/2,5,(x-2.5,y,z),(1,0,0)))
        add(f"P06-LongEndPlate-{side+1}-{'L' if x<0 else 'R'}",plate,"steel")
    for x in (-517,517):
        inward=1 if x<0 else -1
        for z in holes["rail_plate_z"]:
            n+=1
            shaft=cylinder(4,16,(x,y,z),(-inward,0,0))
            head=cylinder(6.5,5,(x+inward*1.5,y,z),(inward,0,0))
            add(f"H09-Screw-{n:02d}",cq.Compound.makeCompound([shaft,head]),"metal")
            add(f"H10-Washer-{n:02d}",cylinder(8,1.5,(x,y,z),(inward,0,0)).cut(cylinder(4.2,1.5,(x,y,z),(inward,0,0))),"metal")
for side,x in enumerate(layout["leg_x"]):
    length=steel["short_rail_length"]
    add(f"P07-ShortRail-{side+1}",box((20,length,40),(x,0,690)).cut(box((16,length+2,36),(x,0,690))),"steel")
    for y in (-218.5,218.5):
        plate=box((40,3,40),(x,y,690))
        for z in holes["rail_plate_z"]:
            plate=plate.cut(cylinder(holes["rail_plate_diameter"]/2,5,(x,y-2.5,z),(0,1,0)))
        add(f"P08-ShortEndPlate-{side+1}-{'F' if y<0 else 'B'}",plate,"steel")
    for y in (-217,217):
        inward=1 if y<0 else -1
        for z in holes["rail_plate_z"]:
            n+=1
            shaft=cylinder(4,16,(x,y,z),(0,-inward,0))
            head=cylinder(6.5,5,(x,y+inward*1.5,z),(0,inward,0))
            add(f"H09-Screw-{n:02d}",cq.Compound.makeCompound([shaft,head]),"metal")
            add(f"H10-Washer-{n:02d}",cylinder(8,1.5,(x,y,z),(0,inward,0)).cut(cylinder(4.2,1.5,(x,y,z),(0,inward,0))),"metal")
n=0
for x in layout["leg_x"]:
    for y in layout["leg_y"]:
        for dx in (-30,30):
            for dy in (-30,30):
                n+=1
                shaft=cylinder(2.5,23,(x+dx,y+dy,712))
                head=cylinder(4.5,2.5,(x+dx,y+dy,709.5))
                add(f"H11-DesktopScrew-{n:02d}",cq.Compound.makeCompound([shaft,head]),"metal")

assembly=cq.Assembly()
scene=trimesh.Scene()
for name,solid,material in parts:
    color=pal[material]
    assembly.add(solid,name=name,color=cq.Color(*color))
    verts,triangles=solid.tessellate(0.35,0.12)
    mesh=trimesh.Trimesh(vertices=np.array([[v.x,v.y,v.z] for v in verts]),
                         faces=np.array([tuple(t) for t in triangles]),process=False)
    mesh.visual.face_colors=np.tile(np.array([*(int(c*255) for c in color),255],dtype=np.uint8),(len(mesh.faces),1))
    # glTF uses metres; geometry is millimetres, so apply a 0.001 factor before GLB export.
    mesh.apply_scale(0.001)
    scene.add_geometry(mesh,node_name=name,geom_name=name)
assembly.save(str(OUT/"desk_assembly.step"),exportType="STEP")
exporters.export(cq.Compound.makeCompound([p[1] for p in parts]),str(OUT/"desk_assembly.stl"),exportType="STL",tolerance=0.25,angularTolerance=0.1)
(OUT/"desk_assembly.glb").write_bytes(scene.export(file_type="glb"))
print(json.dumps({"part":P["id"],"revision":P["revision"],"component_objects":len(parts),
                  "glb_units":"metres","step_stl_units":"millimetres","status":"DESIGN_CANDIDATE"}))
