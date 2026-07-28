"use client";

import React from "react";
import { X, Sparkles, Check, MessageSquare, PhoneCall, ShieldCheck } from "lucide-react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#EAE3D2] animate-scaleUp max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Product Image View */}
        <div className="md:w-1/2 relative bg-slate-100 min-h-[260px] md:min-h-[420px]">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[#1A1813]/80 backdrop-blur-sm text-[#E2C77D] text-[11px] font-semibold uppercase tracking-wider rounded-full border border-[#B8860B]/40">
              {product.category}
            </span>
          </div>
        </div>

        {/* Right Details */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
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
                  <div key={i} className="bg-[#FAF6F0] p-2 rounded-lg">
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
              href={`https://wa.me/9106754860555?text=${encodeURIComponent(
                `Hi Ashik Lights, I am interested in ${product.title} (${product.category}). Please share pricing and details.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire Price on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full py-2.5 bg-[#FAF6F0] hover:bg-[#F3ECDF] text-slate-800 font-semibold rounded-xl text-xs flex items-center justify-center gap-2 border border-[#EAE3D2] transition cursor-pointer"
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
