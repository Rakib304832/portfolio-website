import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const imagesDir = path.join(root, "public", "images");
const projectsDir = path.join(root, "public", "projects");

const FONT = "Segoe UI, Arial, Helvetica, sans-serif";
const MONO = "Consolas, 'Courier New', monospace";

const grid = (size = 44, opacity = 0.05) => `
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

/* ------------------------------------------------------------------ */
/* Profile portrait placeholder                                        */
/* ------------------------------------------------------------------ */

function profileSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1100" viewBox="0 0 900 1100">
    <defs>
      ${grid(44, 0.045)}
      ${glow("pg1", "18%", "12%", "70%", "#5eead4", 0.32)}
      ${glow("pg2", "85%", "78%", "65%", "#818cf8", 0.34)}
      ${glow("pg3", "50%", "50%", "55%", "#c084fc", 0.12)}
      <linearGradient id="pbg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0a1220" />
        <stop offset="1" stop-color="#05070d" />
      </linearGradient>
      <linearGradient id="ptext" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#5eead4" />
        <stop offset="0.55" stop-color="#a5b4fc" />
        <stop offset="1" stop-color="#e9d5ff" />
      </linearGradient>
      <linearGradient id="pring" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#5eead4" stop-opacity="0.9" />
        <stop offset="0.5" stop-color="#818cf8" stop-opacity="0.35" />
        <stop offset="1" stop-color="#c084fc" stop-opacity="0.8" />
      </linearGradient>
      <filter id="pblur"><feGaussianBlur stdDeviation="38" /></filter>
    </defs>

    <rect width="900" height="1100" fill="url(#pbg)" />
    <rect width="900" height="1100" fill="url(#grid)" />
    <rect width="900" height="1100" fill="url(#pg1)" />
    <rect width="900" height="1100" fill="url(#pg2)" />
    <rect width="900" height="1100" fill="url(#pg3)" />

    <ellipse cx="450" cy="500" rx="260" ry="300" fill="#5eead4" opacity="0.10" filter="url(#pblur)" />

    <circle cx="450" cy="500" r="292" fill="none" stroke="url(#pring)" stroke-width="1.6" />
    <circle cx="450" cy="500" r="332" fill="none" stroke="#ffffff" stroke-opacity="0.10" stroke-width="1" stroke-dasharray="2 14" />
    <circle cx="740" cy="262" r="7" fill="#5eead4" />
    <circle cx="168" cy="716" r="5" fill="#818cf8" />
    <circle cx="450" cy="168" r="4" fill="#c084fc" />

    <text x="70" y="96" font-family="${MONO}" font-size="19" letter-spacing="6" fill="#7c8aa5">PORTFOLIO / 2026</text>
    <text x="70" y="150" font-family="${FONT}" font-size="17" letter-spacing="3" fill="#5eead4">FRONTEND DEVELOPER</text>

    <text x="450" y="590" text-anchor="middle" font-family="${FONT}" font-size="300" font-weight="700" letter-spacing="-14" fill="url(#ptext)">RH</text>

    <text x="450" y="668" text-anchor="middle" font-family="${MONO}" font-size="22" letter-spacing="10" fill="#a9b6cc">DESIGN · CODE · SHIP</text>

    <path d="M 126 900 H 774" stroke="#ffffff" stroke-opacity="0.10" />
    <text x="126" y="962" font-family="${MONO}" font-size="17" letter-spacing="4" fill="#7c8aa5">DHAKA, BANGLADESH</text>
    <text x="774" y="962" text-anchor="end" font-family="${MONO}" font-size="17" letter-spacing="4" fill="#7c8aa5">24.7471° N</text>

    <path d="M 74 210 v -40 h 40" fill="none" stroke="#5eead4" stroke-opacity="0.45" stroke-width="2" />
    <path d="M 826 890 v 40 h -40" fill="none" stroke="#818cf8" stroke-opacity="0.45" stroke-width="2" />
    <text x="74" y="270" font-family="${MONO}" font-size="28" fill="#5eead4" opacity="0.5">&lt;/&gt;</text>
    <text x="826" y="836" text-anchor="end" font-family="${MONO}" font-size="28" fill="#818cf8" opacity="0.5">{ }</text>
  </svg>`;
}

