"use client";

import React, { useState, use, useRef } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { notFound } from "next/navigation";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import ProductModal, { ProductModalData } from "@/components/ProductModal";
import {
  ChevronRight,
  Filter,
  Heart,
  MessageCircle,
  Sparkles,
  UserCheck,
  ShieldCheck,
  SlidersHorizontal,
  Grid,
  List,
  Sun,
  Award,
  Fan,
  Maximize2,
} from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const rawCategory = resolvedParams?.category || "chandeliers";

  const [selectedSubCategory, setSelectedSubCategory] = useState("all");
  const [selectedStyle, setSelectedStyle] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [selectedProductModal, setSelectedProductModal] = useState<ProductModalData | null>(null);

  const catalogRef = useRef<HTMLDivElement>(null);

  const handleSubCategoryChange = (id: string) => {
    setSelectedSubCategory(id);
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Category Configuration Mapper for 8 categories
  const categoryConfigs: Record<
    string,
    {
      title: string;
      tagline: string;
      desc: string;
      image: string;
      badges: { icon: LucideIcon; text: string }[];
      subCategories: { id: string; label: string }[];
      products: {
        id: string;
        title: string;
        code: string;
        material: string;
        dimensions: string;
        image: string;
      }[];
    }
  > = {
    chandeliers: {
      title: "Chandeliers",
      tagline: "Statement lighting that defines your space.",
      desc: "Discover a timeless collection of chandeliers in classic, modern and luxury crystal styles for every interior.",
      image: "/assets/chandeliers/Luxury Floral Crystal Chandelier.webp",
      badges: [
        { icon: Sparkles, text: "Premium Quality Materials" },
        { icon: UserCheck, text: "Expert Guidance" },
        { icon: ShieldCheck, text: "3-Year Warranty" },
      ],
      subCategories: [
        { id: "all", label: "All Chandeliers" },
        { id: "crystal", label: "Crystal Chandeliers" },
        { id: "modern", label: "Modern Chandeliers" },
        { id: "classic", label: "Classic Chandeliers" },
        { id: "brass", label: "Brass Chandeliers" },
      ],
      products: [
        {
          id: "ch-1",
          title: "Luxury Floral Crystal Chandelier",
          code: "AL-CH-1001",
          material: "K9 Optical Crystal & Gold Brass",
          dimensions: "Ø 36\" x H 32\"",
          image: "/assets/chandeliers/Luxury Floral Crystal Chandelier.webp",
        },
      ],
    },
  };

  const currentConfig = categoryConfigs[rawCategory];
  if (!currentConfig) notFound();

  return (
    <ScrollRevealProvider>
      <main className="min-h-screen flex flex-col bg-[#FAF8F5]">
        <TopBanner />
        <Header />

        {/* Category Hero Banner — Exact Homepage Hero Design */}
        <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FAF6F0] border-b border-[#EAE3D2]">
          {/* Full Width Background Image — Bright & Unzoomed */}
          <div className="absolute inset-0 z-0">
            <img
              src={currentConfig.image}
              alt={currentConfig.title}
              className="w-full h-full object-cover object-right lg:object-center brightness-105 contrast-[1.02]"
            />
            {/* Subtle left-side shade overlay ONLY for text contrast; Right side is 100% bright & unshaded */}
            <div className="absolute inset-y-0 left-0 w-full md:w-[58%] lg:w-[48%] bg-gradient-to-r from-[#FAF6F0] via-[#FAF6F0]/90 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#FAF6F0] to-transparent md:hidden pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 lg:py-20 w-full">
            <div className="max-w-xl lg:max-w-2xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/30 text-[#B8860B] text-xs font-semibold uppercase tracking-wider backdrop-blur-sm shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CATEGORY COLLECTION</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1813] leading-[1.1]">
                {currentConfig.title}
              </h1>

              <p className="font-serif italic text-lg sm:text-xl text-[#B8860B] font-medium">
                &ldquo;{currentConfig.tagline}&rdquo;
              </p>

              <p className="text-slate-700 text-sm sm:text-base font-light leading-relaxed max-w-lg">
                {currentConfig.desc}
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2" data-reveal-stagger>
                {currentConfig.badges.map((b, i) => {
                  const BIcon = b.icon;
                  return (
                    <div
                      key={i}
                      data-reveal="up"
                      data-reveal-delay={String(i * 80)}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#EAE3D2] shadow-2xs hover:border-[#B8860B] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <BIcon className="w-4 h-4 text-[#B8860B]" />
                      <span>{b.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb — Positioned AFTER / AT BOTTOM OF HERO */}
        <div className="bg-[#FAF6F0] border-b border-[#EAE3D2] py-3.5 px-4 sm:px-6 lg:px-12 text-xs text-slate-500 shadow-2xs">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-[#B8860B] transition-colors duration-300">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href="/#collections" className="hover:text-[#B8860B] transition-colors duration-300">
              Collections
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#B8860B] font-bold">
              {currentConfig.title}
            </span>
          </div>
        </div>

        {/* Main Catalog View: Left Filter + Right Product Grid */}
        <section ref={catalogRef} className="py-12 lg:py-16 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Sidebar Filter Panel */}
              <div className="lg:col-span-3 bg-[#FAF6F0] rounded-2xl p-6 border border-[#EAE3D2] space-y-6" data-reveal="left">
                <div className="flex items-center justify-between border-b border-[#EAE3D2] pb-3">
                  <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm">
                    <Filter className="w-4 h-4 text-[#B8860B]" />
                    <span>Filter</span>
                  </div>
                  <button
                    onClick={() => {
                      handleSubCategoryChange("all");
                      setSelectedStyle([]);
                    }}
                    className="text-xs font-semibold text-[#B8860B] hover:underline cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                {/* Category Radio Filters */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Category
                  </h4>
                  <div className="space-y-2 text-xs text-slate-700">
                    {currentConfig.subCategories.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-2 cursor-pointer hover:text-[#B8860B] transition-colors duration-300"
                      >
                        <input
                          type="radio"
                          name="subCat"
                          checked={selectedSubCategory === item.id}
                          onChange={() => handleSubCategoryChange(item.id)}
                          className="accent-[#B8860B]"
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
                      className="group bg-white rounded-2xl overflow-hidden border border-[#EAE3D2] shadow-2xs hover-border-glow hover:shadow-xl transition-all duration-400 transform hover:-translate-y-2 flex flex-col justify-between cursor-pointer"
                    >
                      <div className="relative aspect-square overflow-hidden bg-slate-100">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="font-semibold text-slate-900 text-sm group-hover:text-[#B8860B] transition-colors duration-300">
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
          }}
        />
      </main>
    </ScrollRevealProvider>
  );
}
