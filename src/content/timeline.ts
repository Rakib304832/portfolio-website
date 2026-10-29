export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  result: string;
  location: string;
  description: string;
  courses: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  tech: string[];
  current?: boolean;
};

export type LearningItem = {
  name: string;
  detail: string;
  year: string;
};

export const education: EducationItem[] = [
  {
    institution: "Rangpur Polytechnic Institute",
    degree: "Diploma in Computer Science",
    period: "Ongoing · 3rd semester",
    result: "CGPA 3.61 / 4.00",
    location: "Rangpur, Bangladesh",
    description:
      "Building a foundation in programming, databases, and web engineering while shipping full-stack projects alongside my studies. The classroom explains the concepts; the projects make them stick.",
    courses: [
      "Programming",
      "Data Structures",
      "Database Management",
      "Web Development",
      "Object-Oriented Programming",
      "Computer Networks",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Independent Full Stack Developer",
    company: "Self-directed projects",
    period: "2025 — Present",
    location: "Dinajpur, Bangladesh",
    description:
      "Building and shipping full-stack web applications end to end — from data fetching, authentication, and REST APIs to responsive interfaces and deployment.",
    bullets: [
      "Built BazarDor, a Bengali market-price platform with Next.js 16, Better Auth, and MongoDB, including protected routes and market comparison views.",
      "Developed FitLog, a workout planner with a five-exercise daily plan limit, saved exercises, and live session totals.",
      "Shipped User Manager, a full-stack dashboard with a Next.js frontend and a separate Express 5 REST API, including validation and error handling.",
      "Designed and deployed four responsive projects on Netlify, using GitHub for version control and iterative delivery.",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    current: true,
  },
];

export const learningFocus: LearningItem[] = [
  {
    name: "Full-stack architecture",
    detail: "Next.js App Router, REST APIs, deployment",
    year: "Ongoing",
  },
  {
    name: "Authentication & databases",
    detail: "Better Auth, MongoDB, protected routes",
    year: "2026",
  },
  {
    name: "TypeScript patterns",
    detail: "Typed components, API contracts, state",
    year: "2026",
  },
  {
    name: "UI engineering",
    detail: "Tailwind CSS 4, responsive layouts, accessibility",
    year: "Ongoing",
  },
];
