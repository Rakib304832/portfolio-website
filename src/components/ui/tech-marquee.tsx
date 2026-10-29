import type { TechName } from "@/content/skills";

import { TechIcon } from "./icons";

const stack: Array<{ name: string; icon: TechName }> = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Node.js", icon: "node" },
  { name: "Express", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Better Auth", icon: "betterauth" },
  { name: "Git", icon: "git" },
  { name: "Vite", icon: "vite" },
  { name: "Netlify", icon: "netlify" },
];

export function TechMarquee() {
  return (
    <div className="marquee relative overflow-hidden border-y border-line bg-white/[0.012] py-5">
      <div className="marquee-track flex w-max">
        {[0, 1].map((group) => (
          <div
            key={group}
            aria-hidden={group === 1 || undefined}
            className="flex items-center gap-9 pr-9"
          >
            {stack.map((item) => (
              <div
                key={`${group}-${item.name}`}
                className="flex items-center gap-2.5 text-muted"
              >
                <TechIcon
                  name={item.icon}
                  className="size-4 text-accent/70"
                />
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em]">
                  {item.name}
                </span>
                <span
                  aria-hidden="true"
                  className="ml-6 size-1 rounded-full bg-white/20"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
