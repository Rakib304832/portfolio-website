import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em]",
          align === "center" && "justify-center",
        )}
      >
        <span className="text-accent">{index}</span>
        <span className="h-px w-10 bg-line" aria-hidden="true" />
        <span className="text-muted">{eyebrow}</span>
      </div>

      <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
