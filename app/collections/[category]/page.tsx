"use client";

import React, { useState, useRef, use } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Filter,
  Sparkles,
  Award,
  Zap,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductModal from "@/components/ProductModal";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

const categoryConfigMap: Record<
  string,
  {
    title: string;
    tagline: string;
    desc: string;
    heroImage: string;
    badges: { text: string; icon: "award" | "zap" | "check" }[];
    subCategories: { id: string; label: string }[];
    products: { id: string; title: string; image: string }[];
  }
> = {
  chandeliers: {
    title: "Statement Chandeliers",
    tagline: "Precision-cut K9 crystals and solid brass armature.",
    desc: "Transform grand foyers, dining halls, and living spaces with luxury crystal chandeliers.",
    heroImage: "/assets/chandeliers/Luxury Crystal Leaf Branch Chandelier.webp",
    badges: [
      { text: "K9 Optical Crystal", icon: "award" },
      { text: "Dimmable LED Driver", icon: "zap" },
      { text: "3-Year Warranty", icon: "check" },
    ],
    subCategories: [
      { id: "all", label: "All Chandeliers" },
      { id: "crystal", label: "Crystal Cascades" },
      { id: "modern", label: "Modern Minimalist" },
    ],
    products: [
      { id: "ch-1", title: "Imperial K9 Crystal Chandelier", image: "/assets/chandeliers/Luxury Crystal Leaf Branch Chandelier.webp" },
      { id: "ch-2", title: "Foyer Double-Height Cascade", image: "/assets/High Ceiling Chandeliers/Butterfly Crystal Disc Cascade Chandelier.webp" },
    ],
  },
  "high-ceiling-chandeliers": {
    title: "High Ceiling Chandeliers",
    tagline: "Architectural cascades designed for double-height foyers.",
    desc: "Designed for grand ceiling heights (14ft - 30ft). Engineered with heavy-duty ceiling reinforcement.",
    heroImage: "/assets/High Ceiling Chandeliers/Butterfly Crystal Disc Cascade Chandelier.webp",
    badges: [
      { text: "Heavy Reinforced Base", icon: "award" },
      { text: "Height Customizable", icon: "zap" },
      { text: "On-Site Installation Support", icon: "check" },
    ],
    subCategories: [
      { id: "all", label: "All High Ceiling" },
      { id: "double-height", label: "Double-Height Spiral" },
    ],
    products: [
      { id: "hc-1", title: "Starlight Foyer Cascade Chandelier", image: "/assets/High Ceiling Chandeliers/Butterfly Crystal Disc Cascade Chandelier.webp" },
    ],
  },
};

