# AgentSam CAD browser QA and capture

Source belongs to `agentsam-cad-machinery`; no independent application or repository.
`agentsam dockerize cad --tools all --port 8793` remains the authoritative native
CAD service builder and preserves OpenSCAD, FreeCAD, Blender, IFC, media and OCCT.

The browser image **inherits** the already built CAD layers and is used as a
separate, disposable QA/capture process. It deliberately does not modify,
stop, or replace the healthy `agentsam-cad` container.

From the existing `agentsam-cad-machinery` checkout:

```sh
docker build --file qa/browser/Dockerfile --tag agentsam-cad:browser-qa qa/browser
mkdir -p qa/browser/captures
docker run --rm --init --shm-size=1g \
  --user "$(id -u):$(id -g)" \
  -e HOME=/tmp -e CAPTURE_DIR=/captures \
  -e CAPTURE_URL=https://cad.inneranimalmedia.com/studio \
  --mount "type=bind,source=$PWD/qa/browser/captures,target=/captures" \
  --mount "type=bind,source=$PWD/qa/browser/capture.cjs,target=/opt/capture.cjs,readonly" \
  agentsam-cad:browser-qa node /opt/capture.cjs
```

Outputs are `captures/studio.png`, `captures/video/*.webm`, and
`captures/capture.json` with screenshot SHA-256, HTTP response and page errors.

Capture is best effort; a Cloudflare challenge is recorded as non-2xx/3xx, not
bypassed. Capture does not grant access to protected DreamHouse models.

The base image is 4+ GiB but the browser image reuses its existing layers;
only the browser dependencies and Chromium layers are additional. For fully
persistent `agentsam dockerize cad --tools all` integration the SDK-owned
`src/lib/cad-docker.js` generator must explicitly consume this QA capability;
patching generated `.agentsam/docker/...` files is not a solution.
