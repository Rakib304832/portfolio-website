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

export const education: EducationItem[] = [
  {
    institution: "University of Dhaka",
    degree: "BSc in Computer Science & Engineering",
    period: "2022 — 2026",
    result: "CGPA 3.82 / 4.00",
    location: "Dhaka, Bangladesh",
    description:
      "Final-year student specialising in web engineering and human-computer interaction. My thesis explores interface latency and perceived performance in data-heavy dashboards.",
    courses: [
      "Data Structures",
      "Algorithms",
      "Database Systems",
      "Web Engineering",
      "Human-Computer Interaction",
      "Operating Systems",
    ],
  },
  {
    institution: "Notre Dame College",
    degree: "Higher Secondary Certificate — Science",
    period: "2019 — 2021",
    result: "GPA 5.00 / 5.00",
    location: "Dhaka, Bangladesh",
    description:
      "Physics, chemistry, and higher mathematics, with an early detour into competitive programming that eventually led to the web.",
    courses: ["Physics", "Chemistry", "Higher Mathematics", "ICT"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Freelance Frontend Developer",
    company: "Self-employed",
    period: "2023 — Present",
    location: "Remote",
    description:
      "Partnering with founders and small teams to design and ship marketing sites, product dashboards, and design systems.",
    bullets: [
      "Shipped 20+ production interfaces with a 95+ Lighthouse performance average.",
      "Built reusable component libraries that cut new-page delivery time by roughly 40%.",
      "Introduced accessibility checks and visual regression testing into client workflows.",
      "Worked directly with designers and founders from brief to launch, including handover docs.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    current: true,
  },
  {
    role: "Frontend Developer Intern",
    company: "TechNova Solutions",
    period: "Jan — Jun 2023",
    location: "Dhaka, Bangladesh",
    description:
      "Joined a four-person frontend team maintaining an internal analytics platform used by operations teams.",
    bullets: [
      "Rebuilt the reporting table with virtualized rows, supporting 50k+ records without jank.",
      "Integrated REST endpoints and replaced ad-hoc fetch logic with typed API clients.",
      "Reduced the main bundle by 28% through route-level code splitting and dependency cleanup.",
      "Wrote component tests with Jest and React Testing Library for critical filters.",
    ],
    tech: ["React", "JavaScript", "REST APIs", "Jest", "Sass"],
  },
  {
    role: "Open Source Contributor",
    company: "Various projects",
    period: "2022 — Present",
    location: "Remote",
    description:
      "Occasional contributions to UI libraries, documentation, and accessibility fixes in the React ecosystem.",
    bullets: [
      "Merged accessibility and keyboard-navigation fixes into component libraries.",
      "Improved documentation examples for form and dialog primitives.",
      "Reviewing pull requests and triaging issues in projects I rely on.",
    ],
    tech: ["TypeScript", "React", "Accessibility", "Documentation"],
  },
];

export const certifications = [
  {
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    year: "2024",
  },
  {
    name: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2022",
  },
];
