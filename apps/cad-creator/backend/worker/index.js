import { getRoboticsPerceptionCapabilities, runRoboticsPerception } from '../src/robotics/perception.ts';
import beyondEvidence from '../../frontend/src/app/beyond/source-manifest.json';
import appManifest from '../../agentsam.app.json';
import { handlePublicBimStarters } from './bim-starters-library.js';

/**
 * Canonical Cloudflare Worker boundary for CAD Creator.
 *
 * The current application backend is not yet Worker-native. This checked-in
 * shell reserves the runtime boundary without silently pretending the Node or
 * library backend has been ported. Wire application routes here as that work lands.
 *
 * Worker deployment name (wrangler) may differ from APP.id — never conflate them.
 */
const APP = Object.freeze(appManifest);

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    if (method === "GET" && (path === "/health" || path === "/api/health")) {
      return json({
        ok: true,
        app: APP.id,
        runtime: "cloudflare-worker",
        presentation: "public-case-study-and-cad-ui",
        execution: "requires-authorized-SAM-host",
      });
    }

    if (method === "GET" && path === "/api/cad/health") {
      return json({
        ok: true,
        app: APP.id,
        runtime: "cloudflare-worker",
        cad_execution: "host_required",
        native_processes: false,
        docker_service: "not_probed_by_worker",
        project_access: "requires_authenticated_SAM_session",
      });
    }

    // Public Beyond editorial derivatives are an exact allowlist projected from
    // the reviewed source manifest. No arbitrary R2 key proxy or BIM source exposure.
    if (method === "GET" && path.startsWith("/beyond/media/")) {
      const name = path.slice("/beyond/media/".length);
      const file = beyondEvidence.files.find(entry => entry.output === "media/" + name);
      if (!file) return json({ok:false,error:"beyond_asset_not_public"},404);
      if (!env.WEBSITE_ASSETS) return json({ok:false,error:"cad_asset_bindings_missing"},503);
      const key = "public/cad/showcases/beyond-blueprint/v1.4/media/" + name;
      const asset = await env.WEBSITE_ASSETS.get(key);
      if (!asset) return json({ok:false,error:"beyond_asset_not_published"},404);
      return new Response(asset.body, {status:200,headers:{
        "content-type":"image/jpeg","cache-control":"public, max-age=600",
        "x-content-type-options":"nosniff","x-cad-evidence-revision":"v1.4",
        "access-control-allow-origin":"*"
      }});
    }

    // Explicitly published DreamHouse V1.1 read-only experience.
    // The R2 installation binding owns resolution: never expose a generic key proxy.
    // Native FCStd/IFC, personal scenes and mutable revisions remain protected.
    if (method === "GET" && path.startsWith("/api/cad/public-world/dreamhouse/v1.1/")) {
      const name = path.slice("/api/cad/public-world/dreamhouse/v1.1/".length);
      const publicPrefix = "public/cad/showcases/dreamhouse/v1.1/";
      const objects = {
        "model.glb": ["model.glb.gz", "model/gltf-binary", "gzip"],
        "manifest.json": ["world-manifest.json", "application/json", null],
        "design.json": ["plan-preview.json", "application/json", null],
      };
      const resource = objects[name];
      if (!resource) return json({ok:false,error:"world_asset_not_public"},404);
      if (!env.WEBSITE_ASSETS || !env.DB) return json({ok:false,error:"cad_asset_bindings_missing"},503);
      const key = publicPrefix + resource[0];
      // Registration is checked against the existing D1 artifact authority:
      // private source files must never be publicly proxied by guessed keys.
      const publication = await env.DB.prepare(
        "SELECT content_hash FROM agentsam_artifacts WHERE r2_key=? AND project_key='dreamhouse' AND visibility='public' AND artifact_status='published' LIMIT 1"
      ).bind(key).first();
      if (!publication?.content_hash) return json({ok:false,error:"world_publication_not_authorized"},404);
      const asset = await env.WEBSITE_ASSETS.get(key);
      if (!asset) return json({ok:false,error:"world_asset_not_published"},404);
      const payload = await asset.arrayBuffer();
      const digest = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",payload)))
        .map(byte=>byte.toString(16).padStart(2,"0")).join("");
      if (digest !== publication.content_hash) return json({ok:false,error:"world_publication_integrity_failed"},409);
      const headers = new Headers({
        "content-type": resource[1],
        "cache-control": "public, max-age=300",
        "x-content-type-options": "nosniff",
        "access-control-allow-origin": "*",
        "x-cad-scene-revision": "v1.1-experience",
        "x-cad-verified-sha256": digest
      });
      // Lossless transport compression, decoded server-side as a stream.
      const body = resource[2] === "gzip"
        ? new Blob([payload]).stream().pipeThrough(new DecompressionStream("gzip"))
        : payload;
      return new Response(body, {status:200, headers});
    }

    // Read-only BIM starter catalog; exact ID and file allowlists inside the handler.
    const bimLibraryResponse = await handlePublicBimStarters(request, env);
    if (bimLibraryResponse) return bimLibraryResponse;

    // Only explicit, presentation-safe assets are available to anonymous visitors.
    // Do not turn the private CAD R2 bucket into an arbitrary object proxy.
    if (method === "GET" && path.startsWith("/case-studies/dream-house/assets/")) {
      const name = path.substring("/case-studies/dream-house/assets/".length);
      const permitted = {
        "arrival-reference.jpg": "case-studies/dream-house/arrival-reference.jpg",
        "courtyard-reference.jpg": "case-studies/dream-house/courtyard-reference.jpg",
        "v11-arrival.jpg": "case-studies/dream-house/v11-arrival.jpg",
        "v11-courtyard.jpg": "case-studies/dream-house/v11-courtyard.jpg",
      };
      const key = permitted[name];
      if (!key) return json({ ok: false, error: "asset_not_public" }, 404);
      const asset = await env.WEBSITE_ASSETS.get(key);
      if (!asset) return json({ ok: false, error: "asset_not_published" }, 404);
      return new Response(asset.body, {
        status: 200,
        headers: {
          "content-type": "image/jpeg",
          "cache-control": "public, max-age=3600",
          "x-content-type-options": "nosniff",
        },
      });
    }

    // The standalone professional editor comes from the canonical SDK build.
    // Public Worker's authorization still fails closed for protected operations.
    if ((path === "/studio" || path === "/studio/") && method === "GET") {
      if (!env.ASSETS) return json({ok:false,error:"studio_bundle_unavailable"},503);
      const entry = await env.ASSETS.fetch(new Request(new URL("/studio-entry.txt", request.url), request));
      if (!entry.ok) return json({ok:false,error:"studio_bundle_entry_unavailable"},503);
      return new Response(entry.body,{headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}});
    }

    if (path.startsWith("/api/")) {
      // Public UI != permission to read user projects, invoke CAD engines,
      // upload imagery, consume generation credits or query private R2 objects.
      // The app may eventually attach an IAM-authenticated, resource-scoped
      // dispatcher; until then fail closed with an honest status.
      return json({
        ok: false,
        error: "cad_auth_required",
        message: "CAD project and generation operations require an authenticated AgentSam session and an authorized execution host.",
        action: "open_authenticated_agent_sam",
      }, 401);
    }

    if (!["GET", "HEAD"].includes(method)) {
      return json({ ok: false, error: "method_not_allowed" }, 405);
    }

    // Deliver the real Vite-built CAD Creator frontend and SPA routes.
    // ASSETS is Cloudflare's immutable frontend asset binding; it is not R2.
    if (env.ASSETS) return env.ASSETS.fetch(request);
    return json({ ok: false, error: "frontend_assets_missing" }, 503);
  },};
