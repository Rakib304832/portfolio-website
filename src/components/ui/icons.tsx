import type { SimpleIcon } from "simple-icons";
import {
  siBetterauth,
  siCss,
  siExpress,
  siFacebook,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMongodb,
  siNetlify,
  siNextdotjs,
  siNodedotjs,
  siNpm,
  siPostman,
  siReact,
  siTailwindcss,
  siTypescript,
  siVite,
  siWhatsapp,
  siX,
} from "simple-icons";

import type { TechName } from "@/content/skills";
import type { SocialIcon as SocialName } from "@/content/site";
import { cn } from "@/lib/utils";

const techIcons: Record<Exclude<TechName, "api">, SimpleIcon> = {
  react: siReact,
  nextjs: siNextdotjs,
  typescript: siTypescript,
  tailwind: siTailwindcss,
  javascript: siJavascript,
  html: siHtml5,
  css: siCss,
  node: siNodedotjs,
  express: siExpress,
  mongodb: siMongodb,
  betterauth: siBetterauth,
  git: siGit,
  vite: siVite,
  npm: siNpm,
  postman: siPostman,
  netlify: siNetlify,
};

export function TechIcon({
  name,
  className,
}: {
  name: TechName;
  className?: string;
}) {
  if (name === "api") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={cn("size-4", className)}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8.5 3C6 3 5 4.8 5 7v3.2c0 1.6-.8 2.4-2 2.8 1.2.4 2 1.2 2 2.8V19c0 2.2 1 4 3.5 4" />
        <path d="M15.5 3C18 3 19 4.8 19 7v3.2c0 1.6.8 2.4 2 2.8-1.2.4-2 1.2-2 2.8V19c0 2.2-1 4-3.5 4" />
      </svg>
    );
  }

  const icon = techIcons[name];

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-4", className)}
    >
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}

const linkedInPath =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z";

const socialIcons: Record<Exclude<SocialName, "linkedin">, SimpleIcon> = {
  github: siGithub,
  x: siX,
  facebook: siFacebook,
  whatsapp: siWhatsapp,
};

export function SocialGlyph({
  name,
  className,
}: {
  name: SocialName;
  className?: string;
}) {
  if (name === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={cn("size-4", className)}
      >
        <path d={linkedInPath} fill="currentColor" />
      </svg>
    );
  }

  const icon = socialIcons[name];

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-4", className)}
    >
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}
