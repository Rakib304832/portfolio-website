import { Award, GraduationCap, MapPin } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications, education } from "@/content/timeline";

export function Education() {
  return (
    <section id="education" className="section relative">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Education"
            title={
              <>
                A foundation built on{" "}
                <span className="text-gradient">curiosity</span>.
              </>
            }
            description="Formal computer science training, paired with the far less formal education of shipping real projects and reading a lot of source code."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
              {education.map((item, index) => (
                <li key={item.institution} className="group relative">
                  <Reveal delay={index * 100}>
                    <span
                      aria-hidden="true"
                      className="absolute -left-[calc(1.5rem+1px)] top-1.5 grid size-6 -translate-x-1/2 place-items-center rounded-full border border-accent/30 bg-background text-accent sm:-left-[calc(2rem+1px)]"
                    >
                      <GraduationCap className="size-3" />
                    </span>

                    <div className="rounded-3xl border border-line bg-surface/50 p-6 transition-colors duration-500 group-hover:border-accent/20 sm:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                          {item.period}
                        </p>
                        <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[10px] text-muted">
                          {item.result}
                        </span>
                      </div>

                      <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground sm:text-[1.4rem]">
                        {item.degree}
                      </h3>

                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] text-muted">
                        <span className="text-foreground/80">{item.institution}</span>
                        <span className="inline-flex items-center gap-1 text-[11.5px]">
                          <MapPin className="size-3" aria-hidden="true" />
                          {item.location}
                        </span>
                      </div>

                      <p className="mt-4 text-[13.5px] leading-relaxed text-muted">
                        {item.description}
                      </p>

                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {item.courses.map((course) => (
                          <li
                            key={course}
                            className="rounded-full border border-line bg-white/[0.02] px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.1em] text-muted"
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <Reveal delay={160} className="lg:col-span-4">
            <div className="gradient-border h-full rounded-3xl bg-surface/50 p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <Award className="size-4 text-accent" aria-hidden="true" />
                <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
                  Certifications
                </h3>
              </div>

              <ul className="mt-5 divide-y divide-line">
                {certifications.map((certification) => (
                  <li key={certification.name} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-[13.5px] font-medium leading-snug text-foreground/90">
                        {certification.name}
                      </p>
                      <span className="shrink-0 font-mono text-[10px] text-accent/80">
                        {certification.year}
                      </span>
                    </div>
                    <p className="mt-1 text-[11.5px] text-muted">
                      {certification.issuer}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-dashed border-line bg-white/[0.015] p-4">
                <p className="font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.18em] text-muted">
                  Currently pursuing a BSc thesis on perceived performance in
                  data-heavy dashboards.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
