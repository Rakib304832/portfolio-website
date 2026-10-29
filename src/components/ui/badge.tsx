import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "neutral",
}: {
  children: ReactNode;
  className?: string;
  tone?: "neutral" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em]",
        tone === "accent"
          ? "border-accent/25 bg-accent/[0.08] text-accent"
          : "border-line bg-white/[0.03] text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
