import { ArrowUpRight, Quote } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutContent } from "@/content/about";
import { siteConfig } from "@/content/site";

export function About() {
  return (
    <section id="about" className="section relative">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="About me"
            title={
              <>
                A developer who cares about the{" "}
                <span className="text-gradient">last 10%</span>.
              </>
            }
            description="Design-minded engineering, obsessive polish, and a soft spot for interfaces that quietly do their job."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <div className="space-y-5 text-[15px] leading-[1.85] text-muted sm:text-base">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className={index === 0 ? "text-foreground/90" : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className="relative mt-9 rounded-2xl border border-line bg-white/[0.02] p-6 pl-14">
              <Quote
                className="absolute left-5 top-6 size-5 text-accent/70"
                aria-hidden="true"
              />
              <p className="font-display text-lg leading-relaxed text-foreground/90">
                {aboutContent.quote}
              </p>
            </blockquote>

            <ul className="mt-8 flex flex-wrap gap-2">
              {aboutContent.values.map((value) => (
                <li key={value}>
                  <Badge>{value}</Badge>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="gradient-border rounded-3xl bg-surface/60 p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                  Quick facts
                </h3>
                <span className="size-1.5 rounded-full bg-accent" />
              </div>

              <dl className="mt-5 divide-y divide-line">
                {aboutContent.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-start justify-between gap-6 py-3"
                  >
                    <dt className="text-xs text-muted">{fact.label}</dt>
                    <dd className="max-w-[62%] text-right text-[13px] font-medium leading-snug text-foreground/90">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <Link
                href="/#contact"
                className="group mt-6 flex items-center justify-between rounded-2xl border border-line bg-white/[0.03] px-4 py-3.5 transition-colors hover:border-accent/25 hover:bg-accent/[0.05]"
              >
                <span className="text-sm text-foreground">
                  Let&apos;s work together
                </span>
                <ArrowUpRight
                  className="size-4 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>

              <p className="mt-4 text-center font-mono text-[9.5px] uppercase tracking-[0.2em] text-muted/70">
                {siteConfig.location} · {siteConfig.timezone}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-16">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
              The road here
            </h3>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
            <span className="font-mono text-[10px] text-muted/70">
              2021 → now
            </span>
          </div>

          <ol className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.journey.map((step) => (
              <li
                key={step.year}
                className="group relative border-t border-line pt-5"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-1 left-0 size-2 rounded-full bg-accent/40 transition-colors duration-300 group-hover:bg-accent"
                />
                <p className="font-mono text-[10px] tracking-[0.2em] text-accent">
                  {step.year}
                </p>
                <h4 className="mt-2 font-display text-base font-medium text-foreground">
                  {step.title}
                </h4>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
