"use client";

import { useEffect, useState } from "react";

export function RoleRotator({ roles }: { roles: readonly string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (roles.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [roles.length]);

  return (
    <span key={index} className="role-swap">
      {roles[index]}
    </span>
  );
}
