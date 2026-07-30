"use client";

import React, { useState } from "react";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import ShopBySpace from "@/components/ShopBySpace";
import FeaturedBanner from "@/components/FeaturedBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Showrooms from "@/components/Showrooms";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => setIsConsultationOpen(true);
  const handleCloseConsultation = () => setIsConsultationOpen(false);

  return (
    <ScrollRevealProvider>
      <main className="min-h-screen flex flex-col bg-[#FAF8F5]">
        {/* Top Banner */}
        <TopBanner />

        {/* Navigation Header */}
        <Header />

        {/* Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Explore Our Collections */}
        <Collections onOpenConsultation={handleOpenConsultation} />

        {/* Shop by Space */}
        <ShopBySpace />

        {/* Featured Collection: High-Ceiling Chandeliers */}
        <FeaturedBanner onOpenConsultation={handleOpenConsultation} />

        {/* Why Choose Ashik Lights */}
        <WhyChooseUs onOpenConsultation={handleOpenConsultation} />

        {/* Our Projects */}
        <Projects onOpenConsultation={handleOpenConsultation} />

        {/* Customer Reviews & Testimonials */}
        <Testimonials />

        {/* Showroom Locations & Map */}
        <Showrooms />

        {/* Footer */}
        <Footer />

        {/* Global Consultation Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={handleCloseConsultation}
        />
      </main>
    </ScrollRevealProvider>
  );
}
