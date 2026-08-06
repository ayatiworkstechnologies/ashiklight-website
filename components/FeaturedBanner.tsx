"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, MoveHorizontal } from "lucide-react";

interface FeaturedBannerProps {
  onOpenConsultation?: () => void;
}

interface BeforeAfterCard {
  id: number;
  title: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}

const cards: BeforeAfterCard[] = [
  {
    id: 1,
    title: "Villa Facade Illumination",
    beforeSrc: "/assets/be.webp",
    afterSrc: "/assets/af.webp",
    beforeAlt: "Villa Facade Before Lighting",
    afterAlt: "Villa Facade After Lighting",
  },
  {
    id: 2,
    title: "Living Room Transformation",
    beforeSrc: "/assets/be-1.png",
    afterSrc: "/assets/af-1.png",
    beforeAlt: "Living Room Before Lighting",
    afterAlt: "Living Room After Lighting",
  },
];

/* ── Single draggable before/after card ── */
function BeforeAfterSlider({ card }: { card: BeforeAfterCard }) {
  const [sliderPos, setSliderPos] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const touchStartPos = useRef<{ x: number; y: number } | null>(null);
  const isHorizontalDrag = useRef<boolean | null>(null);

  const calcPos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(95, Math.max(5, raw)));
  }, []);

  // Mouse
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent) => calcPos(e.clientX);
    const onUp = () => setIsDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [isDragging, calcPos]);

  // Touch Dragging — Smart direction check to allow normal vertical page scrolling
  const onTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartPos.current = { x: touch.clientX, y: touch.clientY };
    isHorizontalDrag.current = null;
    setIsDragging(true);
  };

  useEffect(() => {
    if (!isDragging) return;

    const onMove = (e: TouchEvent) => {
      if (!touchStartPos.current || !e.touches[0]) return;
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const deltaX = Math.abs(currentX - touchStartPos.current.x);
      const deltaY = Math.abs(currentY - touchStartPos.current.y);

      // Determine user intent on first movement threshold
      if (isHorizontalDrag.current === null) {
        if (deltaX > 6 || deltaY > 6) {
          isHorizontalDrag.current = deltaX > deltaY;
        }
      }

      // Only drag slider and prevent scroll if movement is horizontal
      if (isHorizontalDrag.current === true) {
        if (e.cancelable) e.preventDefault();
        calcPos(currentX);
      }
    };

    const onEnd = () => {
      setIsDragging(false);
      touchStartPos.current = null;
      isHorizontalDrag.current = null;
    };

    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [isDragging, calcPos]);

  return (
    <div className="flex flex-col gap-0 group">
      {/* Image Comparison Box */}
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl cursor-col-resize select-none"
        style={{ aspectRatio: "4/3" }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* AFTER image (full background) */}
        <img
          src={card.afterSrc}
          alt={card.afterAlt}
          className="absolute inset-0 w-full h-full object-cover object-center"
          draggable={false}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/assets/af.png";
          }}
        />

        {/* BEFORE image (clipped to left side) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={card.beforeSrc}
            alt={card.beforeAlt}
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: "none" }}
            draggable={false}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/assets/be.png";
            }}
          />
        </div>

        {/* Gold divider line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-[#D4AF37] z-20 shadow-[0_0_12px_2px_rgba(212,175,55,0.6)]"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        />

        {/* Drag pill */}
        <div
          className="absolute top-1/2 z-30 -translate-y-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-2 bg-[#0E0E0E] border border-[#D4AF37]/50 rounded-full shadow-xl cursor-grab active:cursor-grabbing select-none"
          style={{ left: `${sliderPos}%` }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        >
          <MoveHorizontal className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase">
            Drag
          </span>
        </div>

        {/* BEFORE label */}
        <div className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-[#050505]/90 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
          Before
        </div>

        {/* AFTER label */}
        <div className="absolute top-4 right-4 z-10 px-2.5 py-1 bg-[#050505]/90 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
          After
        </div>
      </div>

      {/* Card footer */}
      <div className="flex items-center gap-3 pt-4 pb-1">
        <span className="text-xs font-bold text-[#D4AF37] tabular-nums">
          {String(card.id).padStart(2, "0")}
        </span>
        <span className="flex-1 h-px bg-[#D4AF37]/30" />
        <h3 className="font-serif text-base sm:text-lg font-semibold text-white">
          {card.title}
        </h3>
      </div>
    </div>
  );
}

/* ── Main section ── */
export default function FeaturedBanner({
  onOpenConsultation,
}: FeaturedBannerProps) {
  return (
    <section
      id="featured"
      className="py-16 lg:py-24 bg-[#050505] relative overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
          data-reveal="up"
        >
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">
            <span className="w-6 h-px bg-[#D4AF37]/40" />
            Transformations
            <span className="w-6 h-px bg-[#D4AF37]/40" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Before &amp; After Inspiration
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Drag the slider to see how the right lighting transforms ordinary
            spaces into extraordinary luxury experiences.
          </p>
        </div>

        {/* 2×2 Before/After Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((card, i) => (
            <div
              key={card.id}
              data-reveal="up"
              data-reveal-delay={String(i * 150)}
            >
              <BeforeAfterSlider card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
