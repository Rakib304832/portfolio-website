import { Sparkles } from "lucide-react";
import type { CSSProperties } from "react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechIcon } from "@/components/ui/icons";
import { skillGroups, toolbox } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-10 size-[36rem] -translate-x-1/2 rounded-full bg-accent-2/[0.06] blur-[130px]" />
      </div>

      <div className="shell">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Skills & stack"
            title={
              <>
                Tools I reach for,{" "}
                <span className="text-gradient">grouped by craft</span>.
              </>
            }
            description="A practical toolkit built through shipping — front-end interfaces first, supported by enough backend and DevOps range to own a feature end to end."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.id} delay={groupIndex * 110}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-surface/55 p-6 transition-colors duration-500 hover:border-accent/20 sm:p-7">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-accent/[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-100 lg:opacity-60"
                />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                      0{groupIndex + 1} / {group.title}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground">
                      {group.title}
                    </h3>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-2xl border border-line bg-white/[0.03] font-mono text-[11px] text-muted">
                    {group.skills.length.toString().padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-3 min-h-10 text-[13px] leading-relaxed text-muted">
                  {group.blurb}
                </p>

                <ul className="mt-7 space-y-5">
                  {group.skills.map((skill, skillIndex) => (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between gap-3">
                        <span className="flex items-center gap-2.5 text-[13.5px] text-foreground/90">
                          <TechIcon
                            name={skill.icon}
                            className="size-4 shrink-0 text-accent/80"
                          />
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] tabular-nums text-muted">
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        role="progressbar"
                        aria-label={`${skill.name} proficiency`}
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]"
                      >
                        <div
                          className="skill-fill h-full rounded-full bg-[linear-gradient(90deg,#5eead4,#818cf8_62%,#c084fc)]"
                          style={
                            {
                              "--level": `${skill.level}%`,
                              "--bar-delay": `${120 + skillIndex * 70}ms`,
                            } as CSSProperties
                          }
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-7">
          <div className="flex flex-col gap-4 rounded-3xl border border-line bg-white/[0.015] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div className="flex items-center gap-2.5">
              <Sparkles
                className="size-4 shrink-0 text-accent"
                aria-hidden="true"
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
                Also in the toolbox
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {toolbox.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-[11.5px] text-muted transition-colors hover:border-accent/25 hover:text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
