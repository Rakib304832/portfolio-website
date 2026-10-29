# Rakib — Full Stack Developer Portfolio

A responsive portfolio for Rakib, a full-stack developer based in Dinajpur, Bangladesh. It presents his background, skills, experience, contact details, and project case studies.

## Tech stack

- Next.js 16 App Router and React 19
- TypeScript
- Tailwind CSS 4
- Lucide React and Simple Icons
- Sharp for generated image assets
- pdf-lib for the generated resume

## Features

- Single-page portfolio with hero, about, skills, education, experience, projects, and contact sections
- Responsive navigation, motion effects, and reduced-motion support
- Individual project case-study pages with project metadata and navigation
- Resume download and direct email, phone, and WhatsApp links
- Copy-to-clipboard controls for contact details
- Custom not-found page
- Open Graph and Twitter metadata, Person structured data, sitemap, and robots rules

## Getting started

Use Node.js 22 (the version configured for Netlify) and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Next.js development server |
| `npm run build` | Create the production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run assets` | Regenerate `public/og.png` and `src/app/icon.svg` |
| `npm run resume` | Regenerate `public/resume.pdf` |

## Configuration and content

Most portfolio content is kept in TypeScript data files:

| Content | File |
| --- | --- |
| Name, role, biography, location, contact links, social links, and navigation | `src/content/site.ts` |
| About section | `src/content/about.ts` |
| Skills | `src/content/skills.ts` |
| Project case studies and URLs | `src/content/projects.ts` |
| Education and experience | `src/content/timeline.ts` |

The site URL is selected in this order: `NEXT_PUBLIC_SITE_URL`, Netlify's `URL`, then `https://rakib-portfolio.netlify.app`. Set `NEXT_PUBLIC_SITE_URL` when deploying to a different canonical domain; it is used for metadata, structured data, the sitemap, and robots rules.

## Project structure

```text
public/                  Static images, project covers, and resume
scripts/                 Asset and resume generation scripts
src/
  app/                   App Router pages, metadata, styles, and route handlers
  components/
    layout/              Navigation, footer, and site-wide UI
    projects/            Project-specific components
    sections/            Homepage sections
    ui/                  Shared UI components
  content/               Site, project, skill, and timeline data
  lib/                   Shared utilities
```

## Updating assets

- The profile portrait used on the homepage and not-found page is `public/IMG-20260902-WA0002.jpg`. Update `photo` and `photoAlt` in `src/content/site.ts` if you change its path or description.
- Project cover images are in `public/projects/`; update the corresponding `cover` values in `src/content/projects.ts`.
- The Open Graph image is `public/og.png`. Edit `scripts/generate-assets.mjs`, then run `npm run assets` to regenerate it and the app icon.
- The resume is `public/resume.pdf`. Edit `scripts/generate-resume.mjs`, then run `npm run resume` to regenerate it.

## Deployment

The project includes `netlify.toml` configured to run `npm run build`, publish `.next`, and use Node.js 22. Set `NEXT_PUBLIC_SITE_URL` to the canonical production URL if it differs from the default.
