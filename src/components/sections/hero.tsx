import { ArrowRight, Download, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { buttonStyles } from "@/components/ui/button";
import { TechIcon } from "@/components/ui/icons";
import { RoleRotator } from "@/components/ui/role-rotator";
import { SocialLinks } from "@/components/ui/social-links";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="animate-drift absolute -left-40 top-0 size-[34rem] rounded-full bg-accent/[0.08] blur-[120px]" />
        <div className="absolute -right-28 top-20 size-[32rem] rounded-full bg-accent-2/[0.1] blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="shell">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div>
            <div
              className="rise inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-1.5"
              style={{ "--delay": "40ms" } as CSSProperties}
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300/90">
                {siteConfig.availability}
              </span>
            </div>

            <h1
              className="rise mt-6 font-display text-[3.2rem] font-semibold leading-[0.94] tracking-[-0.04em] text-foreground sm:text-7xl lg:text-[5.2rem] xl:text-[5.8rem]"
              style={{ "--delay": "100ms" } as CSSProperties}
            >
              <span className="mb-3 block font-mono text-[11px] font-normal uppercase tracking-[0.34em] text-muted">
                Hello, I&apos;m
              </span>
              {siteConfig.firstName}{" "}
              <span className="text-gradient">{siteConfig.lastName}</span>
            </h1>

            <div
              className="rise mt-5 flex items-center gap-3"
              style={{ "--delay": "180ms" } as CSSProperties}
            >
              <span
                aria-hidden="true"
                className="h-px w-8 bg-gradient-to-r from-accent to-transparent"
              />
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-accent sm:text-xs">
                <RoleRotator roles={siteConfig.roles} />
              </p>
            </div>

            <p
              className="rise mt-6 max-w-xl text-[15.5px] leading-relaxed text-muted sm:text-lg"
              style={{ "--delay": "240ms" } as CSSProperties}
            >
              {siteConfig.heroIntro}
            </p>

            <div
              className="rise mt-8 flex flex-wrap items-center gap-3"
              style={{ "--delay": "300ms" } as CSSProperties}
            >
              <a
                href={siteConfig.resumeUrl}
                download
                className={buttonStyles({ size: "lg" })}
              >
                Download resume
                <Download className="size-4" aria-hidden="true" />
              </a>
              <Link
                href="/#projects"
                className={buttonStyles({ variant: "secondary", size: "lg" })}
              >
                View my work
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <div
              className="rise mt-8 flex flex-wrap items-center gap-x-4 gap-y-3"
              style={{ "--delay": "360ms" } as CSSProperties}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
                Find me
              </span>
              <span aria-hidden="true" className="h-px w-6 bg-line" />
              <SocialLinks />
            </div>

            <dl
              className="rise mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-6"
              style={{ "--delay": "420ms" } as CSSProperties}
            >
              {siteConfig.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {stat.value}
                  </dd>
                  <p
                    aria-hidden="true"
                    className="mt-1 text-[11px] leading-snug text-muted"
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>

          <div
            className="rise relative mx-auto w-full max-w-[340px] pb-16 sm:max-w-[400px] lg:max-w-[430px]"
            style={{ "--delay": "260ms" } as CSSProperties}
          >
            <div
              aria-hidden="true"
              className="animate-drift absolute -inset-6 rounded-[3rem] bg-[conic-gradient(from_120deg,rgba(94,234,212,0.32),rgba(129,140,248,0.16),rgba(192,132,252,0.28),rgba(94,234,212,0.32))] opacity-70 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2.75rem] border border-dashed border-white/10"
            />

            <div className="relative rounded-[2.25rem] border border-line bg-surface/90 p-2.5 shadow-[0_50px_120px_-45px_rgba(0,0,0,0.95)] backdrop-blur-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem]">
                <Image
                  src={siteConfig.photo}
                  alt={siteConfig.photoAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 430px, (min-width: 640px) 400px, 340px"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#05070d]/75 via-transparent to-[#05070d]/10"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <div>
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.26em] text-accent/80">
                      Based in
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-foreground/90">
                      <MapPin className="size-3.5 text-accent" aria-hidden="true" />
                      {siteConfig.location}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                    {siteConfig.timezone}
                  </span>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="animate-float absolute -left-3 top-14 flex items-center gap-2 rounded-2xl border border-line bg-[#0a0f19]/90 px-3 py-2 shadow-xl backdrop-blur-md sm:-left-6"
            >
              <TechIcon name="react" className="size-4 text-accent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/80">
                React
              </span>
            </div>

            <div
              aria-hidden="true"
              className="animate-float-slow absolute -right-3 top-1/3 flex items-center gap-2 rounded-2xl border border-line bg-[#0a0f19]/90 px-3 py-2 shadow-xl backdrop-blur-md sm:-right-6"
            >
              <TechIcon name="typescript" className="size-4 text-accent-2" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/80">
                TypeScript
              </span>
            </div>

            <div className="absolute bottom-0 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-line bg-[#080d16]/95 p-4 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-md">
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-xs font-medium text-foreground">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-emerald-400"
                  />
                  Currently building
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                  Open to work
                </span>
              </div>
              <p className="mt-2 font-mono text-[10px] leading-relaxed text-muted">
                Design systems, product interfaces, and fast Next.js apps.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 hidden items-center gap-3 lg:flex">
          <span className="font-mono text-[9.5px] uppercase tracking-[0.3em] text-muted">
            Scroll to explore
          </span>
          <span className="h-9 w-px bg-gradient-to-b from-accent/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
