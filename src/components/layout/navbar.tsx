"use client";

import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";

import { buttonStyles } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/social-links";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);

      if (!isHome) {
        setActive("");
        return;
      }

      let current = "";
      for (const item of siteConfig.nav) {
        const element = document.getElementById(item.id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= 160) {
          current = item.id;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [isHome, pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", onDesktop);

    const panel = panelRef.current;
    const firstFocusable = panel?.querySelector<HTMLElement>(focusableSelector);
    firstFocusable?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const items = Array.from(
        panel.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter((element) => element.offsetParent !== null);

      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-line bg-[#05070d]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="shell relative z-50 flex h-16 items-center justify-between gap-4 sm:h-[72px]"
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label={`${siteConfig.name} — home`}
          className="group flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          <span className="grid size-9 place-items-center rounded-xl border border-accent/25 bg-accent/[0.07] font-display text-sm font-bold text-accent shadow-[0_0_24px_-8px_rgba(94,234,212,0.55)] transition-transform duration-300 group-hover:-rotate-6">
            R
          </span>
          <span className="hidden text-[15px] font-semibold tracking-tight text-foreground sm:block">
            rakib<span className="text-accent">.dev</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {siteConfig.nav.map((item) => {
            const isActive = isHome && active === item.id;
            return (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "link-underline rounded-full px-3.5 py-2 text-[13.5px] transition-colors duration-300",
                    isActive
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <a
              href={siteConfig.resumeUrl}
              download
              className={buttonStyles({ variant: "secondary", size: "sm" })}
            >
              Resume
              <Download className="size-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="hidden lg:block">
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className={buttonStyles({ variant: "primary", size: "sm" })}
            >
              Let&apos;s talk
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-line bg-white/[0.02] text-foreground transition-colors hover:border-accent/30 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-40 flex h-dvh flex-col overflow-y-auto bg-[#05070d] px-5 pb-10 pt-24 sm:px-8 lg:hidden"
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
          >
            <div className="absolute -left-24 top-10 size-72 rounded-full bg-accent/10 blur-[80px]" />
            <div className="absolute -right-20 bottom-20 size-72 rounded-full bg-accent-2/15 blur-[90px]" />
          </div>

          <nav aria-label="Mobile" className="flex flex-col">
            {siteConfig.nav.map((item, index) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                onClick={() => setOpen(false)}
                className="menu-in group flex items-center justify-between border-b border-line py-4"
                style={{ "--delay": `${80 + index * 45}ms` } as CSSProperties}
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] text-accent/70">
                    0{index + 1}
                  </span>
                  <span className="font-display text-3xl font-medium tracking-tight text-foreground transition-colors group-hover:text-accent">
                    {item.label}
                  </span>
                </span>
                <ArrowUpRight className="size-5 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <a
              href={siteConfig.resumeUrl}
              download
              className={buttonStyles({ size: "md" })}
            >
              Download resume
              <Download className="size-4" aria-hidden="true" />
            </a>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className={buttonStyles({ variant: "secondary", size: "md" })}
            >
              Let&apos;s talk
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-auto border-t border-line pt-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                  Find me online
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 inline-block text-sm text-foreground"
                >
                  {siteConfig.email}
                </a>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
