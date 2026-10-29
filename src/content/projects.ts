/**
 * Placeholder case studies. Swap the copy, images, and URLs for real projects
 * whenever you are ready — every project page is generated from this file.
 */

export type ProjectChallenge = {
  title: string;
  body: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  overview: string[];
  cover: string;
  accent: string;
  tech: string[];
  liveUrl: string;
  repoUrl?: string;
  repoPrivate?: boolean;
  role: string;
  year: string;
  timeline: string;
  featured?: boolean;
  features: string[];
  challenges: ProjectChallenge[];
  improvements: string[];
  metrics: ProjectMetric[];
};

export const projects: Project[] = [
  {
    slug: "devflow",
    title: "DevFlow",
    tagline:
      "A real-time delivery dashboard that turns sprint chaos into a calm, shared view.",
    description:
      "A collaborative project dashboard with sprint boards, velocity analytics, and a live activity feed — built for small product teams.",
    overview: [
      "Small teams usually run their delivery process across a task board, a spreadsheet, and a chat thread. DevFlow pulls those signals into one place: a sprint board that updates live, analytics that answer “are we actually on track?”, and an activity feed that keeps everyone in the loop without another stand-up.",
      "I designed and built the product end to end — data model, API, permissions, interface, and deployment. The goal was not to clone a heavyweight project tool, but to make the five minutes before a stand-up genuinely useful.",
    ],
    cover: "/projects/devflow.png",
    accent: "#5eead4",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Auth.js",
    ],
    liveUrl: "https://devflow-demo.netlify.app",
    repoUrl: "https://github.com/rakibhasan/devflow",
    role: "Full-stack developer · Solo build",
    year: "2025",
    timeline: "12 weeks",
    featured: true,
    features: [
      "Drag-and-drop sprint board with optimistic updates",
      "Live activity feed powered by server-sent events",
      "Velocity and burn-down analytics with date filtering",
      "Role-based access for owners, leads, and contributors",
      "Keyboard-first command palette for power users",
      "Dark, high-contrast interface with reduced-motion support",
    ],
    challenges: [
      {
        title: "Making the board feel instant",
        body: "A naive refresh after every drag made the board flicker and hammered the API. I moved to optimistic updates with server actions, then reconciled state only when the server disagreed. Mutations are debounced per card, so rapid reordering collapses into one request instead of five.",
      },
      {
        title: "Permissions without a maze of conditionals",
        body: "Three roles × five actions produced a tangle of checks scattered across the UI and API. I extracted a single permission matrix, generated typed guards from it, and enforced the same rules at the database layer. The interface now hides invalid actions before the user can attempt them.",
      },
      {
        title: "Charts that stay fast on big data",
        body: "Rendering a full year of events into SVG made the analytics tab sluggish. I downsampled series on the server, capped rendered points to the viewport width, and memoized tooltip math. The tab now stays under 16ms per frame even with a full year selected.",
      },
    ],
    improvements: [
      "Two-way GitHub and Slack integrations for issue sync and notifications",
      "Automated sprint reports generated at the end of each cycle",
      "Public shareable dashboards for stakeholders without an account",
      "A dedicated mobile app for on-call updates",
      "End-to-end test suite with Playwright and seeded fixtures",
    ],
    metrics: [
      { value: "42%", label: "Faster weekly stand-ups" },
      { value: "8k", label: "Events processed daily" },
      { value: "99.9%", label: "Demo environment uptime" },
    ],
  },
  {
    slug: "shopsphere",
    title: "ShopSphere",
    tagline:
      "A headless storefront where considered design meets sub-second pages.",
    description:
      "A fashion storefront built on a headless CMS and Stripe, focused on editorial storytelling, speed, and a frictionless checkout.",
    overview: [
      "ShopSphere is a storefront concept for an independent fashion label. The brief was simple: make browsing feel like flipping through a lookbook, and make buying feel like it takes one breath. That meant editorial layouts, image-heavy storytelling, and a checkout that never gets in the way.",
      "I built the front end, the product data layer, and the checkout integration. Content editors work in Sanity; the storefront stays statically rendered and revalidates on publish, so the shopping experience is fast without freezing the catalogue.",
    ],
    cover: "/projects/shopsphere.png",
    accent: "#c084fc",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "Sanity",
      "Zustand",
      "Vercel",
    ],
    liveUrl: "https://shopsphere-demo.vercel.app",
    repoUrl: "https://github.com/rakibhasan/shopsphere",
    role: "Frontend lead · Design & build",
    year: "2025",
    timeline: "9 weeks",
    features: [
      "Editorial home page driven by a headless CMS",
      "Faceted product listing with instant filters",
      "Persistent cart with optimistic quantity updates",
      "Stripe Checkout with webhook-confirmed orders",
      "Image pipeline with responsive art direction",
      "Structured data and shareable product metadata",
    ],
    challenges: [
      {
        title: "Keeping image-heavy pages fast",
        body: "The first build scored 61 on mobile Lighthouse: oversized hero art and late-loading product imagery. I added responsive sizes, art-directed crops, priority hints for the hero, and blur placeholders for the grid. LCP dropped from 4.2s to 1.6s on a throttled connection.",
      },
      {
        title: "A cart that survives real life",
        body: "Shoppers switch tabs, reload, and come back the next day. I persisted the cart locally, revalidated prices and stock on hydration, and merged the anonymous cart into the customer cart on sign-in. A small webhook worker reconciles orders if a payment succeeds after the tab closes.",
      },
      {
        title: "Checkout edge cases",
        body: "Expired sessions, duplicate webhooks, and partial refunds all showed up during testing. I made the order creation idempotent with a client-generated key and moved every state transition into one server-side order state machine. Retries are now safe by construction.",
      },
    ],
    improvements: [
      "AI-assisted size recommendations based on fit history",
      "Multi-currency and localized pricing",
      "Saved wishlists with shareable links",
      "Offline-capable PWA with cached catalogue pages",
      "A/B testing hooks for editorial layouts",
    ],
    metrics: [
      { value: "98", label: "Mobile Lighthouse performance" },
      { value: "1.6s", label: "Largest Contentful Paint" },
      { value: "24%", label: "Demo checkout completion lift" },
    ],
  },
  {
    slug: "campushub",
    title: "CampusHub",
    tagline: "The missing operating system for campus life.",
    description:
      "A student community platform with club feeds, event discovery, and a shared campus calendar — built with a small team of four.",
    overview: [
      "Campus life is fragmented across notice boards, group chats, and five different calendars. CampusHub brings clubs, events, and student projects into one feed, with a shared calendar and lightweight profiles so people can find each other without another group chat.",
      "I led the frontend and co-designed the API. We shipped a real-time feed, a moderation queue, and a calendar that works on the campus Wi-Fi you actually have — flaky. It is used by students across three faculties.",
    ],
    cover: "/projects/campushub.png",
    accent: "#38bdf8",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
      "Cloudinary",
    ],
    liveUrl: "https://campushub-demo.vercel.app",
    repoUrl: "https://github.com/rakibhasan/campushub",
    role: "Frontend lead · 4-person team",
    year: "2024",
    timeline: "16 weeks",
    features: [
      "Real-time club and project feed",
      "Event discovery with a shared campus calendar",
      "Club profiles with roles and join requests",
      "Moderation queue with report escalation",
      "Optimistic likes, comments, and shares",
      "Progressive image delivery for slow connections",
    ],
    challenges: [
      {
        title: "Real-time without the noise",
        body: "A raw socket stream delivered every like and comment, which made busy feeds unusable and burned battery. I batched events into 500ms windows, deduplicated them client-side, and paused subscriptions when the tab was hidden. The feed stayed live without feeling twitchy.",
      },
      {
        title: "Moderation that scales with volunteers",
        body: "Student moderators needed tools, not a database console. I built a report queue with severity scoring, one-click hide, and an audit trail. Auto-hide thresholds caught obvious spam while keeping humans in control of anything ambiguous.",
      },
      {
        title: "Designing for unreliable networks",
        body: "Campus Wi-Fi drops constantly. I moved the shell to a cached layout, added optimistic rendering with retry queues, and made the calendar read from local storage first. Pages now open with usable content before the network responds.",
      },
    ],
    improvements: [
      "Native mobile apps with push notifications",
      "Club analytics for event attendance and engagement",
      "Two-way calendar sync with Google and Apple",
      "A dedicated accessibility pass with screen-reader testing",
      "Single sign-on with the university identity provider",
    ],
    metrics: [
      { value: "1.2k", label: "Students onboarded" },
      { value: "48", label: "Active clubs" },
      { value: "3.4k", label: "Posts in the first semester" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectNeighbours(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };

  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}
