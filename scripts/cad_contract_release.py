#!/usr/bin/env python3
"""
SAM CAD contract preflight and guarded source shipment.

Usage:
  python3 scripts/cad_contract_release.py
  python3 scripts/cad_contract_release.py --ship --stage <path> [...]

Default: read-only inspection + tests + report.
--ship: requires all gates to pass, explicitly named files,
        and a non-main feature branch.

Never modifies locked DreamHouse sources.
Never deploys Cloudflare Workers.
Never publishes npm packages.
"""

import argparse
import hashlib
import json
import os
import subprocess
import sys
import tempfile
import zipfile
from datetime import datetime, timezone
from pathlib import Path

HOME = Path.home()
SDK = HOME / "agentsam-sdk"
CAD = HOME / "agentsam-cad-machinery"

SOURCE = (
    HOME / "Documents/DreamHouse/SD02-RC1_bundle/"
    "dreamhouse_check/"
    "DreamHouse_SD02-RC1_proj_mrb5shkc_3kos2c_2026-10-18"
)

ADDENDUM = HOME / "Downloads/cad-project-v2-complete-delivery-addendum.zip"

REPORT = CAD / ".agentsam/reports/cad-contract-release"

EXPECTED = {
    "rooms": 27,
    "openings": 47,
    "elements": 144,
    "roofs": 7,
    "chimneys": 3,
    "views": 18,
    "sheets": 15,
    "outputs": 22,
}

REQUIRED_OPS = [
    "design.reference.ingest",
    "design.project.inspect",
    "design.plan.resolve",
    "design.wall.create",
    "design.opening.create",
    "design.roof.create",
    "design.element.place",
    "design.bim.validate",
    "design.ifc.export",
    "design.drawing.generate",
    "design.quantity.takeoff",
    "design.scene.build",
    "design.scene.optimize",
    "design.walkthrough.create",
    "design.presentation.render",
    "design.deliverables.package",
    "design.discipline.prepare",
    "design.compliance.evaluate",
    "design.drawing.coordinate",
    "design.revision.impact",
    "design.handoff.review",
]

RESULTS = []


def run(label, command, cwd, required=True):
    print(f"\n=== {label} ===", flush=True)

    try:
        result = subprocess.run(
            command,
            cwd=cwd,
            text=True,
            capture_output=True,
            timeout=180,
        )
        output = (result.stdout + "\n" + result.stderr).strip()

        print(output[-3500:] if output else "(no output)")

        ok = result.returncode == 0
        RESULTS.append({
            "gate": label,
            "passed": ok,
            "required": required,
            "returncode": result.returncode,
        })
        return ok

    except (OSError, subprocess.TimeoutExpired) as exc:
        print(f"FAILED: {exc}")
        RESULTS.append({
            "gate": label,
            "passed": False,
            "required": required,
            "error": str(exc),
        })
        return False


def check(label, condition, required=True, detail=None):
    ok = bool(condition)
    print(("PASS" if ok else "FAIL") + ": " + label)

    RESULTS.append({
        "gate": label,
        "passed": ok,
        "required": required,
        "detail": detail,
    })
    return ok


