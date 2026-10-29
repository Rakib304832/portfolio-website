/**
 * Generates the placeholder resume PDF at public/resume.pdf.
 * Run with: node scripts/generate-resume.mjs
 *
 * Swap the content below (or replace public/resume.pdf entirely) once the real
 * resume is ready.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 50;
const CONTENT_W = PAGE_W - MARGIN * 2;
const BOTTOM = 46;

const ink = rgb(0.08, 0.1, 0.14);
const muted = rgb(0.36, 0.41, 0.48);
const subtle = rgb(0.55, 0.6, 0.66);
const accent = rgb(0.04, 0.46, 0.42);
const rule = rgb(0.85, 0.87, 0.9);
const darkBar = rgb(0.04, 0.07, 0.1);

const resume = {
  name: "Rakib Hasan",
  role: "Frontend Developer",
  email: "hello@rakibhasan.dev",
  phone: "+880 1712 345678",
  location: "Dhaka, Bangladesh",
  site: "rakibhasan.dev",
  github: "github.com/rakibhasan",
  profile:
    "Frontend developer with 4+ years of experience building fast, accessible product interfaces. Specialises in React, Next.js, and TypeScript, with a strong design sensibility and enough backend range to own features end to end.",
  experience: [
    {
      role: "Freelance Frontend Developer",
      company: "Self-employed",
      location: "Remote",
      period: "2023 — Present",
      bullets: [
        "Shipped 20+ production interfaces across marketing sites, dashboards, and design systems, averaging 95+ on Lighthouse performance.",
        "Built reusable component libraries that cut new-page delivery time by roughly 40% and kept design and code in sync.",
        "Introduced accessibility checks and visual regression testing into client workflows, catching regressions before release.",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "TechNova Solutions",
      location: "Dhaka, Bangladesh",
      period: "Jan — Jun 2023",
      bullets: [
        "Rebuilt the reporting table with virtualized rows, supporting 50k+ records without jank.",
        "Reduced the main bundle by 28% through route-level code splitting and dependency cleanup.",
        "Replaced ad-hoc fetch logic with typed API clients and wrote component tests for critical filters.",
      ],
    },
    {
      role: "Open Source Contributor",
      company: "Various projects",
      location: "Remote",
      period: "2022 — Present",
      bullets: [
        "Merged accessibility and keyboard-navigation fixes into React component libraries.",
        "Improved documentation examples for form and dialog primitives; review pull requests and triage issues.",
      ],
    },
  ],
  projects: [
    {
      name: "DevFlow",
      description:
        "Real-time sprint dashboard with optimistic boards, analytics, and a live activity feed.",
      stack: "Next.js · TypeScript · PostgreSQL · Prisma",
      url: "devflow-demo.netlify.app",
    },
    {
      name: "ShopSphere",
      description:
        "Headless fashion storefront focused on editorial storytelling, speed, and a frictionless checkout.",
      stack: "Next.js · Stripe · Sanity · Zustand",
      url: "shopsphere-demo.vercel.app",
    },
    {
      name: "CampusHub",
      description:
        "Student community platform with real-time feeds, event discovery, and a shared campus calendar.",
      stack: "React · Node.js · MongoDB · Socket.IO",
      url: "campushub-demo.vercel.app",
    },
  ],
  skills: [
    {
      label: "Frontend",
      value:
        "React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML/CSS, Framer Motion",
    },
    {
      label: "Backend",
      value:
        "Node.js, Express, PostgreSQL, MongoDB, Prisma, REST APIs, Auth.js",
    },
    {
      label: "Tools",
      value:
        "Git/GitHub, Figma, Docker, Vercel, Netlify, Linux, Jest, Vitest, Playwright",
    },
  ],
  education: [
    {
      degree: "BSc in Computer Science & Engineering",
      school: "University of Dhaka",
      location: "Dhaka, Bangladesh",
      period: "2022 — 2026",
      detail: "CGPA 3.82 / 4.00",
      note: "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Engineering, Human-Computer Interaction, Operating Systems.",
    },
    {
      degree: "Higher Secondary Certificate — Science",
      school: "Notre Dame College",
      location: "Dhaka, Bangladesh",
      period: "2019 — 2021",
      detail: "GPA 5.00 / 5.00",
      note: "Physics, Chemistry, Higher Mathematics, ICT.",
    },
  ],
  certifications: [
    "Meta Front-End Developer Professional Certificate — Coursera, 2024",
    "JavaScript Algorithms & Data Structures — freeCodeCamp, 2023",
    "Responsive Web Design — freeCodeCamp, 2022",
  ],
};

const doc = await PDFDocument.create();
const font = await doc.embedFont(StandardFonts.Helvetica);
const bold = await doc.embedFont(StandardFonts.HelveticaBold);
const italic = await doc.embedFont(StandardFonts.HelveticaOblique);

doc.setTitle("Rakib Hasan — Frontend Developer Resume");
doc.setAuthor(resume.name);
doc.setSubject("Frontend developer resume");
doc.setKeywords([
  "frontend developer",
  "React",
  "Next.js",
  "TypeScript",
  "resume",
]);

let page;
let y = 0;

function wrap(text, size, maxWidth, typeface = font) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = "";

  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (typeface.widthOfTextAtSize(test, size) <= maxWidth) {
      current = test;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }

  if (current) lines.push(current);
  return lines;
}

function drawRight(text, { x = PAGE_W - MARGIN, size = 8.6, typeface = font, color = muted } = {}) {
  page.drawText(text, {
    x: x - typeface.widthOfTextAtSize(text, size),
    y,
    size,
    font: typeface,
    color,
  });
}

function drawContinuationHeader() {
  page.drawText(resume.name.toUpperCase(), {
    x: MARGIN,
    y: PAGE_H - 44,
    size: 7.8,
    font: bold,
    color: subtle,
  });
  const label = "RESUME";
  page.drawText(label, {
    x: PAGE_W - MARGIN - font.widthOfTextAtSize(label, 7.8),
    y: PAGE_H - 44,
    size: 7.8,
    font,
    color: subtle,
  });
  page.drawLine({
    start: { x: MARGIN, y: PAGE_H - 54 },
    end: { x: PAGE_W - MARGIN, y: PAGE_H - 54 },
    thickness: 0.6,
    color: rule,
  });
  y = PAGE_H - 76;
}

function addPage() {
  page = doc.addPage([PAGE_W, PAGE_H]);
  drawContinuationHeader();
}

function ensure(space) {
  if (y - space < BOTTOM) addPage();
}

function section(title) {
  ensure(42);
  y -= 7;
  page.drawText(title.toUpperCase(), {
    x: MARGIN,
    y,
    size: 8,
    font: bold,
    color: accent,
  });
  y -= 5.5;
  page.drawLine({
    start: { x: MARGIN, y },
    end: { x: PAGE_W - MARGIN, y },
    thickness: 0.7,
    color: rule,
  });
  y -= 12.5;
}

function paragraph(text, { size = 8.9, leading = 12.4, color = muted } = {}) {
  for (const currentLine of wrap(text, size, CONTENT_W)) {
    ensure(leading);
    page.drawText(currentLine, { x: MARGIN, y, size, font, color });
    y -= leading;
  }
}

function roleEntry(item) {
  ensure(64);
  page.drawText(item.role, {
    x: MARGIN,
    y,
    size: 10.6,
    font: bold,
    color: ink,
  });
  drawRight(item.period, { size: 8.4, typeface: bold, color: accent });
  y -= 12.5;

  page.drawText(`${item.company}  ·  ${item.location}`, {
    x: MARGIN,
    y,
    size: 8.6,
    font: italic,
    color: subtle,
  });
  y -= 13;

  for (const bullet of item.bullets) {
    const lines = wrap(bullet, 8.8, CONTENT_W - 12);
    ensure(lines.length * 11.9 + 2);
    page.drawText("•", {
      x: MARGIN,
      y,
      size: 8.8,
      font,
      color: accent,
    });

    for (const currentLine of lines) {
      page.drawText(currentLine, {
        x: MARGIN + 12,
        y,
        size: 8.8,
        font,
        color: muted,
      });
      y -= 11.9;
    }
  }

  y -= 5;
}

function projectEntry(item) {
  ensure(48);
  page.drawText(item.name, {
    x: MARGIN,
    y,
    size: 9.8,
    font: bold,
    color: ink,
  });
  drawRight(item.url, { size: 8, typeface: font, color: accent });
  y -= 12;

  for (const currentLine of wrap(item.description, 8.7, CONTENT_W)) {
    page.drawText(currentLine, {
      x: MARGIN,
      y,
      size: 8.7,
      font,
      color: muted,
    });
    y -= 11.4;
  }

  page.drawText(item.stack, {
    x: MARGIN,
    y,
    size: 7.9,
    font,
    color: subtle,
  });
  y -= 13;
}

function skillEntry(item) {
  ensure(18);
  page.drawText(item.label, {
    x: MARGIN,
    y,
    size: 8.6,
    font: bold,
    color: ink,
  });
  const lines = wrap(item.value, 8.6, CONTENT_W - 64);
  lines.forEach((currentLine, index) => {
    page.drawText(currentLine, {
      x: MARGIN + 64,
      y: y - index * 11.6,
      size: 8.6,
      font,
      color: muted,
    });
  });
  y -= Math.max(1, lines.length) * 11.6 + 2;
}

function educationEntry(item) {
  ensure(54);
  page.drawText(item.degree, {
    x: MARGIN,
    y,
    size: 9.6,
    font: bold,
    color: ink,
  });
  drawRight(item.period, { size: 8.4, typeface: bold, color: accent });
  y -= 11.8;

  page.drawText(`${item.school}  ·  ${item.location}  ·  ${item.detail}`, {
    x: MARGIN,
    y,
    size: 8.5,
    font: italic,
    color: subtle,
  });
  y -= 12.2;

  for (const currentLine of wrap(item.note, 8.5, CONTENT_W)) {
    page.drawText(currentLine, {
      x: MARGIN,
      y,
      size: 8.5,
      font,
      color: muted,
    });
    y -= 11.2;
  }

  y -= 3;
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

page = doc.addPage([PAGE_W, PAGE_H]);

page.drawRectangle({
  x: 0,
  y: PAGE_H - 7,
  width: PAGE_W,
  height: 7,
  color: darkBar,
});
page.drawRectangle({
  x: 0,
  y: PAGE_H - 7,
  width: 210,
  height: 7,
  color: accent,
});

y = PAGE_H - 62;
page.drawText(resume.name.toUpperCase(), {
  x: MARGIN,
  y,
  size: 26,
  font: bold,
  color: ink,
});

y -= 17;
page.drawText(resume.role.toUpperCase(), {
  x: MARGIN,
  y,
  size: 8.8,
  font: bold,
  color: accent,
});

const contact = [
  resume.email,
  resume.phone,
  resume.location,
  resume.site,
];
let contactY = PAGE_H - 62;
for (const item of contact) {
  const width = font.widthOfTextAtSize(item, 8.2);
  page.drawText(item, {
    x: PAGE_W - MARGIN - width,
    y: contactY,
    size: 8.2,
    font,
    color: muted,
  });
  contactY -= 11;
}

y = Math.min(y, contactY) - 12;
page.drawLine({
  start: { x: MARGIN, y },
  end: { x: PAGE_W - MARGIN, y },
  thickness: 0.9,
  color: rule,
});
y -= 17;

/* ------------------------------------------------------------------ */
/* Body                                                                */
/* ------------------------------------------------------------------ */