const badgeIconMap = {
  award: Award,
  zap: Zap,
  check: CheckCircle2,
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const categoryKey = resolvedParams.category;

  const currentConfig = categoryConfigMap[categoryKey] || {
    title: categoryKey.replace(/-/g, " ").toUpperCase(),
    tagline: "Luxury lighting collections curated for modern homes.",
    desc: "Explore complete range of fixtures at Ashik Lights Chennai.",
    heroImage: "/assets/chandeliers/Luxury Crystal Leaf Branch Chandelier.webp",
    badges: [{ text: "Premium Quality", icon: "award" }],
    subCategories: [{ id: "all", label: "All Products" }],
    products: [
      { id: "p-1", title: "Luxury Lighting Fixture", image: "/assets/chandeliers/Luxury Crystal Leaf Branch Chandelier.webp" },
    ],
  };

  const [selectedSubCategory, setSelectedSubCategory] = useState("all");
  const [sortOption, setSortOption] = useState("popular");
  const [selectedProductModal, setSelectedProductModal] = useState<any>(null);
  const catalogRef = useRef<HTMLDivElement>(null);

  const handleSubCategoryChange = (id: string) => {
    setSelectedSubCategory(id);
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollRevealProvider>
      <main className="min-h-screen flex flex-col bg-[#0A1628]">
        <TopBanner />
        <Header />

        {/* Category Hero Banner */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#0A1628] border-b border-white/15">
          <div className="absolute inset-0 z-0">
            <img
              src={currentConfig.heroImage}
              alt={currentConfig.title}
              className="w-full h-full object-cover object-center brightness-105"
            />
            <div className="absolute inset-y-0 left-0 w-full md:w-[58%] lg:w-[48%] bg-gradient-to-r from-[#0A1628] via-[#0A1628]/90 to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 lg:py-20 w-full">
            <div className="max-w-xl lg:max-w-2xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-sm shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CATEGORY COLLECTION</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                {currentConfig.title}
              </h1>

              <p className="font-serif italic text-lg sm:text-xl text-white/90 font-medium">
                &ldquo;{currentConfig.tagline}&rdquo;
              </p>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-lg">
                {currentConfig.desc}
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2" data-reveal-stagger>
                {currentConfig.badges.map((b, i) => {
                  const BIcon = badgeIconMap[b.icon];
                  return (
                    <div
                      key={i}
                      data-reveal="up"
                      data-reveal-delay={String(i * 80)}
                      className="flex items-center gap-2 text-xs font-semibold text-white bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15 shadow-2xs transition-all duration-300"
                    >
                      <BIcon className="w-4 h-4 text-white" />
                      <span>{b.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb — Positioned AFTER / AT BOTTOM OF HERO */}
        <div className="bg-[#0D1E35] border-b border-white/15 py-3.5 px-4 sm:px-6 lg:px-12 text-xs text-slate-400 shadow-2xs">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors duration-300">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href="/#collections" className="hover:text-white transition-colors duration-300">
              Collections
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-white font-bold">
              {currentConfig.title}
            </span>
          </div>
        </div>

        {/* Main Catalog View: Left Filter + Right Product Grid */}
        <section ref={catalogRef} className="py-12 lg:py-16 bg-[#0A1628] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Sidebar Filter Panel */}
              <div className="lg:col-span-3 bg-[#0D1E35] rounded-2xl p-6 border border-white/15 space-y-6" data-reveal="left">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <div className="flex items-center gap-2 font-semibold text-white text-sm">
                    <Filter className="w-4 h-4 text-white" />
                    <span>Filter</span>
                  </div>
                  <button
                    onClick={() => {
                      handleSubCategoryChange("all");
                    }}
                    className="text-xs font-semibold text-white hover:underline cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                {/* Category Radio Filters */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Category
                  </h4>
                  <div className="space-y-2 text-xs text-slate-300">
                    {currentConfig.subCategories.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors duration-300"
                      >
                        <input
                          type="radio"
                          name="subCat"
                          checked={selectedSubCategory === item.id}
                          onChange={() => handleSubCategoryChange(item.id)}
                          className="accent-white"
                        />
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Product Grid Area */}
              <div className="lg:col-span-9 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-reveal-stagger>
                  {currentConfig.products.map((p, index) => (
                    <div
                      key={p.id}
                      data-reveal="up"
                      data-reveal-delay={String(index * 80)}
                      onClick={() =>
                        setSelectedProductModal({
                          title: p.title,
                          category: currentConfig.title,
                          image: p.image,
                          description: currentConfig.desc,
                          specs: [
                            { label: "Collection", value: currentConfig.title },
                            { label: "Warranty", value: "3-Year On-Site" },
                          ],
                        })
                      }
                      className="group bg-[#0D1E35] rounded-2xl overflow-hidden border border-white/15 shadow-2xs hover-border-glow hover:shadow-xl transition-all duration-400 transform hover:-translate-y-2 flex flex-col justify-between cursor-pointer"
                    >
                      <div className="relative aspect-square overflow-hidden bg-slate-100">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        />
                      </div>
                      <div className="p-4 bg-[#0D1E35]">
                        <h3 className="font-semibold text-white text-sm group-hover:text-white transition-colors duration-300">
                          {p.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />

        <ProductModal
          product={selectedProductModal}
          onClose={() => setSelectedProductModal(null)}
          onOpenConsultation={() => {
            setSelectedProductModal(null);
            window.location.assign("/contact");
          }}
        />
      </main>
    </ScrollRevealProvider>
  );
}