/* ------------------------------------------------------------------ */
/* Project covers                                                      */
/* ------------------------------------------------------------------ */

function browserChrome(width, height, accent) {
  return `
    <rect x="40" y="40" width="${width - 80}" height="${height - 80}" rx="26" fill="#0a0f1a" stroke="#ffffff" stroke-opacity="0.10" />
    <path d="M 40 106 H ${width - 40}" stroke="#ffffff" stroke-opacity="0.08" />
    <circle cx="78" cy="73" r="6" fill="#ff6b6b" opacity="0.8" />
    <circle cx="99" cy="73" r="6" fill="#fbbf24" opacity="0.8" />
    <circle cx="120" cy="73" r="6" fill="#34d399" opacity="0.8" />
    <rect x="152" y="59" width="330" height="28" rx="14" fill="#ffffff" fill-opacity="0.04" stroke="#ffffff" stroke-opacity="0.06" />
    <text x="170" y="78" font-family="${MONO}" font-size="13" fill="#64748b">app.${accent}.dev</text>
  `;
}

function statCard(x, y, w, label, value, delta, accent) {
  return `
    <rect x="${x}" y="${y}" width="${w}" height="132" rx="18" fill="#0e1524" stroke="#ffffff" stroke-opacity="0.07" />
    <text x="${x + 24}" y="${y + 38}" font-family="${FONT}" font-size="15" fill="#7c8aa5">${label}</text>
    <text x="${x + 24}" y="${y + 92}" font-family="${FONT}" font-size="40" font-weight="700" fill="#e9eef8">${value}</text>
    <rect x="${x + w - 86}" y="${y + 28}" width="62" height="26" rx="13" fill="${accent}" fill-opacity="0.14" />
    <text x="${x + w - 55}" y="${y + 46}" text-anchor="middle" font-family="${MONO}" font-size="12" fill="${accent}">${delta}</text>
    <rect x="${x + 24}" y="${y + 108}" width="${w - 48}" height="4" rx="2" fill="#ffffff" fill-opacity="0.05" />
    <rect x="${x + 24}" y="${y + 108}" width="${(w - 48) * 0.62}" height="4" rx="2" fill="${accent}" fill-opacity="0.55" />
  `;
}

