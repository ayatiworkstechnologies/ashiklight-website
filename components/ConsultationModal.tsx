"use client";

import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, Send, Loader2, AlertCircle } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    spaceType: "Residential / Villa",
    showroom: "In-Person at Teynampet Flagship Store",
    date: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: formData.name,
            email: "",
            phone: formData.phone,
            message: `Space: ${formData.spaceType}, Consultation: ${formData.showroom}, Preferred Date: ${formData.date || "N/A"}`,
          },
        }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result?.error || "Submission failed");
      }

      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
      }, 1800);
    } catch (err) {
      console.error("Consultation API error:", err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-fade-in-up transition-all duration-400">
        {/* Header decoration */}
        <div className="bg-gradient-to-r from-[#040812] via-[#0D1E35] to-[#040812] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-2 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" /> Premium Service
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Book Lighting Consultation
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Connect with our lighting architects for tailored home or commercial solutions.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-slide-carousel">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-slate-800">
                Consultation Request Submitted!
              </h4>
              <p className="text-slate-600 text-sm max-w-xs mx-auto">
                Thank you {formData.name || "valued customer"}. Our lighting specialists will reach out to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>Failed to submit consultation. Please try again or call us at 087548 60555.</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anish Kumar"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-colors duration-300"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Space Type
                  </label>
                  <select
                    value={formData.spaceType}
                    onChange={(e) =>
                      setFormData({ ...formData, spaceType: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-colors duration-300"
                  >
                    <option>Residential / Villa</option>
                    <option>Commercial / Office</option>
                    <option>Restaurant / Hospitality</option>
                    <option>Double-Height / Foyer</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Consultation Type
                  </label>
                  <select
                    value={formData.showroom}
                    onChange={(e) =>
                      setFormData({ ...formData, showroom: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-colors duration-300"
                  >
                    <option value="In-Person at Teynampet Flagship Store">In-Person at Teynampet Flagship Store</option>
                    <option value="Virtual / Online Lighting Consultation">Virtual / Online Lighting Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-colors duration-300"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-shimmer w-full mt-2 py-3.5 px-6 bg-[#040812] hover:bg-[#07101F] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center gap-2.5 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-white" />
                    <span>Booking Consultation...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 text-white" />
                    <span>Book Consultation</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
