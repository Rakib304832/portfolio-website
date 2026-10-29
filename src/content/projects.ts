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
    slug: "bazordor",
    title: "BazarDor",
    tagline: "Everyday market prices in Bengali, in one clear view.",
    description:
      "A Bengali-first market-price platform for browsing daily prices, comparing trends, and exploring market-by-market ranges.",
    overview: [
      "BazarDor started from a familiar problem: market prices in Bangladesh change constantly, but the information is scattered across conversations, notices, and memory. BazarDor puts daily prices for rice, lentils, oil, vegetables, fish, meat, eggs, and spices into one Bengali-first interface.",
      "I built the app with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Better Auth handles sign-up, sign-in, and sessions, with MongoDB storing authentication data. Product and price data comes from the BazarDor Open API. The result is a responsive app where anyone can check today's prices without an account, while signed-in users can reach protected category, product, and profile pages.",
    ],
    cover: "/projects/bazordor.png",
    accent: "#22c55e",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Better Auth",
      "MongoDB",
      "BazarDor API",
    ],
    liveUrl: "https://bazordo.netlify.app/",
    repoUrl: "https://github.com/Rakib304832/Assignment-7",
    role: "Full-stack developer · Solo build",
    year: "2026",
    timeline: "Solo build",
    featured: true,
    features: [
      "Browse everyday products with daily prices in Bengali",
      "Compare price trends with clear up, down, and unchanged indicators",
      "Explore minimum, maximum, and average prices by market and division",
      "Filter by category and sort by price or Bengali name",
      "Create an account and reach protected category, product, and profile pages",
      "Responsive Bengali-first layout with category shortcuts",
    ],
    challenges: [
      {
        title: "Designing a Bengali-first interface",
        body: "Bengali product names and numerals need different spacing, line lengths, and hierarchy than the English layouts I was used to. I set the type scale and card measurements around Bengali text first, then checked wrapping and truncation across small screens so long names never broke the grid.",
      },
      {
        title: "Keeping browsing public while accounts stayed optional",
        body: "The useful part of a price checker should not sit behind a login. I kept the product, category, and market views public, then used Better Auth sessions only for the pages that genuinely need a user. MongoDB stores the authentication records, while price data stays in the BazarDor API.",
      },
      {
        title: "Turning market data into a useful comparison",
        body: "A single price is not very helpful without context. I shaped the API data into min, max, and average ranges per market, then added trend states for products that moved up, down, or stayed the same. That turned a list of numbers into an answer to “is this a good price today?”",
      },
    ],
    improvements: [
      "Price alerts for saved products when they cross a target",
      "A side-by-side comparison for two markets",
      "Weekly and monthly trend charts instead of only daily movement",
      "A Bengali and English language toggle",
      "An installable PWA that keeps the last-known prices available offline",
      "A shopping list that estimates the total across products",
    ],
    metrics: [
      { value: "6", label: "Core features" },
      { value: "7", label: "Technologies" },
      { value: "1", label: "Open price API" },
    ],
  },
  {
    slug: "fitlog",
    title: "FitLog",
    tagline: "Pick a lift. Build today's plan. Log every set.",
    description:
      "A dark workout library and daily planner with exercise details, saved lifts, and live session totals.",
    overview: [
      "FitLog is a workout companion for people who want a plan without a spreadsheet. The library covers twelve lifts, with the details that matter before starting: equipment, difficulty, target muscles, duration, calories, ratings, and step-by-step instructions.",
      "I built it with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4, pulling exercise data and images from the FitLog API. The daily plan is capped at five exercises so it stays focused, and every addition or removal updates the session totals immediately. Exercises can also be bookmarked for a future session.",
    ],
    cover: "/projects/fitlog.png",
    accent: "#a3e635",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Lucide React",
      "FitLog API",
    ],
    liveUrl:
      "https://6ab79c28d00735f541c5c0ed--remarkable-tiramisu-1f6f4a.netlify.app/workout",
    repoUrl: "https://github.com/Rakib304832/gym",
    role: "Frontend developer · Solo build",
    year: "2026",
    timeline: "Solo build",
    features: [
      "Browse a workout library with images and key training data",
      "Review equipment, difficulty, target muscles, duration, and instructions",
      "Build a daily plan capped at five exercises",
      "Mark workouts complete and track session totals",
      "Save exercises to revisit for a future plan",
      "See exercise count, minutes, and calories update with the plan",
    ],
    challenges: [
      {
        title: "A plan that stays focused",
        body: "An unlimited workout list quickly becomes another overwhelming to-do list. I capped the daily plan at five exercises, disabled adding once the limit is reached, and made the remaining capacity obvious in the interface. The constraint is the feature.",
      },
      {
        title: "Totals that never drift",
        body: "Exercise count, minutes, and calories all change whenever the plan changes. Instead of storing totals separately, I derived them from the selected exercises so adding, removing, or sorting a lift always produces a consistent summary without a second source of truth.",
      },
      {
        title: "An image-heavy library that still feels quick",
        body: "Every exercise card carries artwork plus several pieces of metadata. I used responsive image sizing and reserved layout space so the grid does not jump while images load, then kept the card hierarchy tight enough to scan on a phone between sets.",
      },
    ],
    improvements: [
      "Weekly plans instead of only a single day",
      "Progress charts for minutes, calories, and completed sessions",
      "A rest timer built into the active plan",
      "Saved exercises that sync across devices",
      "A dark and light mode toggle",
      "Shareable workout plans for friends or a coach",
    ],
    metrics: [
      { value: "12", label: "Exercises in the library" },
      { value: "5", label: "Lifts per daily plan" },
      { value: "3", label: "Live session totals" },
    ],
  },
  {
    slug: "devstack",
    title: "DevStack",
    tagline: "Build your ideal development stack, one choice at a time.",
    description:
      "An interactive React app for exploring frontend, backend, database, and tooling options and assembling a personal stack.",
    overview: [
      "Choosing a stack is usually a tab graveyard: documentation here, comparisons there, a notes file somewhere else. DevStack turns that into a visual selection exercise. Each card shows a technology's category, description, difficulty, rating, and badge, while a side panel keeps a running view of the stack being assembled.",
      "I built it with React 19, TypeScript, Vite, and Tailwind CSS. The catalogue lives in JSON, so adding a new technology or category does not require rewriting the interface. The layout is responsive, with the stack panel staying visible on desktop and moving into the flow on smaller screens.",
    ],
    cover: "/projects/stack-builder.png",
    accent: "#ec4899",
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "JSON"],
    liveUrl: "https://teal-dragon-0cccab.netlify.app/",
    repoUrl: "https://github.com/Rakib304832/Assignment-5",
    role: "Frontend developer · Solo build",
    year: "2026",
    timeline: "Solo build",
    features: [
      "Browse technology cards across frontend, backend, database, and tooling",
      "Add and remove technologies from a personal stack",
      "See selected technologies in a live side panel",
      "Compare options using ratings, difficulty, and badges",
      "Responsive layout for desktop and mobile",
      "Data-driven catalogue loaded from JSON",
    ],
    challenges: [
      {
        title: "One source of truth for the stack",
        body: "The card grid and the side panel both need to know what is selected. I kept the chosen technologies in one state array and derived every selected card, count, and empty state from it. Adding or removing a tool updates both views at once, with no duplicated bookkeeping.",
      },
      {
        title: "A two-panel layout on a phone",
        body: "The stack panel is useful beside the grid on desktop, but there is no room for it on a phone. I let the grid take the full width on small screens and moved the stack into a normal section below it, preserving the same order and readable card sizes instead of shrinking both panels into something unusable.",
      },
      {
        title: "Cards that survive real data",
        body: "Descriptions vary in length, badges are optional, and ratings need a visual scale. I designed the card around flexible text and consistent spacing, then checked the catalogue with the shortest and longest entries so one awkward description would not leave the grid uneven.",
      },
    ],
    improvements: [
      "Persist the selected stack in local storage",
      "Shareable links that open a saved stack",
      "A comparison mode for two technologies side by side",
      "Search and category filters across the catalogue",
      "Export a stack as text or an image for a README",
      "Recommended presets for common project types",
    ],
    metrics: [
      { value: "15", label: "Technologies in the catalogue" },
      { value: "4", label: "Stack categories" },
      { value: "1", label: "Live stack panel" },
    ],
  },
  {
    slug: "user-manager",
    title: "User Manager",
    tagline: "A full-stack dashboard for the people in your system.",
    description:
      "A Next.js dashboard backed by an Express REST API for searching, creating, editing, and deleting users.",
    overview: [
      "User Manager is a full-stack CRUD build: a clean dashboard on top of a separate Express API. It shows the API connection status, quick statistics, a searchable directory, and forms for creating and editing records.",
      "The frontend uses Next.js 16, React 19, TypeScript, and Tailwind CSS 4; the API is Node.js with Express 5 and CORS. Both sides validate names and email addresses, and the API exposes health and user endpoints. Data currently lives in memory, which makes this a useful prototype of the full workflow rather than a production data store.",
    ],
    cover: "/projects/user-manager.png",
    accent: "#3b82f6",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Node.js",
      "Express 5",
      "REST API",
      "CORS",
    ],
    liveUrl: "https://scintillating-parfait-c51647.netlify.app/",
    repoUrl: "https://github.com/Rakib304832/Backend_project_with_UI",
    role: "Full-stack developer · Solo build",
    year: "2026",
    timeline: "Solo build",
    features: [
      "Responsive dashboard with live API connection status",
      "Searchable user directory",
      "Create, edit, and delete user records",
      "Server-side validation for names and email addresses",
      "REST API health check",
      "Clear empty, loading, and error states",
    ],
    challenges: [
      {
        title: "Two apps, one development flow",
        body: "The frontend and API live in separate projects, which makes the boundary visible but adds friction. I used CORS to allow the dashboard to call the Express server, kept the API URL configurable through an environment variable, and surfaced the connection state in the dashboard so a stopped server is immediately obvious.",
      },
      {
        title: "Validation that agrees on both sides",
        body: "The form should not let an invalid user through, but the API cannot trust the form. I applied the same rules in both places — names between 1 and 100 characters, valid emails up to 254 characters — and mapped failures to useful messages. Missing IDs return 404 instead of a silent success.",
      },
      {
        title: "Keeping the dashboard honest",
        body: "A dashboard that shows stale data is worse than one that admits something failed. I refetch the directory after a create, update, or delete, handle a zero-user response as a real empty state, and keep the API health signal visible so the interface reflects the system rather than the last successful request.",
      },
    ],
    improvements: [
      "Persist users in MongoDB or PostgreSQL instead of memory",
      "Add authentication and role-based access",
      "Move search and pagination to the server",
      "Use optimistic updates with rollback on failure",
      "Add API tests, validation tests, and a CI pipeline",
      "Keep an audit log of user changes",
    ],
    metrics: [
      { value: "7", label: "REST API endpoints" },
      { value: "2", label: "Apps working together" },
      { value: "Full", label: "Create, read, update, delete" },
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
