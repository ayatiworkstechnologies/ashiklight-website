"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import ProductModal, { ProductModalData } from "./ProductModal";

interface ProjectsProps {
  onOpenConsultation?: () => void;
}

export default function Projects({ onOpenConsultation }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<ProductModalData | null>(null);

  const projects = [
    {
      id: 1,
      title: "Luxury Residence",
      location: "Chennai",
      image: "/assets/chandeliers/Luxury Floral Crystal Chandelier.webp",
      desc: "Complete interior lighting design for a 4500 sq.ft luxury penthouse featuring warm dimmable magnetic track lights and statement dining chandeliers.",
      specs: [
        { label: "Location", value: "Teynampet, Chennai" },
        { label: "Scope", value: "Decorative & Architectural" },
        { label: "Color Temp", value: "2700K - 3000K Warm" },
        { label: "Control", value: "Smart Automation" },
      ],
    },
    {
      id: 2,
      title: "Villa - ECR",
      location: "Chennai",
      image: "/assets/High Ceiling Chandeliers/Crystal Raindrop High-Ceiling Chandelier.webp",
      desc: "High-ceiling multi-pendant installation in double-height foyer with IP65 outdoor landscape lighting for beachside villa.",
      specs: [
        { label: "Location", value: "ECR, Chennai" },
        { label: "Scope", value: "Double-Height Foyer" },
        { label: "Chandelier", value: "Custom 14-Pendant" },
        { label: "Outdoor", value: "IP67 Landscape" },
      ],
    },
    {
      id: 3,
      title: "Fine Dining Restaurant",
      location: "Chennai",
      image: "/assets/Wall & Pendant Lights/Amber Glass Halo Wall Sconce.webp",
      desc: "Mood-setting warm ambient illumination with custom amber glass pendant fixtures and accent LED perimeter coves.",
      specs: [
        { label: "Location", value: "Nungambakkam" },
        { label: "Scope", value: "Hospitality Lighting" },
        { label: "CRI", value: "> 95 Color Rendering" },
        { label: "Dimming", value: "DALI Scene Control" },
      ],
    },
    {
      id: 4,
      title: "Retail Store",
      location: "Chennai",
      image: "/assets/Architecture Light/Circular Magnetic Power Track Series.webp",
      desc: "High-end jewelry store display lighting using narrow 15° beam angle spotlights and anti-glare recessed downlights.",
      specs: [
        { label: "Location", value: "Anna Nagar" },
        { label: "Scope", value: "Commercial Retail" },
        { label: "Spotlights", value: "15° Precision Beam" },
        { label: "Efficiency", value: "120 lm/W LED" },
      ],
    },
    {
      id: 5,
      title: "Corporate Office",
      location: "Chennai",
      image: "/assets/Indoor light catalog/ArcGlow Minimal LED Wall Light.webp",
      desc: "Ergonomic low-glare UGR<13 linear profile office lighting for executive boardrooms and open workstation bays.",
      specs: [
        { label: "Location", value: "OMR IT Corridor" },
        { label: "Scope", value: "Corporate Interior" },
        { label: "Glare Rating", value: "UGR < 13 Compliant" },
        { label: "Profiles", value: "Recessed & Suspended" },
      ],
    },
    {
      id: 6,
      title: "Landscape Lighting",
      location: "Chennai",
      image: "/assets/Outdoor Light Catalog/Spike Spotlight.webp",
      desc: "Submersible pool illumination, tree uplift spotlights, and pathway bollard lighting for private garden estate.",
      specs: [
        { label: "Location", value: "Palavakkam, ECR" },
        { label: "Scope", value: "Garden & Pool IP68" },
        { label: "Material", value: "Solid 316 Stainless" },
        { label: "Voltage", value: "12V Safe Low Voltage" },
      ],
    },
  ];

  return (
    <>
      <section id="projects" className="py-16 lg:py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header Block — split directional reveal */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div data-reveal="left">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Our Projects
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-light mt-2">
                See how we bring spaces to life with the right light.
              </p>
            </div>

            <Link
              href="/#projects"
              data-reveal="right"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white hover:text-slate-200 transition-colors group cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* 6 Project Showcase Cards — staggered scale reveal */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-reveal-stagger
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                data-reveal="scale"
                data-reveal-delay={String(index * 100)}
                onClick={() =>
                  setSelectedProject({
                    title: project.title,
                    category: `Completed Project - ${project.location}`,
                    image: project.image,
                    description: project.desc,
                    specs: project.specs,
                  })
                }
                className="group bg-[#0D1E35] rounded-2xl overflow-hidden border border-white/15 shadow-2xs hover-border-glow transition-all duration-400 transform hover:-translate-y-2 cursor-pointer"
              >
                {/* Image Box */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    <span className="px-2.5 py-1 bg-black/70 backdrop-blur-xs text-[10px] font-bold text-white rounded-full">
                      View Project
                    </span>
                  </div>
                </div>

                {/* Title & Location Footer */}
                <div className="p-4 text-center space-y-1 bg-[#0D1E35]">
                  <h3 className="font-medium text-white text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-center gap-1 text-xs text-slate-400 font-light">
                    <MapPin className="w-3.5 h-3.5 text-white/80" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Lightbox Modal */}
      <ProductModal
        product={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={() => {
          setSelectedProject(null);
          if (onOpenConsultation) onOpenConsultation();
        }}
      />
    </>
  );
}
