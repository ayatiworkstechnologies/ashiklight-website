"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye } from "lucide-react";
import ProductModal, { ProductModalData } from "./ProductModal";

interface CollectionsProps {
  onOpenConsultation?: () => void;
}

export default function Collections({ onOpenConsultation }: CollectionsProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductModalData | null>(null);

  const collections = [
    {
      id: "chandeliers",
      href: "/chandeliers",
      name: "Chandeliers",
      image: "/assets/chandeliers/Luxury Floral Crystal Chandelier.webp",
      desc: "Statement grand crystal & brass chandeliers engineered for luxury dining areas and living rooms.",
    },
    {
      id: "high-ceiling-chandeliers",
      href: "/high-ceiling-chandeliers",
      name: "High Ceiling Chandeliers",
      image: "/assets/High Ceiling Chandeliers/Crystal Raindrop High-Ceiling Chandelier.webp",
      desc: "Custom multi-tier and long cable drop chandeliers created for double-height foyers, staircases and villas.",
    },
    {
      id: "indoor-lights",
      href: "/indoor-lights",
      name: "Indoor Lights",
      image: "/assets/Indoor light catalog/ArcGlow Minimal LED Wall Light.webp",
      desc: "Warm ceiling flush mounts, surface downlights and cove luminaires for modern bedrooms and halls.",
    },
    {
      id: "decorative-fans",
      href: "/decorative-fans",
      name: "Decorative Fan",
      image: "/assets/Decorative Fan/Crystal Dome Retractable Blade Ceiling Fan.webp",
      desc: "Whisper-quiet BLDC motor ceiling fans with natural wood blades, LED light ring, and smart remote.",
    },
    {
      id: "wall-pendant-lights",
      href: "/wall-pendant-lights",
      name: "Wall & Pendant Lights",
      image: "/assets/Wall & Pendant Lights/Amber Glass Halo Wall Sconce.webp",
      desc: "Artisanal blown-glass island pendants and elegant brass wall sconces for ambient bedside & dining accent.",
    },
    {
      id: "led-mirrors",
      href: "/led-mirrors",
      name: "LED Mirror",
      image: "/assets/Led Mirror/Round Halo LED Bathroom Mirror.webp",
      desc: "Frameless vanity LED mirrors with touch dimming, anti-fog demister pads, and dual warm/white lighting halo.",
    },
    {
      id: "architectural-lights",
      href: "/architectural-lights",
      name: "Architectural Lights",
      image: "/assets/Architecture Light/Circular Magnetic Power Track Series.webp",
      desc: "Magnetic track spotlights, trimless recessed downlights, glare-free optics, and aluminum linear channels.",
    },
    {
      id: "outdoor-lights",
      href: "/outdoor-lights",
      name: "Outdoor Lights",
      image: "/assets/Outdoor Light Catalog/Spike Spotlight.webp",
      desc: "Weatherproof IP65 outdoor wall sconces, garden bollards, spike spotlights, and gate lamps.",
    },
  ];

  return (
    <>
      <section id="collections" className="py-16 lg:py-24 bg-[#FAF8F5]">
        <div className="max-[#FAF8F5] max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Title Block */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3 animate-fade-in-up">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1A1813] tracking-tight">
              Explore Our Collections
            </h2>
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1px] w-8 bg-[#B8860B]/40"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] animate-ping"></span>
              <span className="h-[1px] w-8 bg-[#B8860B]/40"></span>
            </div>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              From statement chandeliers to subtle architectural lighting, discover
              solutions for every space.
            </p>
          </div>

          {/* 8 Cards Grid with Silky Smooth Hover Lift and Image Zoom */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {collections.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group block bg-white rounded-2xl overflow-hidden border border-[#EAE3D2] shadow-2xs card-hover-lift cursor-pointer"
              >
                {/* Image Container with Zoom & Floating Quick Badge */}
                <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-3.5 h-3.5 text-[#B8860B]" /> View Collection
                    </span>
                  </div>
                </div>

                {/* Text Footer */}
                <div className="p-4 text-center space-y-1 bg-white border-t border-slate-100">
                  <h3 className="font-semibold text-sm sm:text-base text-slate-900 group-hover:text-[#B8860B] transition-colors">
                    {item.name}
                  </h3>
                  <div className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-[#B8860B] transition-colors">
                    <span>Explore Catalog</span>
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
