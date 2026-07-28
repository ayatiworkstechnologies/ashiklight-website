"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, SlidersHorizontal, UserCheck, Wrench } from "lucide-react";
import ProductModal, { ProductModalData } from "./ProductModal";

interface FeaturedBannerProps {
  onOpenConsultation?: () => void;
}

export default function FeaturedBanner({ onOpenConsultation }: FeaturedBannerProps) {
  const [modalData, setModalData] = useState<ProductModalData | null>(null);

  const openChandelierModal = () => {
    setModalData({
      title: "Statement High-Ceiling Chandeliers",
      category: "Double-Height & Foyer Collection",
      image:
        "/assets/High Ceiling Chandeliers/Crystal Raindrop High-Ceiling Chandelier.webp",
      description:
        "Engineered specifically for stairwells, double-height foyers, and villa living rooms. Includes custom cable drop lengths, CAD wiring layouts, and structural ceiling plate load calculations.",
      specs: [
        { label: "Height Drop", value: "Custom 6ft to 25ft" },
        { label: "Material", value: "K9 Optical Crystal" },
        { label: "Customization", value: "Size, Color & Finish" },
        { label: "Installation", value: "Full Team Support" },
      ],
    });
  };

  return (
    <>
      <section id="featured" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-[#FAF6F0] rounded-3xl overflow-hidden border border-[#EAE3D2] grid grid-cols-1 lg:grid-cols-12 shadow-sm">
            {/* Left High-Ceiling Chandelier Image */}
            <div
              onClick={openChandelierModal}
              className="lg:col-span-6 relative min-h-[380px] lg:min-h-[520px] bg-slate-100 overflow-hidden cursor-pointer group"
            >
              <Image
                src="/assets/High Ceiling Chandeliers/Crystal Raindrop High-Ceiling Chandelier.webp"
                alt="High Ceiling Grand Chandelier"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 shadow-md">
                  Click to Explore Specifications
                </span>
              </div>
            </div>

            {/* Right Detailed Description & Value Badges */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B8860B]">
                <span className="w-2 h-2 rounded-full bg-[#B8860B]" />
                FEATURED COLLECTION
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1813] leading-tight">
                Designed for <br className="hidden sm:inline" />
                dramatic spaces.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
                Explore statement chandeliers created for double-height areas,
                staircases, foyers, villas and premium interiors.
              </p>

              {/* 3 Interactive Feature Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div
                  onClick={openChandelierModal}
                  className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-[#EAE3D2] shadow-2xs hover:border-[#B8860B] transition cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FAF6F0] text-[#B8860B] flex items-center justify-center shrink-0">
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800">
                    Custom Sizes
                  </span>
                </div>

                <div
                  onClick={openChandelierModal}
                  className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-[#EAE3D2] shadow-2xs hover:border-[#B8860B] transition cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FAF6F0] text-[#B8860B] flex items-center justify-center shrink-0">
                    <UserCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800">
                    Expert Guidance
                  </span>
                </div>

                <div
                  onClick={openChandelierModal}
                  className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-[#EAE3D2] shadow-2xs hover:border-[#B8860B] transition cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FAF6F0] text-[#B8860B] flex items-center justify-center shrink-0">
                    <Wrench className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800">
                    Installation Support
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="/high-ceiling-chandeliers"
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#B8860B] hover:bg-[#a3722a] text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Explore High-Ceiling Chandeliers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lightbox */}
      <ProductModal
        product={modalData}
        onClose={() => setModalData(null)}
        onOpenConsultation={() => {
          setModalData(null);
          if (onOpenConsultation) onOpenConsultation();
        }}
      />
    </>
  );
}
