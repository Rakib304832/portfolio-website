import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { buttonStyles } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute left-1/2 top-1/4 size-[30rem] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[130px]" />
        <div className="absolute bottom-0 right-0 size-[24rem] rounded-full bg-accent-2/[0.08] blur-[120px]" />
      </div>

      <div className="shell flex flex-col items-center text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-accent">
          404 / Page not found
        </p>

        <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-6xl">
          This page slipped{" "}
          <span className="text-gradient">through the cracks</span>.
        </h1>

        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
          The link may be old, the page may have moved, or I may have shipped a
          little too confidently. Either way, the good stuff is one click away.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className={buttonStyles({ size: "lg" })}>
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back home
          </Link>
          <Link
            href="/#projects"
            className={buttonStyles({ variant: "secondary", size: "lg" })}
          >
            See the work
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-16 font-mono text-[9.5px] uppercase tracking-[0.24em] text-muted/60">
          Rakib Hasan · Frontend Developer
        </p>
      </div>
    </section>
  );
}
