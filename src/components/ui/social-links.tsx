import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

import { SocialGlyph } from "./icons";

export function SocialLinks({
  className,
  showHandles = false,
}: {
  className?: string;
  showHandles?: boolean;
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {siteConfig.socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.label} — ${social.handle}`}
            title={social.label}
            className={cn(
              "group inline-flex items-center justify-center border border-line bg-white/[0.02] text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent/[0.06] hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              showHandles
                ? "h-10 gap-2 rounded-full px-3.5 text-xs"
                : "size-10 rounded-full",
            )}
          >
            <SocialGlyph name={social.icon} className="size-[17px]" />
            {showHandles ? (
              <span className="font-mono text-[11px] tracking-wide">
                {social.handle}
              </span>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
