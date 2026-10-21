import { handleCadPublicDemo } from './public-ai-demo.js';
import { getRoboticsPerceptionCapabilities, runRoboticsPerception } from '../src/robotics/perception.ts';
import appManifest from '../../agentsam.app.json';

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

    // Only explicit, presentation-safe assets are available to anonymous visitors.
    // Do not turn the private CAD R2 bucket into an arbitrary object proxy.
    if (method === "GET" && path.startsWith("/case-studies/dream-house/assets/")) {
      const name = path.substring("/case-studies/dream-house/assets/".length);
      const permitted = {
        "arrival-reference.jpg": "case-studies/dream-house/arrival-reference.jpg",
        "courtyard-reference.jpg": "case-studies/dream-house/courtyard-reference.jpg",
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

    const publicDemo = await handleCadPublicDemo(request, env);
    if (publicDemo) return publicDemo;

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
