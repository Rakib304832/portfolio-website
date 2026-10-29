import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { buttonStyles } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import { Reveal } from "@/components/ui/reveal";
import { SocialLinks } from "@/components/ui/social-links";
import { contactChannels, siteConfig } from "@/content/site";

const channelIcons = {
  email: Mail,
  phone: Phone,
  whatsapp: MessageCircle,
};

const channelHints = {
  email: "Opens your mail app",
  phone: "Opens your dialer",
  whatsapp: "Opens WhatsApp",
};

export function Contact() {
  return (
    <section id="contact" className="section relative">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-surface/50">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10"
            >
              <div className="absolute inset-0 bg-grid opacity-60" />
              <div className="absolute -left-24 -top-24 size-80 rounded-full bg-accent/[0.12] blur-[100px]" />
              <div className="absolute -right-20 bottom-0 size-80 rounded-full bg-accent-2/[0.12] blur-[110px]" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            <div className="grid gap-12 p-7 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:p-14">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em]">
                  <span className="text-accent">06</span>
                  <span className="h-px w-10 bg-line" aria-hidden="true" />
                  <span className="text-muted">Contact</span>
                </div>

                <h2 className="mt-6 font-display text-[2.15rem] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.1rem]">
                  Have something{" "}
                  <span className="text-gradient">worth building</span>?
                </h2>

                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
                  I am currently open to full-stack roles and select freelance
                  projects. Tell me what you are making, where it is stuck, and
                  what a win looks like — I will reply within one working day.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className={buttonStyles({ size: "lg" })}
                  >
                    Email me
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                  <a
                    href={siteConfig.resumeUrl}
                    download
                    className={buttonStyles({ variant: "secondary", size: "lg" })}
                  >
                    Grab my resume
                  </a>
                </div>

                <div className="mt-auto pt-10">
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.28em] text-muted">
                    Elsewhere
                  </p>
                  <SocialLinks className="mt-3" showHandles />

                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11.5px] text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3.5 text-accent/70" aria-hidden="true" />
                      {siteConfig.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-emerald-400"
                      />
                      {siteConfig.timezone} · usually replies fast
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <ul className="space-y-3">
                  {contactChannels.map((channel) => {
                    const Icon = channelIcons[channel.id];

                    return (
                      <li
                        key={channel.id}
                        className="group flex items-center gap-4 rounded-2xl border border-line bg-[#080d16]/70 p-4 transition-colors duration-300 hover:border-accent/25 sm:p-5"
                      >
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-white/[0.03] text-accent">
                          <Icon className="size-[18px]" aria-hidden="true" />
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline justify-between gap-3">
                            <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-muted">
                              {channel.label}
                            </p>
                            <span className="hidden font-mono text-[8.5px] uppercase tracking-[0.14em] text-muted/60 sm:block">
                              {channelHints[channel.id]}
                            </span>
                          </div>
                          <a
                            href={channel.href}
                            target={channel.id === "whatsapp" ? "_blank" : undefined}
                            rel={
                              channel.id === "whatsapp"
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="mt-1 block truncate rounded-sm text-[14.5px] font-medium text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                          >
                            {channel.value}
                          </a>
                          <p className="mt-1 text-[11.5px] leading-snug text-muted">
                            {channel.description}
                          </p>
                        </div>

                        <CopyButton
                          value={channel.value}
                          label={channel.label}
                          className="size-9"
                        />
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-dashed border-line bg-white/[0.015] p-4">
                  <span
                    aria-hidden="true"
                    className="mt-1 size-1.5 shrink-0 rounded-full bg-emerald-400"
                  />
                  <p className="text-[12px] leading-relaxed text-muted">
                    Prefer a quick call? Send a WhatsApp message with two or three
                    time slots and I will confirm the one that works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
