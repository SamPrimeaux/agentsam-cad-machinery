#!/usr/bin/env bash
# Mounts a built editorial SPA (About, Blog) into the CAD frontend dist.
#   usage: scripts/cms/mount-editorial-app.sh <editorial app dir> [dist dir]
# Build it first with its own asset dir so it cannot collide with CAD /assets:
#   (cd <app> && npx vite build --outDir /tmp/editorial-dist --emptyOutDir)   # vite.config build.assetsDir = editorial-assets
set -euo pipefail
APP="${1:?editorial app dir}"; DIST="${2:-apps/cad-creator/frontend/dist}"; OUT="${EDITORIAL_DIST:-/tmp/editorial-dist}"
mkdir -p "$DIST/about-app" "$DIST/assets"
cp "$OUT/index.html" "$DIST/about-app/index.html"
rm -rf "$DIST/editorial-assets"; cp -R "$OUT/editorial-assets" "$DIST/editorial-assets"
# public scene/media assets (scenes, work, aistudio) merge under /assets without touching hashed CAD bundles
cp -R "$APP/public/assets/." "$DIST/assets/"
echo "EDITORIAL_APP_MOUNTED into $DIST"
