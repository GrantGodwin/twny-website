#!/usr/bin/env node
/**
 * Renders the two brand raster assets from the site's own sources:
 *
 *   public/og-image.jpg   1200x630  social-sharing card
 *   public/logo.png        512x512  organisation logo for structured data
 *
 * Both are composed from approved assets only — the lighthouse hero photo,
 * the wordmark set in the site's self-hosted Space Grotesk, and the locked
 * line "Technology, simplified." — over the Ink surface. No generated imagery,
 * no extra copy. The composition is plain HTML rendered in headless Chromium
 * at a fixed device scale, so the output is deterministic for a given source
 * image, font files and this file.
 *
 * Run (one-off, when a source asset or this composition changes):
 *
 *   npm i --no-save playwright          # not a project dependency
 *   node scripts/og-image.mjs
 *
 * Playwright is pulled in ad hoc rather than added to package.json: this is a
 * design-time tool, not part of the build, and a browser automation package
 * has no business in the production dependency tree.
 */
import { chromium } from "playwright";
import sharp from "sharp";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const executablePath = [
  process.env.CHROMIUM_PATH,
  "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
].find((p) => p && existsSync(p));

const font = (file) =>
  `url(data:font/woff2;base64,${readFileSync(
    resolve(ROOT, "node_modules/@fontsource/space-grotesk/files", file),
  ).toString("base64")})`;
const hero = `data:image/webp;base64,${readFileSync(
  resolve(ROOT, "src/assets/hero-lighthouse.webp"),
).toString("base64")}`;

// Shared brand tokens, copied from src/styles/global.css. Kept literal here so
// this file has no build-time dependency on Tailwind.
const INK = "#e8ecef";
const SAND = "#0a0d11";
const MINERAL = "#3aa6c9";

const head = `
  <style>
    @font-face { font-family: "Space Grotesk"; font-weight: 600; src: ${font("space-grotesk-latin-600-normal.woff2")}; }
    @font-face { font-family: "Space Grotesk"; font-weight: 500; src: ${font("space-grotesk-latin-500-normal.woff2")}; }
    * { margin: 0; box-sizing: border-box; }
    html, body { background: ${SAND}; }
    body { font-family: "Space Grotesk", sans-serif; color: ${INK}; -webkit-font-smoothing: antialiased; }
  </style>`;

// 1200x630. The photo fills the frame with the lighthouse held to the right,
// the same left-heavy scrim the hero uses lifts the type, and everything sits
// inside a 90px safe margin so square and landscape crops both keep the name.
const og = `<!doctype html><html><head>${head}<style>
  .card { position: relative; width: 1200px; height: 630px; overflow: hidden; }
  .photo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 100% 30%; }
  .scrim { position: absolute; inset: 0;
    background: linear-gradient(90deg, ${SAND} 0%, rgba(10,13,17,0.92) 30%, rgba(10,13,17,0.45) 62%, rgba(10,13,17,0.05) 100%); }
  .veil { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10,13,17,0.35) 0%, transparent 30%, transparent 70%, rgba(10,13,17,0.35) 100%); }
  .type { position: absolute; left: 90px; top: 0; bottom: 0; display: flex; flex-direction: column; justify-content: center; }
  .wordmark { font-weight: 600; font-style: italic; font-size: 148px; line-height: 1; letter-spacing: -0.01em; color: ${INK}; }
  .tagline { margin-top: 34px; font-weight: 500; font-size: 54px; line-height: 1.1; color: ${INK}; }
  .tagline b { font-weight: 500; color: ${MINERAL}; }
  .rule { position: absolute; left: 90px; right: 90px; bottom: 90px; height: 1px;
    background: linear-gradient(90deg, rgba(232,236,239,0.32), rgba(232,236,239,0.06) 60%, transparent); }
</style></head><body>
  <div class="card">
    <img class="photo" src="${hero}" alt="">
    <div class="scrim"></div><div class="veil"></div>
    <div class="type">
      <div class="wordmark">twny</div>
      <div class="tagline">Technology, <b>simplified.</b></div>
    </div>
    <div class="rule"></div>
  </div>
</body></html>`;

// 512x512 logo: the wordmark alone on the Sand ground — the same mark as the
// favicon set, at the size schema.org consumers expect.
const logo = `<!doctype html><html><head>${head}<style>
  .tile { width: 512px; height: 512px; display: grid; place-items: center; background: ${SAND}; }
  .wordmark { font-weight: 600; font-style: italic; font-size: 176px; line-height: 1; color: ${INK}; transform: translateX(-6px); }
</style></head><body><div class="tile"><div class="wordmark">twny</div></div></body></html>`;

const browser = await chromium.launch({ executablePath });
const page = await browser.newPage({ deviceScaleFactor: 1 });

await page.setViewportSize({ width: 1200, height: 630 });
await page.setContent(og, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
const ogPng = await page.screenshot({ type: "png", clip: { x: 0, y: 0, width: 1200, height: 630 } });
await sharp(ogPng).jpeg({ quality: 86, mozjpeg: true, chromaSubsampling: "4:4:4" }).toFile(resolve(ROOT, "public/og-image.jpg"));

await page.setViewportSize({ width: 512, height: 512 });
await page.setContent(logo, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
const logoPng = await page.screenshot({ type: "png", clip: { x: 0, y: 0, width: 512, height: 512 } });
await sharp(logoPng).png({ compressionLevel: 9 }).toFile(resolve(ROOT, "public/logo.png"));

await browser.close();
for (const f of ["public/og-image.jpg", "public/logo.png"]) {
  const m = await sharp(resolve(ROOT, f)).metadata();
  console.log(`${f}: ${m.width}x${m.height} ${m.format}`);
}
