import { ArrowUpRight, Briefcase, Download, MapPin } from "lucide-react";
import Link from "next/link";

import { buttonStyles } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/content/site";
import { experience } from "@/content/timeline";

export function Experience() {
  return (
    <section id="experience" className="section relative">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Experience"
            title={
              <>
                Learning by <span className="text-gradient">shipping</span>, not
                just reading.
              </>
            }
            description="No invented job titles — this is the work behind the four live projects: full-stack builds that each added a layer I could not have learned from a tutorial."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <ol className="space-y-5">
              {experience.map((item, index) => (
                <li
                  key={`${item.company}-${item.role}`}
                  className="group relative overflow-hidden rounded-3xl border border-line bg-surface/50 p-6 transition-colors duration-500 hover:border-accent/20 sm:p-7"
                >
                  <Reveal delay={index * 90}>
                    {item.current ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-accent via-accent-2 to-transparent"
                      />
                    ) : null}

                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex items-start gap-3.5">
                        <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-2xl border border-line bg-white/[0.03] text-accent">
                          <Briefcase className="size-4" aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                            {item.role}
                          </h3>
                          <p className="mt-1 text-[13px] text-muted">
                            {item.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-1.5 sm:items-end">
                        <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[10px] tracking-[0.08em] text-muted">
                          {item.period}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] text-muted/80">
                          <MapPin className="size-3" aria-hidden="true" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-[13.5px] leading-relaxed text-muted">
                      {item.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-2.5 text-[13px] leading-relaxed text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-accent/70"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {item.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-line bg-white/[0.02] px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em] text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <Reveal delay={140} className="lg:col-span-4">
            <div className="sticky top-28 space-y-5">
              <div className="gradient-border rounded-3xl bg-surface/60 p-6 sm:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                  The short version
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight text-foreground">
                  Four live projects, built end to end.
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                  Every project on this site has a live URL, a public repository,
                  and a case study explaining the decisions behind it.
                </p>

                <a
                  href={siteConfig.resumeUrl}
                  download
                  className={`${buttonStyles({ size: "md" })} mt-6 w-full`}
                >
                  Download resume
                  <Download className="size-4" aria-hidden="true" />
                </a>

                <Link
                  href="/#contact"
                  className={buttonStyles({
                    variant: "secondary",
                    size: "md",
                    className: "mt-2.5 w-full",
                  })}
                >
                  Start a conversation
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="rounded-3xl border border-line bg-white/[0.015] p-6">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.24em] text-muted">
                  What I bring
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Full-stack feature ownership",
                    "Responsive, accessible interfaces",
                    "REST API design and integration",
                    "Clear documentation and handover",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[12.5px] leading-snug text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 size-1 shrink-0 rounded-full bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