def digest(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def git(*args, cwd=SDK):
    return subprocess.check_output(
        ["git", *args],
        cwd=cwd,
        text=True,
    ).strip()


parser = argparse.ArgumentParser()
parser.add_argument("--ship", action="store_true")
parser.add_argument(
    "--stage",
    action="append",
    default=[],
    help="Explicit repository-relative file to stage (repeatable)",
)
args = parser.parse_args()

REPORT.mkdir(parents=True, exist_ok=True)

print("\nSAM CAD — CONTRACT RELEASE PREPARATION")
print("Mode:", "GUARDED SHIPMENT" if args.ship else "PREFLIGHT")
print("SDK:", SDK)
print("CAD:", CAD)

# -------------------------------------------------
# 1. Verify source and repository identities
# -------------------------------------------------

check("SDK repository exists", (SDK / ".git").exists())
check("CAD repository exists", (CAD / ".git").exists())
check("Locked project exists", SOURCE.is_dir())
check("Delivery addendum exists", ADDENDUM.is_file())

if not all([
    (SDK / ".git").exists(),
    (CAD / ".git").exists(),
    SOURCE.is_dir(),
    ADDENDUM.is_file(),
]):
    raise SystemExit("Required source missing. No changes made.")

sdk_branch = git("branch", "--show-current", cwd=SDK)
cad_branch = git("branch", "--show-current", cwd=CAD)

print("SDK branch:", sdk_branch)
print("CAD branch:", cad_branch)

run("SDK diff integrity", ["git", "diff", "--check"], SDK)
run("CAD diff integrity", ["git", "diff", "--check"], CAD)

# -------------------------------------------------
# 2. Verify locked source
# -------------------------------------------------

contract_file = (
    SOURCE / "01_project_contract/"
    "dream_house.sd02.project.json"
)

schema_file = (
    SOURCE / "01_project_contract/"
    "cad.project.v2.schema.json"
)

validator = (
    SOURCE / "01_project_contract/"
    "validate_project.py"
)

project = json.loads(contract_file.read_text())
schema = json.loads(schema_file.read_text())

check(
    "Locked contract identity",
    project.get("schema") == "cad.project.v2"
    and project.get("revision") == "SD-02-RC1",
)

check(
    "Revision stamp matches",
    project.get("lock", {}).get("stampedRevision")
    == project.get("revision"),
)

check(
    "Strict v2 schema preserved",
    schema.get("additionalProperties") is False,
)

for name, count in EXPECTED.items():
    actual = len(project.get(name, []))
    check(
        f"DreamHouse {name}: {actual}/{count}",
        actual == count,
    )

run(
    "DreamHouse project validator",
    [
        sys.executable,
        str(validator),
        str(contract_file),
        "--assets-dir",
        str(SOURCE / "05_reference_images"),
    ],
    SOURCE,
)

run(
    "DreamHouse source SHA manifest",
    [
        "shasum",
        "-a",
        "256",
        "-c",
        "MANIFEST.sha256",
    ],
    SOURCE,
)

# -------------------------------------------------
# 3. Inspect delivery addendum
# -------------------------------------------------

with zipfile.ZipFile(ADDENDUM) as archive:
    corrupt = archive.testzip()

    check(
        "Addendum ZIP integrity",
        corrupt is None,
    )

    root = "cad-project-v2-complete-delivery-addendum/"

    plan = json.loads(
        archive.read(
            root + "cad.project.v2.delivery-plan.example.json"
        )
    )

    delivery = plan["deliveryPlan"]

    check(
        "Addendum targets canonical v2",
        delivery.get("contract") == "cad.project.v2",
    )

    check(
        "13 acceptance checks declared",
        len(delivery.get("acceptanceChecks", [])) == 13,
    )

    check(
        "19 discipline coverage records",
        len(
            delivery.get(
                "drawingRequirements", {}
            ).get("disciplineCoverage", [])
        ) == 19,
    )

    check(
        "15 existing SD sheets referenced",
        len(
            delivery.get(
                "drawingRequirements", {}
            ).get("existingSdSheetIds", [])
        ) == 15,
    )

    check(
        "Professional release remains pending",
        delivery["productionPolicy"]["permitReady"] is False
        and delivery["productionPolicy"]["sealed"] is False,
    )

    # ZIP validator requires jsonschema in its Python environment.
    try:
        import jsonschema

        with tempfile.TemporaryDirectory() as directory:
            archive.extractall(directory)
            extracted = Path(directory) / root
            run(
                "Addendum bundled validator",
                [
                    sys.executable,
                    str(extracted / "validate_delivery_addendum.py"),
                ],
                extracted,
            )

    except ImportError:
        check(
            "Addendum JSON Schema validator installed",
            False,
            detail="Install jsonschema in a dedicated Python venv",
        )

# -------------------------------------------------
# 4. Verify SDK contract ownership
# -------------------------------------------------

contract_bridge = SDK / "src/lib/cad/project-contract.js"
sam_pack = SDK / "src/sam/packs/cad/index.js"

bridge_source = contract_bridge.read_text()
sam_source = sam_pack.read_text()

check(
    "CAD project contract is SDK-owned",
    "apps/cad-creator/" not in bridge_source,
    detail="SDK must not import its canonical contract from the app",
)

check(
    "SAM CAD pack is decoupled from app source",
    "apps/cad-creator/" not in sam_source,
)

exports = json.loads((SDK / "package.json").read_text()).get("exports", {})

check("SDK exports ./cad", "./cad" in exports)
check("SDK exports ./cad-project", "./cad-project" in exports)

# -------------------------------------------------
# 5. Existing production registry
# -------------------------------------------------

run(
    "CAD registry validation",
    ["node", "scripts/cad-registry.mjs", "--check"],
    SDK,
)

registry = SDK / "src/sam/packs/cad/index.js"

check(
    "SAM CAD operation pack exists",
    registry.is_file(),
)

# Operation-name presence is discovery only, not executable proof.
sources = [
    SDK / "src/sam/packs/cad/index.js",
    SDK / "src/lib/cad/project-runtime.js",
    SDK / "apps/cad-creator/shared/cad/src/domain/project-tools.js",
]

text = "\n".join(
    p.read_text(errors="replace")
    for p in sources if p.is_file()
)

operations = {}

for name in REQUIRED_OPS:
    operations[name] = {
        "declared_in_inspected_sources": name in text,
        "execution_verified": False,
    }

(REPORT / "operation-discovery.json").write_text(
    json.dumps(operations, indent=2) + "\n"
)

# -------------------------------------------------
# 6. Execute existing regression tests
# -------------------------------------------------

run(
    "CAD project tests",
    [
        "node", "--test",
        "test/integration/cad-project.test.mjs",
        "test/integration/cad-project-workflow.test.mjs",
        "test/integration/cad-project-native.test.mjs",
    ],
    SDK,
)

run(
    "CAD Docker tests",
    [
        "node", "--test",
        "test/cad-docker.test.mjs",
        "test/integration/cad-docker-executor.test.mjs",
    ],
    SDK,
)

run(
    "CAD operation tests",
    [
        "node", "--test",
        "test/integration/cad-operator-capabilities.test.mjs",
        "test/integration/cad-run-modes.test.mjs",
    ],
    SDK,
)

# -------------------------------------------------
# 7. Verify execution service and CAD Worker
# -------------------------------------------------

run(
    "Docker CAD service health",
    [
        "curl", "--fail", "--silent",
        "--max-time", "15",
        "http://127.0.0.1:8793/healthz",
    ],
    SDK,
)

cad_config = (
    CAD / "apps/cad-creator/backend/wrangler.jsonc"
)

config = json.loads(cad_config.read_text())

check(
    "Dedicated CAD Worker identity",
    config.get("name") == "agentsam-cad-creator",
)

check(
    "Dedicated CAD R2 bucket",
    any(
        b.get("binding") == "WEBSITE_ASSETS"
        and b.get("bucket_name") == "cad"
        for b in config.get("r2_buckets", [])
    ),
)

# Do not invoke Wrangler deploy here.
# The platform Worker is not part of this release script.

# -------------------------------------------------
# 8. Write release report
# -------------------------------------------------

required_failures = [
    r["gate"]
    for r in RESULTS
    if r["required"] and not r["passed"]
]

report = {
    "schema": "sam.cad.contract-release.v1",
    "generatedAt": datetime.now(timezone.utc).isoformat(),
    "sdkBranch": sdk_branch,
    "cadBranch": cad_branch,
    "project": "proj_mrb5shkc_3kos2c",
    "revision": "SD-02-RC1",
    "sourceSha256": digest(contract_file),
    "addendumSha256": digest(ADDENDUM),
    "results": RESULTS,
    "requiredFailures": required_failures,
    "readyForShipment": len(required_failures) == 0,
}

(REPORT / "release-report.json").write_text(
    json.dumps(report, indent=2) + "\n"
)

print("\n=== CONTRACT RELEASE RESULT ===")
print("Checks:", len(RESULTS))
print("Failures:", len(required_failures))
print("Report:", REPORT / "release-report.json")

for failure in required_failures:
    print("BLOCKED:", failure)

# -------------------------------------------------
# 9. Optional guarded Git shipment
# -------------------------------------------------

if args.ship:
    if required_failures:
        raise SystemExit("SHIP_BLOCKED: acceptance checks failed")

    if cad_branch in ("main", "master"):
        raise SystemExit("SHIP_BLOCKED: use a CAD feature branch")

    if not args.stage:
        raise SystemExit(
            "SHIP_BLOCKED: specify exact files with --stage"
        )

    for name in args.stage:
        target = (CAD / name).resolve()

        if not target.is_relative_to(CAD.resolve()):
            raise SystemExit(f"Unsafe stage path: {name}")

        if not target.is_file():
            raise SystemExit(f"Missing staged file: {name}")

    subprocess.run(
        ["git", "add", "--", *args.stage],
        cwd=CAD,
        check=True,
    )

    subprocess.run(
        ["git", "diff", "--cached", "--check"],
        cwd=CAD,
        check=True,
    )

    subprocess.run(
        [
            "git", "commit", "-m",
            "feat(cad): graduate verified project contracts",
        ],
        cwd=CAD,
        check=True,
    )

    subprocess.run(
        ["git", "push", "-u", "origin", cad_branch],
        cwd=CAD,
        check=True,
    )

    print("CAD_SOURCE_SHIPPED")

else:
    print("PREFLIGHT_ONLY: no commits or deployments")

if required_failures:
    raise SystemExit(1)
