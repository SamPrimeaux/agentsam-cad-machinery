'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { chromium } = require('playwright');
const URL_TO_CAPTURE = process.env.CAPTURE_URL || 'https://cad.inneranimalmedia.com/studio';
const OUTPUT = process.env.CAPTURE_DIR || '/captures';
const SIZE = { width: 1440, height: 900 };
const SHA256 = (buffer) => crypto.createHash('sha256').update(buffer).digest('hex');
async function run() {
  // Browser execution in a container is untrusted, not a privileged system browser.
  fs.mkdirSync(path.join(OUTPUT, 'video'), { recursive: true });
  const browser = await chromium.launch({ headless: true, args: [
    '--no-sandbox', '--enable-webgl', '--use-gl=angle',
    '--use-angle=swiftshader', '--enable-unsafe-swiftshader',
  ] });
  try {
    const context = await browser.newContext({
      viewport: SIZE, deviceScaleFactor: 1,
      recordVideo: { dir: path.join(OUTPUT, 'video'), size: SIZE },
    });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    let status = null;
    try {
      const response = await page.goto(URL_TO_CAPTURE, { waitUntil: 'domcontentloaded', timeout: 45000 });
      status = response?.status() ?? null;
      await page.waitForTimeout(5000);
      const file = path.join(OUTPUT, 'studio.png');
      await page.screenshot({ path: file });
      const canvas = await page.locator('canvas').count();
      const metadata = {
        schema: 'agentsam.browser.capture.v1', url: URL_TO_CAPTURE,
        httpStatus: status, title: await page.title(), canvasCount: canvas,
        screenshot: 'studio.png', screenshotSha256: SHA256(fs.readFileSync(file)),
        errors, browserVersion: browser.version(),
        claim: 'Screenshot/video capture; not proof of CAD geometry or collision accuracy',
      };
      fs.writeFileSync(path.join(OUTPUT, 'capture.json'), JSON.stringify(metadata, null, 2) + '\n');
      console.log(JSON.stringify(metadata));
      if (status < 200 || status >= 400 || errors.length) process.exitCode = 1;
    } finally { await context.close(); }
  } finally { await browser.close(); }
}
run().catch((error) => { console.error(error); process.exitCode = 1; });