section("Profile");
paragraph(resume.profile);
y -= 2;

section("Experience");
for (const item of resume.experience) {
  roleEntry(item);
}
y -= 1;

section("Selected Projects");
for (const item of resume.projects) {
  projectEntry(item);
}
y -= 1;

section("Skills");
for (const item of resume.skills) {
  skillEntry(item);
}
y -= 2;

section("Education");
for (const item of resume.education) {
  educationEntry(item);
}
y -= 1;

section("Certifications");
for (const item of resume.certifications) {
  ensure(13);
  page.drawText(item, {
    x: MARGIN,
    y,
    size: 8.6,
    font,
    color: muted,
  });
  y -= 12.4;
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

const pages = doc.getPages();
pages.forEach((currentPage, index) => {
  const label = `${resume.name}  ·  ${resume.email}  ·  ${resume.site}  ·  Page ${index + 1} of ${pages.length}`;
  const width = font.widthOfTextAtSize(label, 7.2);

  currentPage.drawLine({
    start: { x: MARGIN, y: 38 },
    end: { x: PAGE_W - MARGIN, y: 38 },
    thickness: 0.5,
    color: rule,
  });
  currentPage.drawText(label, {
    x: (PAGE_W - width) / 2,
    y: 27,
    size: 7.2,
    font,
    color: subtle,
  });
});

const bytes = await doc.save();
const outputDir = path.join(process.cwd(), "public");
await mkdir(outputDir, { recursive: true });
await writeFile(path.join(outputDir, "resume.pdf"), bytes);
console.log(`wrote public/resume.pdf (${pages.length} page${pages.length === 1 ? "" : "s"})`);
