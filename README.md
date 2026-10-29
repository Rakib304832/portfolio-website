# Rakib — Full Stack Developer Portfolio

A dark, aurora-toned portfolio for **Rakib**, a full-stack developer based in Dinajpur, Bangladesh. Built with Next.js 16, React 19, Tailwind CSS v4, and a small amount of client-side interaction.

## What is inside

- Responsive hero with a real portrait, resume download, and social links
- About section with the learning journey, quick facts, and working values
- Categorized, graphical skills covering frontend, backend, and workflow
- Education at Rangpur Polytechnic Institute and project-based experience
- Four live case studies with stack details, challenges, and future improvements:
  - [BazarDor](https://bazordo.netlify.app/) — Bengali market prices, Better Auth, MongoDB
  - [FitLog](https://6ab79c28d00735f541c5c0ed--remarkable-tiramisu-1f6f4a.netlify.app/workout) — workout library and daily planner
  - [DevStack](https://teal-dragon-0cccab.netlify.app/) — visual development stack builder
  - [User Manager](https://scintillating-parfait-c51647.netlify.app/) — full-stack CRUD dashboard with an Express API
- Direct contact links for email, phone, and WhatsApp, each with copy-to-clipboard
- Custom 404, sitemap, robots.txt, Open Graph image, and Person JSON-LD

## Pages

- `/` — hero, about, skills, education, experience, selected work, contact
- `/projects/[slug]` — the four case studies above
- `/sitemap.xml`, `/robots.txt`, custom 404

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
npm run resume   # regenerate public/resume.pdf
npm run assets   # regenerate the OG image and favicon
```

## Content map

| What | Where |
| --- | --- |
| Name, role, bio, contact details, social links, stats | `src/content/site.ts` |
| About copy, quick facts, journey, values | `src/content/about.ts` |
| Skill groups and levels | `src/content/skills.ts` |
| Case studies, stacks, live/GitHub URLs | `src/content/projects.ts` |
| Education, experience, learning focus | `src/content/timeline.ts` |
| Portrait | `public/IMG-20260902-WA0002.jpg` |
| Project covers | `public/projects/*.png` |
| Resume PDF | `public/resume.pdf` |
| OG share image | `public/og.png` |

### Personal details used

- Email: `h.rakib0000000000@gmail.com`
- Phone: `01625672901`
- WhatsApp: `01303839198`
- GitHub: [@Rakib304832](https://github.com/Rakib304832)
- X: [@HRaki46262](https://x.com/HRaki46262)
- Facebook: [rakib.fatim](https://www.facebook.com/rakib.fatim)

LinkedIn is intentionally omitted until a profile URL is supplied.

### Images and resume

The portrait is the supplied profile photo, and the project covers are live-site screenshots captured at 1600 × 1000. The resume is generated from `scripts/generate-resume.mjs` with `pdf-lib`:

```bash
npm run resume
```

Replace `public/IMG-20260902-WA0002.jpg`, `public/projects/*.png`, or `public/resume.pdf` directly whenever better source files are available.

## Deployment

The project is configured for Netlify in `netlify.toml`:

- build command: `npm run build`
- publish directory: `.next`
- Node 22

Set `NEXT_PUBLIC_SITE_URL` to the final domain so canonical URLs, Open Graph metadata, and the sitemap use the live address. Netlify also exposes its own `URL` environment variable, which is used as a fallback.

## Design notes

- Colors, type scale, gradients, and reveal/marquee animations live in `src/app/globals.css`.
- Fonts: Sora (display), Inter (body), JetBrains Mono (labels) via `next/font`.
- Motion respects `prefers-reduced-motion`.
- The mobile menu traps focus, closes on Escape, and locks background scrolling.
- Contact uses direct links and copy-to-clipboard; there is no form or server.
