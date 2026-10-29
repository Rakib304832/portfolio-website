/**
 * Generates the static OG share image and the favicon.
 * Run with: npm run assets
 *
 * The portrait and project covers are real files in public/ and are not
 * generated here — replace them directly when updating the site.
 */
import { writeFile } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const root = process.cwd();

const FONT = "Segoe UI, Arial, Helvetica, sans-serif";
const MONO = "Consolas, 'Courier New', monospace";

const grid = (size = 40, opacity = 0.05) => `
  <pattern id="grid" width="${size}" height="${size}" patternUnits="userSpaceOnUse">
    <path d="M ${size} 0 H 0 V ${size}" fill="none" stroke="#ffffff" stroke-opacity="${opacity}" />
  </pattern>
`;

const glow = (id, x, y, r, color, opacity) => `
  <radialGradient id="${id}" cx="${x}" cy="${y}" r="${r}">
    <stop offset="0" stop-color="${color}" stop-opacity="${opacity}" />
    <stop offset="1" stop-color="${color}" stop-opacity="0" />
  </radialGradient>
`;

function ogSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      ${grid(36, 0.05)}
      ${glow("og1", "12%", "6%", "70%", "#5eead4", 0.3)}
      ${glow("og2", "92%", "90%", "70%", "#818cf8", 0.32)}
      <linearGradient id="ogbg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#060c15" /><stop offset="1" stop-color="#05070d" />
      </linearGradient>
      <linearGradient id="ogtext" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#5eead4" /><stop offset="0.6" stop-color="#a5b4fc" /><stop offset="1" stop-color="#e9d5ff" />
      </linearGradient>
    </defs>

    <rect width="1200" height="630" fill="url(#ogbg)" />
    <rect width="1200" height="630" fill="url(#grid)" />
    <rect width="1200" height="630" fill="url(#og1)" />
    <rect width="1200" height="630" fill="url(#og2)" />

    <circle cx="1070" cy="120" r="150" fill="none" stroke="#5eead4" stroke-opacity="0.16" />
    <circle cx="1070" cy="120" r="200" fill="none" stroke="#818cf8" stroke-opacity="0.12" stroke-dasharray="2 16" />
    <circle cx="1070" cy="120" r="250" fill="none" stroke="#ffffff" stroke-opacity="0.05" />
    <text x="1070" y="135" text-anchor="middle" font-family="${MONO}" font-size="15" letter-spacing="4" fill="#5eead4" opacity="0.6">&lt;/&gt;</text>

    <rect x="72" y="64" width="46" height="46" rx="12" fill="#5eead4" fill-opacity="0.12" stroke="#5eead4" stroke-opacity="0.35" />
    <text x="95" y="95" text-anchor="middle" font-family="${FONT}" font-size="22" font-weight="700" fill="#5eead4">R</text>
    <text x="134" y="96" font-family="${MONO}" font-size="16" letter-spacing="4" fill="#94a3b8">RAKIB.DEV</text>

    <text x="72" y="238" font-family="${MONO}" font-size="16" letter-spacing="6" fill="#5eead4">FULL STACK DEVELOPER</text>
    <text x="72" y="352" font-family="${FONT}" font-size="104" font-weight="700" fill="#e9eef8">Rakib</text>
    <text x="330" y="352" font-family="${FONT}" font-size="104" font-weight="700" fill="#5eead4">.</text>
    <text x="72" y="420" font-family="${FONT}" font-size="34" font-weight="600" fill="url(#ogtext)">I build complete web products.</text>
    <text x="72" y="468" font-family="${FONT}" font-size="19" fill="#94a3b8">React · Next.js · Node.js · MongoDB · TypeScript</text>

    <path d="M 72 520 H 1128" stroke="#ffffff" stroke-opacity="0.1" />
    <text x="72" y="566" font-family="${MONO}" font-size="14" fill="#64748b">DINAJPUR, BANGLADESH</text>
    <text x="1128" y="566" text-anchor="end" font-family="${MONO}" font-size="14" fill="#64748b">PORTFOLIO / 2026</text>
  </svg>`;
}

async function main() {
  const target = path.join(root, "public", "og.png");
  await sharp(Buffer.from(ogSvg())).resize(1200, 630).png({ quality: 92 }).toFile(target);
  console.log("wrote", path.relative(root, target));

  const favicon = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <defs>
      <linearGradient id="f" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#5eead4" /><stop offset="1" stop-color="#818cf8" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="16" fill="#05070d" />
    <rect x="2" y="2" width="60" height="60" rx="14" fill="none" stroke="url(#f)" stroke-opacity="0.55" />
    <text x="32" y="44" text-anchor="middle" font-family="${FONT}" font-size="34" font-weight="700" fill="url(#f)">R</text>
  </svg>`;
  await writeFile(path.join(root, "src", "app", "icon.svg"), favicon, "utf8");
  console.log("wrote src/app/icon.svg");
}

await main();
