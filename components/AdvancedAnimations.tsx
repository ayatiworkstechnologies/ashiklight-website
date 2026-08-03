"use client";

import React, { useEffect, useRef } from "react";

export default function AdvancedAnimations() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run mouse tracker on devices with fine pointer (mouse)
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update CSS variables for button shimmer effects
      const buttons = document.querySelectorAll(".btn-shimmer");
      buttons.forEach((btn) => {
        const rect = (btn as HTMLElement).getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        (btn as HTMLElement).style.setProperty("--mouse-x", `${x}%`);
        (btn as HTMLElement).style.setProperty("--mouse-y", `${y}%`);
      });
    };

    // Smooth lerp for spotlight
    const animateSpotlight = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      }

      rafId = requestAnimationFrame(animateSpotlight);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animateSpotlight);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="hidden lg:block fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-radial from-[#D4A017]/8 via-[#D4A017]/2 to-transparent pointer-events-none z-30 transition-opacity duration-500 blur-2xl opacity-60"
      aria-hidden="true"
    />
  );
}
