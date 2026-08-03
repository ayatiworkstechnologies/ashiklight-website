"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ProductModal, { ProductModalData } from "./ProductModal";
import { VectorCornerMotif } from "./VectorAccents";

const collections = [
  {
    id: "chandeliers",
    name: "Statement Chandeliers",
    href: "/chandeliers",
    image: "/assets/chandeliers/Luxury Crystal Leaf Branch Chandelier.webp",
  },
  {
    id: "high-ceiling",
    name: "High Ceiling Chandeliers",
    href: "/high-ceiling-chandeliers",
    image: "/assets/High Ceiling Chandeliers/Butterfly Crystal Disc Cascade Chandelier.webp",
  },
  {
    id: "fans",
    name: "BLDC Decorative Fans",
    href: "/decorative-fans",
    image: "/assets/Decorative Fan/Luxury Crystal Waterfall Retractable Blade Ceiling Fan.webp",
  },
  {
    id: "wall-pendant",
    name: "Wall & Pendant Lights",
    href: "/wall-pendant-lights",
    image: "/assets/Wall & Pendant Lights/Hanging Crystal Drum Wall Sconce.webp",
  },
  {
    id: "led-mirrors",
    name: "Vanity LED Mirrors",
    href: "/led-mirrors",
    image: "/assets/Led Mirror/Round Ring LED Vanity Mirror.webp",
  },
  {
    id: "indoor-lights",
    name: "Architectural Indoor Lights",
    href: "/indoor-lights",
    image: "/assets/Indoor light catalog/Eclipse Selective COB Downlight.webp",
  },
  {
    id: "architectural",
    name: "Magnetic Track & Profiles",
    href: "/architectural-lights",
    image: "/assets/Architecture Light/Circular Magnetic Power Track Series.webp",
  },
  {
    id: "outdoor-lights",
    name: "IP65 Outdoor & Facade",
    href: "/outdoor-lights",
    image: "/assets/Outdoor Light Catalog/Up Down Narrow Wall Light.webp",
  },
];

interface CollectionsProps {
  onOpenConsultation?: () => void;
}

export default function Collections({
  onOpenConsultation,
}: CollectionsProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductModalData | null>(null);

  return (
    <>
      <section
        id="collections"
        className="py-16 sm:py-20 bg-[#07101F] border-b border-white/15 relative overflow-hidden"
      >
        {/* Subtle Decorative Accents */}
        <VectorCornerMotif position="top-right" />
        <VectorCornerMotif position="bottom-left" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Title Block — scroll reveal */}
          <div
            className="text-center max-w-2xl mx-auto mb-12 space-y-3"
            data-reveal="up"
          >
            <div className="inline-flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-[0.2em]">
              <span className="w-6 h-px bg-white/30" />
              OUR COLLECTIONS
              <span className="w-6 h-px bg-white/30" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Explore Our Collections
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-light">
              From statement chandeliers to subtle architectural lighting, discover
              solutions for every space.
            </p>
          </div>

          {/* 8 Cards Grid with staggered scroll reveal */}
          <div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6"
            data-reveal-stagger
          >
            {collections.map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                data-reveal="up"
                data-reveal-delay={String(index * 80)}
                className="group block bg-[#0D1E35] rounded-2xl overflow-hidden border border-white/15 shadow-2xs card-hover-lift hover-border-glow cursor-pointer"
              >
                {/* Image Container with Zoom & Floating Quick Badge */}
                <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold text-slate-900 shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-slate-900" /> Explore
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 text-center bg-[#0D1E35] border-t border-white/15">
                  <h3 className="font-semibold text-xs sm:text-base text-white group-hover:text-white transition-colors duration-300 line-clamp-1">
                    {item.name}
                  </h3>
                  <div className="mt-2 pt-2 border-t border-white/10 inline-flex items-center justify-center gap-1 text-[11px] font-bold text-white/90 opacity-80 group-hover:opacity-100 transition-opacity">
                    <span>View Range</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Lightbox Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenConsultation={() => {
          setSelectedProduct(null);
          if (onOpenConsultation) onOpenConsultation();
        }}
      />
    </>
  );
}