function devflowSvg() {
  const accent = "#5eead4";
  let points = "";
  const chartX = 372;
  const chartY = 366;
  const chartW = 700;
  const chartH = 250;
  const values = [0.62, 0.44, 0.58, 0.36, 0.5, 0.28, 0.42, 0.2, 0.3, 0.16, 0.26, 0.1];
  const coords = values.map((v, i) => {
    const x = chartX + (chartW / (values.length - 1)) * i;
    const y = chartY + chartH * v;
    return `${x.toFixed(0)},${y.toFixed(0)}`;
  });
  points = coords.join(" ");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
    <defs>
      ${grid(40, 0.035)}
      ${glow("dg1", "20%", "10%", "60%", "#5eead4", 0.22)}
      ${glow("dg2", "86%", "80%", "55%", "#818cf8", 0.25)}
      <linearGradient id="dbg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#060c15" /><stop offset="1" stop-color="#05070d" />
      </linearGradient>
      <linearGradient id="darea" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#5eead4" stop-opacity="0.35" />
        <stop offset="1" stop-color="#5eead4" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="dline" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#5eead4" /><stop offset="1" stop-color="#818cf8" />
      </linearGradient>
    </defs>

    <rect width="1600" height="1000" fill="url(#dbg)" />
    <rect width="1600" height="1000" fill="url(#grid)" />
    <rect width="1600" height="1000" fill="url(#dg1)" />
    <rect width="1600" height="1000" fill="url(#dg2)" />

    ${browserChrome(1600, 1000, "devflow")}

    <rect x="40" y="106" width="230" height="854" fill="#080d17" />
    <path d="M 270 106 V 960" stroke="#ffffff" stroke-opacity="0.07" />
    <circle cx="86" cy="156" r="16" fill="#5eead4" fill-opacity="0.2" />
    <path d="M 79 156 l 6 6 l 12 -14" stroke="#5eead4" stroke-width="2.4" fill="none" />
    <text x="116" y="162" font-family="${FONT}" font-size="20" font-weight="600" fill="#e9eef8">DevFlow</text>

    ${["Overview", "Projects", "Sprints", "Analytics", "Team", "Settings"]
      .map((item, i) => {
        const y = 224 + i * 52;
        const active = i === 0;
        return `
        <rect x="60" y="${y - 22}" width="190" height="38" rx="10" fill="${active ? "#5eead4" : "#ffffff"}" fill-opacity="${active ? 0.1 : 0.02}" />
        <circle cx="82" cy="${y - 3}" r="4" fill="${active ? "#5eead4" : "#475569"}" />
        <text x="100" y="${y + 2}" font-family="${FONT}" font-size="15" fill="${active ? "#d7fbf4" : "#7c8aa5"}">${item}</text>`;
      })
      .join("")}

    <rect x="60" y="812" width="190" height="86" rx="16" fill="#5eead4" fill-opacity="0.08" stroke="#5eead4" stroke-opacity="0.2" />
    <text x="78" y="844" font-family="${FONT}" font-size="13" fill="#5eead4">TEAM PLAN</text>
    <text x="78" y="870" font-family="${FONT}" font-size="14" fill="#e9eef8">8 of 12 seats used</text>
    <rect x="78" y="882" width="154" height="4" rx="2" fill="#ffffff" fill-opacity="0.08" />
    <rect x="78" y="882" width="102" height="4" rx="2" fill="#5eead4" fill-opacity="0.7" />

    <text x="302" y="164" font-family="${FONT}" font-size="30" font-weight="700" fill="#e9eef8">Overview</text>
    <text x="302" y="192" font-family="${FONT}" font-size="15" fill="#7c8aa5">Tuesday, 14 October · Sprint 24</text>
    <rect x="1288" y="132" width="112" height="38" rx="19" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.08" />
    <text x="1344" y="156" text-anchor="middle" font-family="${FONT}" font-size="14" fill="#cbd5e1">Filter</text>
    <rect x="1412" y="132" width="132" height="38" rx="19" fill="#5eead4" />
    <text x="1478" y="156" text-anchor="middle" font-family="${FONT}" font-size="14" font-weight="600" fill="#052e2b">New task</text>

    ${statCard(302, 222, 250, "Velocity", "86 pts", "+12%", accent)}
    ${statCard(576, 222, 250, "Open issues", "14", "-8%", accent)}
    ${statCard(850, 222, 250, "Deploys", "32", "+21%", accent)}

    <rect x="302" y="386" width="700" height="330" rx="20" fill="#0e1524" stroke="#ffffff" stroke-opacity="0.07" />
    <text x="330" y="430" font-family="${FONT}" font-size="18" font-weight="600" fill="#e9eef8">Delivery trend</text>
    <text x="330" y="454" font-family="${FONT}" font-size="13" fill="#7c8aa5">Completed tasks per week</text>
    <path d="M ${chartX} ${chartY + chartH} L ${points} L ${chartX + chartW} ${chartY + chartH} Z" fill="url(#darea)" />
    <polyline points="${points}" fill="none" stroke="url(#dline)" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round" />
    ${coords
      .map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="4" fill="#5eead4" opacity="${i === 10 ? 1 : 0.4}" />`)
      .join("")}
    <text x="${chartX - 18}" y="${chartY + 6}" text-anchor="end" font-family="${MONO}" font-size="11" fill="#475569">40</text>
    <text x="${chartX - 18}" y="${chartY + chartH / 2}" text-anchor="end" font-family="${MONO}" font-size="11" fill="#475569">20</text>
    <text x="${chartX - 18}" y="${chartY + chartH}" text-anchor="end" font-family="${MONO}" font-size="11" fill="#475569">0</text>

    <rect x="1030" y="386" width="514" height="330" rx="20" fill="#0e1524" stroke="#ffffff" stroke-opacity="0.07" />
    <text x="1058" y="430" font-family="${FONT}" font-size="18" font-weight="600" fill="#e9eef8">Active sprints</text>
    ${[
      ["Design system", "In review", "86%", "#5eead4"],
      ["API v2 migration", "In progress", "62%", "#818cf8"],
      ["Mobile app", "Planning", "34%", "#c084fc"],
      ["Notifications", "Shipped", "100%", "#34d399"],
    ]
      .map(([name, status, progress, color], i) => {
        const y = 470 + i * 60;
        return `
        <text x="1058" y="${y}" font-family="${FONT}" font-size="15" fill="#dbe3ef">${name}</text>
        <text x="1516" y="${y}" text-anchor="end" font-family="${MONO}" font-size="11" fill="${color}">${status.toUpperCase()}</text>
        <rect x="1058" y="${y + 12}" width="458" height="4" rx="2" fill="#ffffff" fill-opacity="0.06" />
        <rect x="1058" y="${y + 12}" width="${458 * (parseInt(progress) / 100)}" height="4" rx="2" fill="${color}" fill-opacity="0.75" />`;
      })
      .join("")}

    <rect x="302" y="746" width="1242" height="184" rx="20" fill="#0e1524" stroke="#ffffff" stroke-opacity="0.07" />
    <text x="330" y="788" font-family="${FONT}" font-size="18" font-weight="600" fill="#e9eef8">Recent activity</text>
    ${[
      ["Ayesha merged pull request #482", "2 min ago", "#5eead4"],
      ["Rakib deployed web to production", "18 min ago", "#818cf8"],
      ["Tanvir opened issue “Auth refresh”", "1 hr ago", "#c084fc"],
    ]
      .map(([text, time, color], i) => {
        const y = 830 + i * 36;
        return `
        <circle cx="344" cy="${y - 5}" r="4" fill="${color}" />
        <text x="362" y="${y}" font-family="${FONT}" font-size="14" fill="#cbd5e1">${text}</text>
        <text x="1516" y="${y}" text-anchor="end" font-family="${MONO}" font-size="11" fill="#64748b">${time}</text>`;
      })
      .join("")}
  </svg>`;
}

function shopsphereSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
    <defs>
      ${grid(40, 0.035)}
      ${glow("sg1", "15%", "8%", "60%", "#c084fc", 0.26)}
      ${glow("sg2", "88%", "85%", "55%", "#f472b6", 0.22)}
      <linearGradient id="sbg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0b0710" /><stop offset="1" stop-color="#05070d" />
      </linearGradient>
      <linearGradient id="shero" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#2e1065" /><stop offset="0.55" stop-color="#4c1d95" /><stop offset="1" stop-color="#831843" />
      </linearGradient>
      <linearGradient id="sp1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#c084fc" stop-opacity="0.5" /><stop offset="1" stop-color="#f472b6" stop-opacity="0.15" />
      </linearGradient>
      <linearGradient id="sp2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#818cf8" stop-opacity="0.45" /><stop offset="1" stop-color="#22d3ee" stop-opacity="0.12" />
      </linearGradient>
      <linearGradient id="sp3" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#fbbf24" stop-opacity="0.4" /><stop offset="1" stop-color="#f472b6" stop-opacity="0.12" />
      </linearGradient>
      <clipPath id="sheroClip"><rect x="80" y="200" width="1040" height="360" rx="24" /></clipPath>
    </defs>

    <rect width="1600" height="1000" fill="url(#sbg)" />
    <rect width="1600" height="1000" fill="url(#grid)" />
    <rect width="1600" height="1000" fill="url(#sg1)" />
    <rect width="1600" height="1000" fill="url(#sg2)" />

    ${browserChrome(1600, 1000, "shopsphere")}

    <text x="80" y="160" font-family="${FONT}" font-size="26" font-weight="700" fill="#f5f3ff">ShopSphere</text>
    ${["New in", "Women", "Men", "Accessories", "Sale"]
      .map((item, i) => `<text x="${720 + i * 128}" y="158" font-family="${FONT}" font-size="15" fill="#a5a0b8">${item}</text>`)
      .join("")}
    <circle cx="1470" cy="152" r="18" fill="#ffffff" fill-opacity="0.06" />
    <circle cx="1470" cy="152" r="18" fill="none" stroke="#ffffff" stroke-opacity="0.12" />
    <circle cx="1490" cy="138" r="7" fill="#c084fc" />
    <rect x="1504" y="134" width="56" height="36" rx="18" fill="#c084fc" fill-opacity="0.16" />
    <text x="1532" y="157" text-anchor="middle" font-family="${MONO}" font-size="11" fill="#e9d5ff">2</text>

    <rect x="80" y="200" width="1040" height="360" rx="24" fill="url(#shero)" />
    <g clip-path="url(#sheroClip)">
      <circle cx="980" cy="300" r="180" fill="#f472b6" opacity="0.18" />
      <circle cx="1080" cy="440" r="140" fill="#c084fc" opacity="0.2" />
    </g>
    <text x="124" y="286" font-family="${MONO}" font-size="15" letter-spacing="6" fill="#e9d5ff">AUTUMN / WINTER 2026</text>
    <text x="124" y="360" font-family="${FONT}" font-size="56" font-weight="700" fill="#ffffff">Quiet luxury,</text>
    <text x="124" y="424" font-family="${FONT}" font-size="56" font-weight="700" fill="#f5d0fe">made for every day.</text>
    <text x="124" y="466" font-family="${FONT}" font-size="16" fill="#d8c9e8">Considered essentials in natural fabrics. Limited runs.</text>
    <rect x="124" y="492" width="176" height="44" rx="22" fill="#ffffff" />
    <text x="212" y="519" text-anchor="middle" font-family="${FONT}" font-size="15" font-weight="600" fill="#2e1065">Shop the drop</text>
    <rect x="316" y="492" width="164" height="44" rx="22" fill="none" stroke="#ffffff" stroke-opacity="0.35" />
    <text x="398" y="519" text-anchor="middle" font-family="${FONT}" font-size="15" fill="#f5f3ff">Lookbook</text>

    <rect x="1144" y="200" width="376" height="360" rx="24" fill="#0e0a15" stroke="#ffffff" stroke-opacity="0.08" />
    <text x="1172" y="242" font-family="${FONT}" font-size="17" font-weight="600" fill="#f5f3ff">Trending now</text>
    ${[
      ["The merino coat", "$248", "sp1"],
      ["Cloud knit sweater", "$128", "sp2"],
      ["Everyday tote", "$96", "sp3"],
    ]
      .map(([name, price, fill], i) => {
        const y = 266 + i * 92;
        return `
        <rect x="1172" y="${y}" width="72" height="72" rx="14" fill="url(#${fill})" stroke="#ffffff" stroke-opacity="0.08" />
        <text x="1260" y="${y + 30}" font-family="${FONT}" font-size="15" fill="#ede9fe">${name}</text>
        <text x="1260" y="${y + 54}" font-family="${MONO}" font-size="13" fill="#a78bfa">${price}</text>
        <path d="M 1490 ${y + 34} l 8 8 l -8 8 M 1498 ${y + 42} h -16" stroke="#7c6a97" stroke-width="1.6" fill="none" />`;
      })
      .join("")}

    <text x="80" y="642" font-family="${FONT}" font-size="24" font-weight="700" fill="#f5f3ff">New arrivals</text>
    <text x="1518" y="642" text-anchor="end" font-family="${MONO}" font-size="12" letter-spacing="2" fill="#a78bfa">VIEW ALL →</text>
    ${[
      ["sp1", "The soft shell", "$186", "4 colors"],
      ["sp2", "Structured denim", "$142", "3 colors"],
      ["sp3", "Sculpted heel", "$214", "2 colors"],
      ["sp1", "Silk scarf", "$78", "5 colors"],
    ]
      .map(([fill, name, price, colors], i) => {
        const x = 80 + i * 376;
        return `
        <rect x="${x}" y="676" width="352" height="248" rx="20" fill="#0e0a15" stroke="#ffffff" stroke-opacity="0.07" />
        <rect x="${x + 12}" y="688" width="328" height="164" rx="14" fill="url(#${fill})" />
        <circle cx="${x + 40}" cy="716" r="14" fill="#ffffff" fill-opacity="0.16" stroke="#ffffff" stroke-opacity="0.2" />
        <text x="${x + 24}" y="886" font-family="${FONT}" font-size="16" fill="#ede9fe">${name}</text>
        <text x="${x + 24}" y="908" font-family="${MONO}" font-size="12" fill="#7c6a97">${colors}</text>
        <text x="${x + 328}" y="894" text-anchor="end" font-family="${FONT}" font-size="17" font-weight="600" fill="#f5d0fe">${price}</text>`;
      })
      .join("")}
  </svg>`;
}

function campushubSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
    <defs>
      ${grid(40, 0.035)}
      ${glow("cg1", "16%", "10%", "60%", "#38bdf8", 0.24)}
      ${glow("cg2", "86%", "82%", "55%", "#34d399", 0.2)}
      <linearGradient id="cbg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#061016" /><stop offset="1" stop-color="#05070d" />
      </linearGradient>
      <linearGradient id="cbanner" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0e7490" /><stop offset="1" stop-color="#065f46" />
      </linearGradient>
      <linearGradient id="cav1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#38bdf8" /><stop offset="1" stop-color="#6366f1" />
      </linearGradient>
      <linearGradient id="cav2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#34d399" /><stop offset="1" stop-color="#0ea5e9" />
      </linearGradient>
      <linearGradient id="cav3" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#fbbf24" /><stop offset="1" stop-color="#f472b6" />
      </linearGradient>
    </defs>

    <rect width="1600" height="1000" fill="url(#cbg)" />
    <rect width="1600" height="1000" fill="url(#grid)" />
    <rect width="1600" height="1000" fill="url(#cg1)" />
    <rect width="1600" height="1000" fill="url(#cg2)" />

    ${browserChrome(1600, 1000, "campushub")}

    <text x="76" y="158" font-family="${FONT}" font-size="26" font-weight="700" fill="#e0f2fe">CampusHub</text>
    <rect x="1290" y="132" width="220" height="38" rx="19" fill="#ffffff" fill-opacity="0.04" stroke="#ffffff" stroke-opacity="0.08" />
    <text x="1400" y="156" text-anchor="middle" font-family="${FONT}" font-size="14" fill="#7c8aa5">Search campus…</text>
    <circle cx="1500" cy="151" r="17" fill="url(#cav2)" />
    <text x="1500" y="157" text-anchor="middle" font-family="${FONT}" font-size="13" font-weight="600" fill="#052e2b">RH</text>

    <rect x="76" y="200" width="300" height="420" rx="20" fill="#0b141d" stroke="#ffffff" stroke-opacity="0.07" />
    <circle cx="226" cy="296" r="54" fill="url(#cav1)" />
    <text x="226" y="310" text-anchor="middle" font-family="${FONT}" font-size="34" font-weight="700" fill="#04121b">RH</text>
    <text x="226" y="386" text-anchor="middle" font-family="${FONT}" font-size="20" font-weight="600" fill="#e0f2fe">Rakib Hasan</text>
    <text x="226" y="414" text-anchor="middle" font-family="${MONO}" font-size="12" fill="#64748b">CSE · CLASS OF 2026</text>
    <path d="M 100 448 H 352" stroke="#ffffff" stroke-opacity="0.07" />
    ${[
      ["Posts", "48"],
      ["Events", "12"],
      ["Projects", "9"],
    ]
      .map(([label, value], i) => {
        const x = 118 + i * 82;
        return `
        <text x="${x}" y="488" font-family="${FONT}" font-size="19" font-weight="700" fill="#e0f2fe">${value}</text>
        <text x="${x}" y="510" font-family="${FONT}" font-size="12" fill="#64748b">${label}</text>`;
      })
      .join("")}
    <rect x="100" y="540" width="252" height="40" rx="20" fill="#38bdf8" />
    <text x="226" y="565" text-anchor="middle" font-family="${FONT}" font-size="14" font-weight="600" fill="#04121b">Create post</text>
    <text x="100" y="606" font-family="${FONT}" font-size="13" fill="#475569">• Web dev club</text>

    <rect x="408" y="200" width="700" height="196" rx="20" fill="url(#cbanner)" />
    <rect x="432" y="224" width="160" height="24" rx="12" fill="#ffffff" fill-opacity="0.18" />
    <text x="512" y="241" text-anchor="middle" font-family="${MONO}" font-size="10" letter-spacing="2" fill="#d1fae5">FEATURED EVENT</text>
    <text x="432" y="292" font-family="${FONT}" font-size="30" font-weight="700" fill="#ffffff">Hack the Valley 2026</text>
    <text x="432" y="322" font-family="${FONT}" font-size="15" fill="#d1fae5">48 hours · 300 builders · $20k in prizes</text>
    <rect x="432" y="344" width="148" height="34" rx="17" fill="#ffffff" />
    <text x="506" y="366" text-anchor="middle" font-family="${FONT}" font-size="13" font-weight="600" fill="#065f46">Register now</text>
    <circle cx="1010" cy="298" r="92" fill="#ffffff" fill-opacity="0.08" />
    <circle cx="1010" cy="298" r="56" fill="#ffffff" fill-opacity="0.12" />
    <text x="1010" y="312" text-anchor="middle" font-family="${FONT}" font-size="28" font-weight="700" fill="#ffffff">48h</text>

    ${[
      ["Nadia posted in Design Club", "We just shipped our first Figma community file — 120 downloads in 24 hours. Huge thank you to everyone who reviewed the components!", "2h", "cav2", "ND"],
      ["Arif shared a project", "Built a campus map with real-time room availability using Next.js and Supabase. Open sourcing it this weekend.", "5h", "cav1", "AR"],
    ]
      .map(([title, body, time, avatar, initials], i) => {
        const y = 428 + i * 258;
        return `
        <rect x="408" y="${y}" width="700" height="236" rx="20" fill="#0b141d" stroke="#ffffff" stroke-opacity="0.07" />
        <circle cx="450" cy="${y + 44}" r="20" fill="url(#${avatar})" />
        <text x="450" y="${y + 49}" text-anchor="middle" font-family="${FONT}" font-size="11" font-weight="700" fill="#04121b">${initials}</text>
        <text x="482" y="${y + 40}" font-family="${FONT}" font-size="15" font-weight="600" fill="#e0f2fe">${title}</text>
        <text x="482" y="${y + 60}" font-family="${MONO}" font-size="11" fill="#475569">${time} ago</text>
        <text x="444" y="${y + 104}" font-family="${FONT}" font-size="14" fill="#94a3b8">${body.slice(0, 62)}</text>
        <text x="444" y="${y + 126}" font-family="${FONT}" font-size="14" fill="#94a3b8">${body.slice(62)}</text>
        <path d="M 444 ${y + 158} H 1072" stroke="#ffffff" stroke-opacity="0.06" />
        <text x="444" y="${y + 192}" font-family="${FONT}" font-size="13" fill="#4d5a73">♡  ${i === 0 ? 128 : 76}      ◌  ${i === 0 ? 24 : 11}      ↗  Share</text>`;
      })
      .join("")}

    <rect x="1136" y="200" width="384" height="300" rx="20" fill="#0b141d" stroke="#ffffff" stroke-opacity="0.07" />
    <text x="1164" y="242" font-family="${FONT}" font-size="18" font-weight="600" fill="#e0f2fe">Upcoming</text>
    ${[
      ["Oct 18", "Figma workshop", "6:30 PM", "cav2"],
      ["Oct 22", "Career fair", "10:00 AM", "cav1"],
      ["Oct 27", "Open source night", "8:00 PM", "cav3"],
    ]
      .map(([date, title, time, avatar], i) => {
        const y = 270 + i * 72;
        return `
        <rect x="1164" y="${y}" width="54" height="54" rx="14" fill="url(#${avatar})" fill-opacity="0.3" />
        <text x="1191" y="${y + 24}" text-anchor="middle" font-family="${MONO}" font-size="10" fill="#e0f2fe">${date.split(" ")[0]}</text>
        <text x="1191" y="${y + 40}" text-anchor="middle" font-family="${FONT}" font-size="15" font-weight="700" fill="#e0f2fe">${date.split(" ")[1]}</text>
        <text x="1234" y="${y + 24}" font-family="${FONT}" font-size="14" fill="#cbd5e1">${title}</text>
        <text x="1234" y="${y + 44}" font-family="${MONO}" font-size="11" fill="#64748b">${time}</text>`;
      })
      .join("")}

    <rect x="1136" y="524" width="384" height="330" rx="20" fill="#0b141d" stroke="#ffffff" stroke-opacity="0.07" />
    <text x="1164" y="566" font-family="${FONT}" font-size="18" font-weight="600" fill="#e0f2fe">Clubs to join</text>
    ${[
      ["Web Dev Club", "1.2k members", "cav1"],
      ["Robotics Society", "860 members", "cav2"],
      ["Design Collective", "640 members", "cav3"],
      ["Debate Union", "410 members", "cav1"],
    ]
      .map(([name, members, avatar], i) => {
        const y = 598 + i * 60;
        return `
        <circle cx="1186" cy="${y}" r="16" fill="url(#${avatar})" fill-opacity="0.35" />
        <text x="1214" y="${y - 2}" font-family="${FONT}" font-size="14" fill="#cbd5e1">${name}</text>
        <text x="1214" y="${y + 16}" font-family="${MONO}" font-size="10" fill="#64748b">${members}</text>
        <rect x="1436" y="${y - 14}" width="62" height="28" rx="14" fill="#38bdf8" fill-opacity="0.14" />
        <text x="1467" y="${y + 5}" text-anchor="middle" font-family="${FONT}" font-size="11" fill="#7dd3fc">Join</text>`;
      })
      .join("")}
  </svg>`;
}

