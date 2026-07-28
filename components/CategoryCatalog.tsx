"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductModal, { ProductModalData } from "@/components/ProductModal";
import {
  ChevronRight,
  Filter,
  Heart,
  Sparkles,
  UserCheck,
  ShieldCheck,
  SlidersHorizontal,
  Grid,
  List,
  Eye,
} from "lucide-react";

export interface CategoryProduct {
  id: string;
  title: string;
  code?: string;
  material?: string;
  dimensions?: string;
  price?: string;
  image: string;
  subCat?: string;
  style?: string;
}

export interface CategoryCatalogProps {
  categorySlug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  badges: { icon: any; text: string }[];
  subCategories: { id: string; label: string }[];
  products: CategoryProduct[];
  bottomTrustText?: string;
}

export default function CategoryCatalog({
  categorySlug,
  title,
  tagline,
  description,
  heroImage,
  badges,
  subCategories,
  products,
}: CategoryCatalogProps) {
  const [selectedSubCategory, setSelectedSubCategory] = useState("all");
  const [selectedStyle, setSelectedStyle] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [selectedProductModal, setSelectedProductModal] = useState<ProductModalData | null>(null);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Filter products based on subcategory
  const filteredProducts = products.filter((p) => {
    if (selectedSubCategory !== "all" && p.subCat) {
      return p.subCat === selectedSubCategory;
    }
    return true;
  });

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <TopBanner />
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#FAF6F0] border-b border-[#EAE3D2] py-3 px-4 sm:px-6 lg:px-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-[#B8860B]">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-[#B8860B] font-semibold">{title}</span>
        </div>
      </div>

      {/* Category Hero Banner */}
      <section className="relative py-12 lg:py-16 bg-[#FAF6F0] border-b border-[#EAE3D2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-4 animate-fadeIn">
              <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#1A1813]">
                {title}
              </h1>

              <p className="font-serif italic text-lg sm:text-xl text-[#B8860B] font-medium">
                {tagline}
              </p>

              <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed max-w-lg">
                {description}
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {badges.map((b, i) => {
                  const BIcon = b.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-white px-3.5 py-2 rounded-xl border border-[#EAE3D2] shadow-2xs hover:border-[#B8860B] transition-colors"
                    >
                      <BIcon className="w-4 h-4 text-[#B8860B]" />
                      <span>{b.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Banner Photo */}
            <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#EAE3D2] shadow-md aspect-16/9 lg:aspect-2/1 group relative">
              <Image
                src={heroImage}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog View: Left Filter + Right Product Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar Filter Panel */}
            <div className="lg:col-span-3 bg-[#FAF6F0] rounded-2xl p-5 border border-[#EAE3D2] space-y-6">
              <div className="flex items-center justify-between border-b border-[#EAE3D2] pb-3">
                <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm">
                  <Filter className="w-4 h-4 text-[#B8860B]" />
                  <span>Filter</span>
                </div>
                <button
                  onClick={() => {
                    setSelectedSubCategory("all");
                    setSelectedStyle([]);
                  }}
                  className="text-xs font-semibold text-[#B8860B] hover:underline"
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
                  {subCategories.map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center gap-2 cursor-pointer hover:text-[#B8860B] transition-colors"
                    >
                      <input
                        type="radio"
                        name="subCat"
                        checked={selectedSubCategory === item.id}
                        onChange={() => setSelectedSubCategory(item.id)}
                        className="accent-[#B8860B]"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Style Checkboxes */}
              <div className="space-y-3 border-t border-[#EAE3D2] pt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Style
                </h4>
                <div className="space-y-2 text-xs text-slate-700">
                  {["Modern", "Classic", "Contemporary", "Luxury"].map((st) => (
                    <label
                      key={st}
                      className="flex items-center gap-2 cursor-pointer hover:text-[#B8860B] transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedStyle.includes(st.toLowerCase())}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedStyle([...selectedStyle, st.toLowerCase()]);
                          } else {
                            setSelectedStyle(
                              selectedStyle.filter((s) => s !== st.toLowerCase())
                            );
                          }
                        }}
                        className="accent-[#B8860B] rounded"
                      />
                      <span>{st}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Product Grid Area */}
            <div className="lg:col-span-9 space-y-6">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FAF6F0] p-4 rounded-2xl border border-[#EAE3D2]">
                <div className="text-xs font-medium text-slate-700">
                  <span className="font-bold text-slate-900">
                    {filteredProducts.length}
                  </span>{" "}
                  Items
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500">Sort by:</span>
                    <select
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                      className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-[#B8860B]"
                    >
                      <option value="popular">Popular</option>
                      <option value="name-asc">Name: A to Z</option>
                      <option value="name-desc">Name: Z to A</option>
                    </select>
                  </div>

                  {/* Grid/List View Switch */}
                  <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-1 rounded ${
                        viewMode === "grid"
                          ? "bg-[#B8860B] text-white"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-1 rounded ${
                        viewMode === "list"
                          ? "bg-[#B8860B] text-white"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Cards Grid: IMAGE + NAME ONLY WITH ALL ANIMATIONS */}
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                    : "space-y-4"
                }
              >
                {filteredProducts.map((p) => {
                  const isFav = !!favorites[p.id];
                  return (
                    <div
                      key={p.id}
                      onClick={() =>
                        setSelectedProductModal({
                          title: p.title,
                          category: p.code || title,
                          image: p.image,
                          description: `${p.title} - Ashik Lights Premium Collection.`,
                          specs: [
                            { label: "Product Name", value: p.title },
                            { label: "Collection", value: title },
                            { label: "Material", value: p.material || "Premium Quality" },
                            { label: "Warranty", value: "3-Year On-Site" },
                          ],
                        })
                      }
                      className="group bg-white rounded-2xl overflow-hidden border border-[#EAE3D2] shadow-2xs hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between cursor-pointer"
                    >
                      {/* Top Image with Zoom Hover & Dark Lightbox Overlay */}
                      <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-slate-100">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                          className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Hover Overlay with Eye Icon */}
                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <Eye className="w-3.5 h-3.5 text-[#B8860B]" /> Quick View
                          </span>
                        </div>

                        {/* Favorite Heart Button */}
                        <button
                          onClick={(e) => toggleFavorite(p.id, e)}
                          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-xs text-slate-400 hover:text-red-500 transition-colors z-10"
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              isFav ? "fill-red-[#B8860B] text-red-500" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Card Content: ONLY PRODUCT NAME */}
                      <div className="p-3.5 sm:p-4 text-center bg-white border-t border-slate-100">
                        <h3 className="font-semibold text-xs sm:text-sm text-slate-900 group-hover:text-[#B8860B] transition-colors leading-snug line-clamp-2">
                          {p.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Consultation Box */}
              <div className="bg-[#FAF6F0] rounded-3xl p-6 sm:p-8 border border-[#EAE3D2] flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-wrap items-center gap-6 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-[#B8860B]" />
                    <span>
                      <strong>Custom Sizes</strong> Available
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#B8860B]" />
                    <span>
                      <strong>Installation Support</strong> Team
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#B8860B]" />
                    <span>
                      <strong>Safe & Secure</strong> Packaging
                    </span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#B8860B] hover:bg-[#a3722a] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-sm hover:shadow-md transition-all whitespace-nowrap cursor-pointer"
                >
                  Contact Lighting Specialist →
                </Link>
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
  );
}
