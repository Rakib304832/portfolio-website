import { ArrowUp } from "lucide-react";
import Link from "next/link";

import { SocialLinks } from "@/components/ui/social-links";
import { siteConfig } from "@/content/site";

export function Footer() {
  // Kept static so the page can be fully prerendered with Cache Components.
  const year = 2026;

  return (
    <footer className="relative border-t border-line bg-[#04060b]">
      <div className="shell py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label={`${siteConfig.name} — home`}
            >
              <span className="grid size-9 place-items-center rounded-xl border border-accent/25 bg-accent/[0.07] font-display text-sm font-bold text-accent">
                R
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-foreground">
                rakib<span className="text-accent">.dev</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>

            <SocialLinks className="mt-5" />
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
              Navigate
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-1">
              {siteConfig.nav.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/#${item.id}`}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-muted transition-colors hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="text-muted transition-colors hover:text-accent"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-muted">{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>

          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em]">
            Built with Next.js, Tailwind CSS &amp; too much coffee
          </p>

          <a
            href="#top"
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUp
              className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
