import { ArrowUpRight } from "lucide-react";

import { ProjectCard } from "@/components/projects/project-card";
import { SocialGlyph } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";

export function Projects() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const rest = projects.filter((project) => project.slug !== featured.slug);
  const github = siteConfig.socials.find((social) => social.icon === "github");

  return (
    <section id="projects" className="section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-40 top-1/4 size-[30rem] rounded-full bg-accent/[0.05] blur-[130px]" />
        <div className="absolute -right-40 bottom-0 size-[30rem] rounded-full bg-accent-3/[0.06] blur-[130px]" />
      </div>

      <div className="shell">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Selected work"
            title={
              <>
                Interfaces built to be{" "}
                <span className="text-gradient">used</span>, not just viewed.
              </>
            }
            description="Four live projects covering price data, fitness planning, developer tooling, and full-stack CRUD. Each case study goes past the screenshot: the decisions, the hard parts, and what I would do next."
          />
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <ProjectCard project={featured} featured index={0} />
        </Reveal>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, index) => (
            <Reveal key={project.slug} delay={index * 100}>
              <ProjectCard project={project} index={index + 1} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8">
          <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-dashed border-line bg-white/[0.012] px-6 py-5 sm:flex-row sm:items-center">
            <p className="text-[13px] leading-relaxed text-muted">
              More experiments, utilities, and half-finished ideas live on GitHub.
            </p>
            {github ? (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-[12.5px] font-medium text-foreground transition-colors hover:border-accent/30 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                <SocialGlyph name="github" className="size-4" />
                Browse GitHub
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