/* ------------------------------------------------------------------ */
/* OG image                                                            */
/* ------------------------------------------------------------------ */

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

    <rect x="72" y="64" width="46" height="46" rx="12" fill="#5eead4" fill-opacity="0.12" stroke="#5eead4" stroke-opacity="0.35" />
    <text x="95" y="95" text-anchor="middle" font-family="${FONT}" font-size="22" font-weight="700" fill="#5eead4">R</text>
    <text x="134" y="96" font-family="${MONO}" font-size="16" letter-spacing="4" fill="#94a3b8">RAKIB.DEV</text>

    <text x="72" y="242" font-family="${MONO}" font-size="16" letter-spacing="6" fill="#5eead4">FRONTEND DEVELOPER</text>
    <text x="72" y="340" font-family="${FONT}" font-size="86" font-weight="700" fill="#e9eef8">Rakib Hasan</text>
    <text x="72" y="410" font-family="${FONT}" font-size="34" font-weight="600" fill="url(#ogtext)">I build interfaces that feel alive.</text>
    <text x="72" y="466" font-family="${FONT}" font-size="19" fill="#94a3b8">React · Next.js · TypeScript · Tailwind CSS</text>

    <path d="M 72 520 H 1128" stroke="#ffffff" stroke-opacity="0.1" />
    <text x="72" y="566" font-family="${MONO}" font-size="14" fill="#64748b">DHAKA, BANGLADESH</text>
    <text x="1128" y="566" text-anchor="end" font-family="${MONO}" font-size="14" fill="#64748b">PORTFOLIO / 2026</text>
  </svg>`;
}

/* ------------------------------------------------------------------ */

async function main() {
  await mkdir(imagesDir, { recursive: true });
  await mkdir(projectsDir, { recursive: true });

  const jobs = [
    ["profile.png", profileSvg(), 900, 1100],
    ["../projects/devflow.png", devflowSvg(), 1600, 1000],
    ["../projects/shopsphere.png", shopsphereSvg(), 1600, 1000],
    ["../projects/campushub.png", campushubSvg(), 1600, 1000],
    ["../og.png", ogSvg(), 1200, 630],
  ];

  for (const [file, svg, width, height] of jobs) {
    const target = path.resolve(imagesDir, file);
    await sharp(Buffer.from(svg)).resize(width, height).png({ quality: 92 }).toFile(target);
    console.log("wrote", path.relative(root, target));
  }

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
