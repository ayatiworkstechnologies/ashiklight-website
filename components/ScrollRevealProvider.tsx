"use client";

import { useScrollReveal } from "./useScrollReveal";

/**
 * Client-side wrapper that initializes the scroll reveal
 * IntersectionObserver system. Renders nothing visible.
 */
export default function ScrollRevealProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useScrollReveal();
  return <>{children}</>;
}
