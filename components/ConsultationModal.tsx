"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, Sparkles, CheckCircle2 } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    spaceType: "Residential / Villa",
    showroom: "Teynampet",
    date: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "Hi Ashik Lights, I would like to book a lighting consultation.",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Space: ${formData.spaceType}`,
      `Preferred showroom: ${formData.showroom}`,
      formData.date ? `Preferred date: ${formData.date}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/918754860555?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#EBE3D5]">
        {/* Header decoration */}
        <div className="bg-gradient-to-r from-[#2A2318] via-[#1A1813] to-[#2A2318] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B8860B]/20 text-[#E6C675] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Premium Service
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#FAF6F0]">
            Book Lighting Consultation
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Connect with our lighting architects for tailored home or commercial solutions.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-slate-800">
                Consultation Ready to Send
              </h4>
              <p className="text-slate-600 text-sm max-w-xs mx-auto">
                Thank you {formData.name || "valued customer"}. Tap Send in WhatsApp to deliver your request to our lighting specialist.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 focus:border-[#B8860B]"
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
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 focus:border-[#B8860B]"
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
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 focus:border-[#B8860B]"
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
                    Preferred Showroom
                  </label>
                  <select
                    value={formData.showroom}
                    onChange={(e) =>
                      setFormData({ ...formData, showroom: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 focus:border-[#B8860B]"
                  >
                    <option>Teynampet (Anna Salai)</option>
                    <option>Anna Nagar</option>
                    <option>ECR (East Coast Road)</option>
                    <option>Velachery</option>
                    <option>Virtual / Online Consultation</option>
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
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 focus:border-[#B8860B]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 px-6 bg-[#B8860B] hover:bg-[#a3722a] text-white font-semibold text-sm rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Confirm Consultation Booking</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
