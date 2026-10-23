#!/usr/bin/env python3
"""Offline DSK-001 parameter contract check. Does not operate CNC/robot hardware."""
from pathlib import Path
import json
P=json.loads((Path(__file__).parent/"parameters.json").read_text())
g,s,l=P["envelope"],P["steel"],P["layout"]
checks={
 "schema":P["schema"]=="inneranimalmedia.cad.parametric-desk.v1",
 "height_stack":l["leg_bottom"]+s["leg_length"]+s["top_plate"][2]+g["top_thickness"]==g["height"],
 "rail_length_x":s["long_rail_length"]+2*s["rail_plate"][2]==abs(l["leg_x"][1]-l["leg_x"][0])-40,
 "rail_length_y":s["short_rail_length"]+2*s["rail_plate"][2]==abs(l["leg_y"][1]-l["leg_y"][0])-40,
 "hardware":P["hardware"]["M8_screws"]==16 and P["hardware"]["wood_screws"]==16,
 "not_manufacturing_released":P["status"]=="DESIGN_CANDIDATE" and P["design_targets"]["not_a_certified_rating"]
}
print(json.dumps({"part":P["id"],"expected_checks":len(checks),"actual_passed":sum(checks.values()),"checks":checks},indent=2))
assert all(checks.values()),"Parameter contract failed"
