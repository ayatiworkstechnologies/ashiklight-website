"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sofa, UtensilsCrossed, BedDouble, Layers, Sun, Flower2 } from "lucide-react";

export default function ShopBySpace() {
  const [activeSpace, setActiveSpace] = useState("living-room");

  const spaces = [
    {
      id: "living-room",
      name: "Living Room",
      icon: Sofa,
      image: "/assets/chandeliers/Luxury Floral Crystal Chandelier.webp",
      href: "/chandeliers",
    },
    {
      id: "dining-room",
      name: "Dining Room",
      icon: UtensilsCrossed,
      image: "/assets/chandeliers/Rectangular Amber Crystal Island Pendant Light.webp",
      href: "/wall-pendant-lights",
    },
    {
      id: "bedroom",
      name: "Bedroom",
      icon: BedDouble,
      image: "/assets/Wall & Pendant Lights/Amber Glass Halo Wall Sconce.webp",
      href: "/wall-pendant-lights",
    },
    {
      id: "staircase",
      name: "Staircase",
      icon: Layers,
      image: "/assets/High Ceiling Chandeliers/Crystal Raindrop High-Ceiling Chandelier.webp",
      href: "/high-ceiling-chandeliers",
    },
    {
      id: "balcony",
      name: "Balcony",
      icon: Sun,
      image: "/assets/Outdoor Light Catalog/Up Down Narrow Wall Light.webp",
      href: "/outdoor-lights",
    },
    {
      id: "garden",
      name: "Garden",
      icon: Flower2,
      image: "/assets/Outdoor Light Catalog/Spike Spotlight.webp",
      href: "/outdoor-lights",
    },
  ];

  return (
    <section id="shop-by-space" className="py-16 lg:py-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1A1813] tracking-tight">
                Shop by Space
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-light mt-3 leading-relaxed">
                Find the perfect light for every corner of your home.
              </p>
            </div>

            <Link
              href="/#collections"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#B8860B] hover:bg-[#a3722a] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <span>Explore All Spaces</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right 6 Cards Grid matching reference image */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {spaces.map((space) => {
              const IconComp = space.icon;
              const isActive = activeSpace === space.id;
              return (
                <Link
                  key={space.id}
                  href={space.href}
                  onClick={() => setActiveSpace(space.id)}
                  className={`group bg-white rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-[#B8860B] ring-2 ring-[#B8860B]/20 shadow-md"
                      : "border-[#EAE3D2] hover:border-[#B8860B]/60 hover:shadow-md"
                  }`}
                >
                  {/* Top Photo Frame */}
                  <div className="aspect-4/3 overflow-hidden bg-slate-100 relative">
                    <Image
                      src={space.image}
                      alt={space.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                  </div>

                  {/* Bottom Icon + Label Card */}
                  <div className="p-3 text-center bg-white space-y-1">
                    <div className="w-8 h-8 mx-auto rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="block text-xs font-semibold text-slate-800 group-hover:text-[#B8860B] transition-colors">
                      {space.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
