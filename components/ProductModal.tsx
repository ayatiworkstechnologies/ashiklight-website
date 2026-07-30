"use client";

import React from "react";
import { X, Sparkles, Check, PhoneCall, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export interface ProductModalData {
  title: string;
  category: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
}

interface ProductModalProps {
  product: ProductModalData | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export default function ProductModal({
  product,
  onClose,
  onOpenConsultation,
}: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-md animate-fade-in" onClick={onClose}>
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#EAE3D2] animate-fade-in-up max-h-[92vh] flex flex-col md:flex-row transition-all duration-400"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer border border-white/20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Large Product Image View */}
        <div className="md:w-7/12 relative bg-gradient-to-br from-[#FAF8F5] via-white to-[#F5F0E6] min-h-[320px] md:min-h-[500px] overflow-hidden group flex items-center justify-center p-2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3.5 py-1.5 bg-[#1A1813]/85 backdrop-blur-md text-[#E2C77D] text-[11px] font-bold uppercase tracking-wider rounded-full border border-[#B8860B]/40 shadow-md">
              {product.category}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 z-10">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold rounded-full shadow-sm border border-[#EAE3D2] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] animate-ping" /> High-Definition View
            </span>
          </div>
        </div>

        {/* Right Details */}
        <div className="md:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-white">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8860B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ashik Premium Collection</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A1813]">
              {product.title}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
              {product.description}
            </p>

            {/* Tech Specs */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Specifications
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {product.specs.map((spec, i) => (
                  <div key={i} className="bg-[#FAF6F0] p-2 rounded-lg border border-[#EAE3D2]/50">
                    <span className="text-slate-500 block text-[10px]">
                      {spec.label}
                    </span>
                    <span className="font-medium text-slate-800">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust highlights */}
            <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-1">
              <div className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" /> Free Site Visit
              </div>
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B8860B]" /> 3-Year Warranty
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-6">
            <a
              href={`https://wa.me/918754860555?text=${encodeURIComponent(
                `Hi Ashik Lights, I am interested in ${product.title} (${product.category}). Please share specifications and details.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Inquire Details on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full py-2.5 bg-[#FAF6F0] hover:bg-[#F3ECDF] text-slate-800 font-semibold rounded-xl text-xs flex items-center justify-center gap-2 border border-[#EAE3D2] hover:border-[#B8860B] transition-all duration-300 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Book Expert Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
