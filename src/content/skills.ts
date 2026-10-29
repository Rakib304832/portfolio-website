export type TechName =
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "javascript"
  | "html"
  | "css"
  | "node"
  | "express"
  | "mongodb"
  | "postgresql"
  | "prisma"
  | "api"
  | "git"
  | "github"
  | "figma"
  | "docker"
  | "vercel"
  | "netlify"
  | "linux"
  | "postman";

export type Skill = {
  name: string;
  level: number;
  icon: TechName;
};

export type SkillGroup = {
  id: "frontend" | "backend" | "tools";
  title: string;
  blurb: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    blurb: "The layer people actually touch — and the one I obsess over most.",
    skills: [
      { name: "React", level: 92, icon: "react" },
      { name: "Next.js", level: 90, icon: "nextjs" },
      { name: "TypeScript", level: 88, icon: "typescript" },
      { name: "Tailwind CSS", level: 94, icon: "tailwind" },
      { name: "JavaScript", level: 90, icon: "javascript" },
      { name: "HTML & CSS", level: 96, icon: "html" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    blurb: "Enough server-side range to own a feature from schema to screen.",
    skills: [
      { name: "Node.js", level: 82, icon: "node" },
      { name: "Express", level: 80, icon: "express" },
      { name: "PostgreSQL", level: 74, icon: "postgresql" },
      { name: "MongoDB", level: 78, icon: "mongodb" },
      { name: "Prisma", level: 74, icon: "prisma" },
      { name: "REST APIs", level: 86, icon: "api" },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    blurb: "The quiet infrastructure that keeps shipping calm and predictable.",
    skills: [
      { name: "Git & GitHub", level: 92, icon: "git" },
      { name: "Figma", level: 84, icon: "figma" },
      { name: "Docker", level: 66, icon: "docker" },
      { name: "Vercel", level: 88, icon: "vercel" },
      { name: "Netlify", level: 86, icon: "netlify" },
      { name: "Linux", level: 72, icon: "linux" },
    ],
  },
];

export const toolbox = [
  "React Query",
  "Zustand",
  "Framer Motion",
  "Zod",
  "Jest",
  "Vitest",
  "Sanity",
  "Stripe",
  "Supabase",
  "Vite",
  "shadcn/ui",
  "Socket.IO",
];
