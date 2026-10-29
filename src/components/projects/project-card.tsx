import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  featured = false,
  index,
}: {
  project: Project;
  featured?: boolean;
  index: number;
}) {
  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-[2rem] border border-line bg-surface/50 transition-colors duration-500 hover:border-accent/25">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative aspect-[16/10] overflow-hidden border-b border-line lg:aspect-auto lg:min-h-[440px] lg:border-b-0 lg:border-r">
            <Image
              src={project.cover}
              alt={`${project.title} — ${project.tagline}`}
              fill
              sizes="(min-width: 1024px) 620px, 100vw"
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#05070d]/55 via-transparent to-transparent"
            />
            <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-white/80 backdrop-blur">
              <span
                aria-hidden="true"
                className="size-1.5 animate-pulse-soft rounded-full bg-accent"
              />
              Featured case study
            </span>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
            <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              <span>
                0{index + 1} / {project.year}
              </span>
              <span>{project.timeline}</span>
            </div>

            <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              <Link
                href={`/projects/${project.slug}`}
                className="rounded-sm after:absolute after:inset-0 after:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                {project.title}
              </Link>
            </h3>

            <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
              {project.tagline}
            </p>

            <ul className="mt-6 flex flex-wrap gap-1.5">
              {project.tech.slice(0, 5).map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line bg-white/[0.025] px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.1em] text-muted"
                >
                  {tech}
                </li>
              ))}
              {project.tech.length > 5 ? (
                <li className="rounded-full border border-line bg-white/[0.025] px-2.5 py-1 font-mono text-[9.5px] text-muted">
                  +{project.tech.length - 5}
                </li>
              ) : null}
            </ul>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
              <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent">
                Read the case study
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20 inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-[11.5px] text-muted transition-colors hover:border-accent/30 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                <ExternalLink className="size-3" aria-hidden="true" />
                Live site
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-surface/50 transition-colors duration-500 hover:border-accent/25",
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        <Image
          src={project.cover}
          alt={`${project.title} — ${project.tagline}`}
          fill
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#05070d]/50 via-transparent to-transparent"
        />
        <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/75 backdrop-blur">
          {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3 font-mono text-[9.5px] uppercase tracking-[0.2em] text-muted">
          <span>0{index + 1} / Case study</span>
          <span className="truncate text-right">{project.role.split(" · ")[0]}</span>
        </div>

        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-sm after:absolute after:inset-0 after:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line bg-white/[0.025] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-5">
          <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-accent">
            View more
            <ArrowUpRight
              className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 inline-flex items-center gap-1.5 text-[11px] text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
          >
            <ExternalLink className="size-3" aria-hidden="true" />
            Live
          </a>
        </div>
      </div>
    </article>
  );
}
