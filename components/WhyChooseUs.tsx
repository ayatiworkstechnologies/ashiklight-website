"use client";

import React, { useState } from "react";
import { Award, ShieldCheck, UserCheck, Wrench, Sparkles, Truck, SlidersHorizontal, ArrowRight } from "lucide-react";
import ProductModal, { ProductModalData } from "./ProductModal";
import { VectorDiamondGrid, VectorLightRays } from "@/components/VectorAccents";

interface WhyChooseUsProps {
  onOpenConsultation?: () => void;
}

export default function WhyChooseUs({ onOpenConsultation }: WhyChooseUsProps) {
  const [selectedModal, setSelectedModal] = useState<ProductModalData | null>(null);

  const pillars = [
    {
      id: "curated",
      title: "Handpicked Luxury Designs",
      desc: "Every chandelier, pendant and wall sconce is selected for optical clarity, premium K9 crystal purity, and solid brass construction.",
      icon: Sparkles,
      tag: "100% Authentic Quality",
    },
    {
      id: "custom",
      title: "Custom Size Engineering",
      desc: "Multi-tier and long cable drop chandeliers tailored to your foyer height with structural CAD load calculations.",
      icon: SlidersHorizontal,
      tag: "Custom Tailoring",
    },
    {
      id: "architect",
      title: "Expert Architectural Guidance",
      desc: "Free 1-on-1 consultation with certified lighting architects who calculate lux levels, beam angles, and color rendering.",
      icon: UserCheck,
      tag: "Free Consultation",
    },
    {
      id: "warranty",
      title: "3-Year Comprehensive Warranty",
      desc: "On-site warranty cover on all LED drivers, solid brass finishes, and structural components for total peace of mind.",
      icon: ShieldCheck,
      tag: "Complete Protection",
    },
    {
      id: "installation",
      title: "White-Glove Installation",
      desc: "Skilled technicians handle double-height ceiling mounting, scaffolding setup, dimming controls, and crystal assembly.",
      icon: Wrench,
      tag: "Turnkey Execution",
    },
    {
      id: "delivery",
      title: "Safe Multi-Layer Shipping",
      desc: "Custom timber crating and shock-absorbing foam packaging ensure 100% damage-free transit across South India.",
      icon: Truck,
      tag: "Transit Insured",
    },
  ];

  return (
    <>
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <VectorDiamondGrid className="opacity-[0.03]" />
        <VectorLightRays className="-bottom-20 -right-20 pointer-events-none hidden lg:block opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Title Block — scroll reveal */}
          <div
            className="text-center max-w-2xl mx-auto mb-16 space-y-3"
            data-reveal="up"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE3D2] text-[#B8860B] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Award className="w-4 h-4 text-[#B8860B]" />
              THE ASHIK LIGHTS DIFFERENCE
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1813]">
              Why Choose Ashik Lights
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
              Since 2016, our founder Mr. Abdul Hameed Ashik and our lighting team in Teynampet have personally guided thousands of homeowners, interior designers, and architects in choosing the right lights for every room.
            </p>
          </div>

          {/* 6 Value Pillar Cards — staggered cascade */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            data-reveal-stagger
          >
            {pillars.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  data-reveal="up"
                  data-reveal-delay={String(index * 100)}
                  onClick={() =>
                    setSelectedModal({
                      title: item.title,
                      category: item.tag,
                      image: "/assets/banner.webp",
                      description: `${item.title}: ${item.desc} Visit our flagship showroom at #313, Anna Salai, Teynampet, Chennai.`,
                      specs: [
                        { label: "Pillar", value: item.title },
                        { label: "Guarantee", value: item.tag },
                        { label: "Support", value: "3-Year On-Site" },
                        { label: "Location", value: "Teynampet Flagship, Chennai" },
                      ],
                    })
                  }
                  className="group bg-white rounded-3xl p-8 border border-[#EAE3D2] shadow-2xs hover-border-glow transition-all duration-400 transform hover:-translate-y-2 flex flex-col justify-between cursor-pointer relative overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#FAF6F0] text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white transition-all duration-400 flex items-center justify-center shadow-2xs group-hover:scale-110 group-hover:rotate-3">
                      <IconComp className="w-7 h-7" />
                    </div>

                    <div className="inline-block text-[11px] font-bold tracking-wider text-[#B8860B] uppercase bg-[#FAF6F0] px-2.5 py-1 rounded-md border border-[#EAE3D2]">
                      {item.tag}
                    </div>

                    <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-[#B8860B] transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-[#B8860B] transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ProductModal
        product={selectedModal}
        onClose={() => setSelectedModal(null)}
        onOpenConsultation={() => {
          setSelectedModal(null);
          if (onOpenConsultation) onOpenConsultation();
        }}
      />
    </>
  );
}
