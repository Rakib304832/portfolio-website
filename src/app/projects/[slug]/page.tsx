import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { buttonStyles } from "@/components/ui/button";
import { SocialGlyph } from "@/components/ui/icons";
import { getProject, getProjectNeighbours, projects } from "@/content/projects";
import { siteConfig } from "@/content/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${project.title} — Case study`,
      description: project.tagline,
      url: `/projects/${project.slug}`,
      images: [
        {
          url: project.cover,
          width: 1600,
          height: 1000,
          alt: `${project.title} interface preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case study`,
      description: project.tagline,
      images: [project.cover],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getProjectNeighbours(project.slug);

  return (
    <article>
      <header className="relative overflow-hidden pb-14 pt-28 sm:pb-16 sm:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-grid opacity-60" />
          <div
            className="absolute -left-32 top-0 size-[30rem] rounded-full opacity-[0.13] blur-[120px]"
            style={{ backgroundColor: project.accent }}
          />
          <div className="absolute -right-32 top-40 size-[28rem] rounded-full bg-accent-2/[0.09] blur-[130px]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="shell">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-3.5 py-1.5 text-[12px] text-muted transition-colors hover:border-accent/25 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
          >
            <ArrowLeft
              className="size-3.5 transition-transform duration-300 group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            All projects
          </Link>

          <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
            <span className="text-accent">Case study</span>
            <span aria-hidden="true" className="size-1 rounded-full bg-white/20" />
            <span>{project.year}</span>
            <span aria-hidden="true" className="size-1 rounded-full bg-white/20" />
            <span>{project.timeline}</span>
          </div>

          <h1 className="mt-5 max-w-4xl font-display text-[3rem] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
            {project.title}
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-muted sm:text-lg">
            {project.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles({ size: "lg" })}
            >
              View live site
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>

            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({ variant: "secondary", size: "lg" })}
              >
                <SocialGlyph name="github" className="size-4" />
                Source code
              </a>
            ) : project.repoPrivate ? (
              <span className="rounded-full border border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Private repository
              </span>
            ) : null}
          </div>

          <div
            className="relative mt-12 aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[0_50px_120px_-60px_rgba(0,0,0,0.9)] sm:aspect-[16/9] sm:rounded-[2rem]"
            style={{ borderColor: `${project.accent}26` }}
          >
            <Image
              src={project.cover}
              alt={`${project.title} interface preview`}
              fill
              priority
              sizes="(min-width: 1216px) 1136px, 100vw"
              className="object-cover"
            />
          </div>

          <dl className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="bg-surface/80 px-5 py-4">
                <dd className="font-display text-2xl font-semibold tracking-tight text-foreground">
                  {metric.value}
                </dd>
                <dt className="mt-1 text-[11.5px] text-muted">
                  {metric.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="shell pb-16 pt-8 sm:pb-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_310px] lg:gap-16">
          <div className="min-w-0 space-y-16">
            <section aria-labelledby="overview-heading">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em]">
                <span className="text-accent">01</span>
                <span className="h-px w-8 bg-line" aria-hidden="true" />
                <span className="text-muted">Overview</span>
              </div>
              <h2
                id="overview-heading"
                className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                The story behind the build.
              </h2>
              <div className="mt-5 space-y-4 text-[14.5px] leading-[1.85] text-muted sm:text-[15px]">
                {project.overview.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section aria-labelledby="features-heading">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em]">
                <span className="text-accent">02</span>
                <span className="h-px w-8 bg-line" aria-hidden="true" />
                <span className="text-muted">What it does</span>
              </div>
              <h2
                id="features-heading"
                className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                Core features.
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl border border-line bg-white/[0.015] p-4"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-accent/25 bg-accent/[0.08] text-accent">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    <span className="text-[13px] leading-relaxed text-muted">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="challenges" aria-labelledby="challenges-heading">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em]">
                <span className="text-accent">03</span>
                <span className="h-px w-8 bg-line" aria-hidden="true" />
                <span className="text-muted">Challenges</span>
              </div>
              <h2
                id="challenges-heading"
                className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                The hard parts, and how I solved them.
              </h2>
              <ol className="mt-6 space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li
                    key={challenge.title}
                    className="group relative overflow-hidden rounded-3xl border border-line bg-surface/40 p-6 transition-colors hover:border-accent/20 sm:p-7"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-[11px] text-accent/70">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                          {challenge.title}
                        </h3>
                        <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                          {challenge.body}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="next-heading">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em]">
                <span className="text-accent">04</span>
                <span className="h-px w-8 bg-line" aria-hidden="true" />
                <span className="text-muted">What&apos;s next</span>
              </div>
              <h2
                id="next-heading"
                className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                Future improvements.
              </h2>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {project.improvements.map((improvement) => (
                  <li
                    key={improvement}
                    className="flex items-start gap-3 py-3.5 text-[13.5px] leading-relaxed text-muted"
                  >
                    <Sparkles
                      className="mt-0.5 size-3.5 shrink-0 text-accent/70"
                      aria-hidden="true"
                    />
                    {improvement}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="lg:min-w-0">
            <div className="space-y-5 lg:sticky lg:top-28">
              <div className="gradient-border rounded-3xl bg-surface/60 p-6">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
                  Project details
                </h2>

                <dl className="mt-5 divide-y divide-line">
                  <div className="flex items-start justify-between gap-5 pb-3">
                    <dt className="text-[12px] text-muted">Role</dt>
                    <dd className="max-w-[62%] text-right text-[12.5px] font-medium leading-snug text-foreground/90">
                      {project.role}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-5 py-3">
                    <dt className="text-[12px] text-muted">Year</dt>
                    <dd className="text-[12.5px] font-medium text-foreground/90">
                      {project.year}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-5 py-3">
                    <dt className="text-[12px] text-muted">Timeline</dt>
                    <dd className="text-[12.5px] font-medium text-foreground/90">
                      {project.timeline}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-5 pt-3">
                    <dt className="text-[12px] text-muted">Status</dt>
                    <dd className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-emerald-300/90">
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-emerald-400"
                      />
                      Live
                    </dd>
                  </div>
                </dl>

                <h3 className="mt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
                  Stack
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line bg-white/[0.025] px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.08em] text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonStyles({ size: "sm", className: "w-full" })}
                  >
                    Visit live site
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonStyles({
                        variant: "secondary",
                        size: "sm",
                        className: "w-full",
                      })}
                    >
                      <SocialGlyph name="github" className="size-3.5" />
                      View source
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="rounded-3xl border border-line bg-white/[0.015] p-6">
                <p className="font-display text-lg font-medium leading-snug text-foreground">
                  Building something similar?
                </p>
                <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                  I am happy to walk through the decisions in more detail.
                </p>
                <Link
                  href="/#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-accent transition-colors hover:text-accent/80"
                >
                  Start a conversation
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <nav aria-label="Project navigation" className="shell pb-20 sm:pb-24">
        <div className="grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="group rounded-3xl border border-line bg-surface/40 p-6 transition-colors hover:border-accent/25"
            >
              <span className="inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.24em] text-muted">
                <ArrowLeft
                  className="size-3 transition-transform duration-300 group-hover:-translate-x-0.5"
                  aria-hidden="true"
                />
                Previous project
              </span>
              <span className="mt-2 block font-display text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                {previous.title}
              </span>
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group rounded-3xl border border-line bg-surface/40 p-6 text-left transition-colors hover:border-accent/25 sm:text-right"
            >
              <span className="inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.24em] text-muted sm:flex-row-reverse">
                <ArrowRight
                  className="size-3 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
                Next project
              </span>
              <span className="mt-2 block font-display text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                {next.title}
              </span>
            </Link>
          ) : null}
        </div>

        <p className="mt-8 text-center font-mono text-[9.5px] uppercase tracking-[0.2em] text-muted/60">
          {siteConfig.name} · {project.year} · Built with care
        </p>
      </nav>
    </article>
  );
}
