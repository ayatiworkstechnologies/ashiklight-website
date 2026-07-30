"use client";

import { useEffect } from "react";

/**
 * Lightweight scroll-reveal hook using IntersectionObserver.
 * Observes all elements with [data-reveal] and adds .revealed
 * when they enter the viewport. One-shot trigger only.
 * Also sets --reveal-index CSS variable on stagger children.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Instantly reveal everything
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        el.classList.add("revealed");
      });
      return;
    }

    // Set stagger indices on children
    document.querySelectorAll("[data-reveal-stagger]").forEach((parent) => {
      const children = parent.querySelectorAll("[data-reveal]");
      children.forEach((child, i) => {
        (child as HTMLElement).style.setProperty(
          "--reveal-index",
          String(i)
        );
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay;

            if (delay) {
              setTimeout(() => {
                el.classList.add("revealed");
              }, parseInt(delay, 10));
            } else {
              el.classList.add("revealed");
            }

            // One-shot: stop observing after reveal
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    // Observe all reveal elements
    const elements = document.querySelectorAll("[data-reveal]");
    elements.forEach((el) => observer.observe(el));

    // Re-observe on DOM mutations (for dynamic content)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.hasAttribute("data-reveal")) {
              observer.observe(node);
            }
            node.querySelectorAll("[data-reveal]").forEach((child) => {
              observer.observe(child);
            });
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
