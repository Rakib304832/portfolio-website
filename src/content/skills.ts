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
  | "betterauth"
  | "api"
  | "git"
  | "vite"
  | "npm"
  | "postman"
  | "netlify";

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
    blurb: "The layer people touch — responsive, accessible, and built to feel fast.",
    skills: [
      { name: "React", level: 90, icon: "react" },
      { name: "Next.js", level: 88, icon: "nextjs" },
      { name: "TypeScript", level: 84, icon: "typescript" },
      { name: "Tailwind CSS", level: 92, icon: "tailwind" },
      { name: "JavaScript", level: 88, icon: "javascript" },
      { name: "HTML & CSS", level: 94, icon: "html" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    blurb: "Enough server-side range to own a feature from data model to screen.",
    skills: [
      { name: "Node.js", level: 82, icon: "node" },
      { name: "Express", level: 80, icon: "express" },
      { name: "MongoDB", level: 78, icon: "mongodb" },
      { name: "Better Auth", level: 76, icon: "betterauth" },
      { name: "REST APIs", level: 84, icon: "api" },
    ],
  },
  {
    id: "tools",
    title: "Tools & workflow",
    blurb: "The everyday workflow around the code — version control, builds, and deployment.",
    skills: [
      { name: "Git & GitHub", level: 90, icon: "git" },
      { name: "Vite", level: 84, icon: "vite" },
      { name: "Netlify", level: 85, icon: "netlify" },
      { name: "Postman", level: 76, icon: "postman" },
      { name: "npm", level: 86, icon: "npm" },
    ],
  },
];

export const toolbox = [
  "Better Auth",
  "BazarDor Open API",
  "FitLog API",
  "REST APIs",
  "JSON",
  "CORS",
  "Lucide React",
  "Responsive design",
  "Netlify",
  "GitHub",
];
