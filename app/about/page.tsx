import type { Metadata } from "next";
import Link from "next/link";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Showrooms from "@/components/Showrooms";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import {
  ShieldCheck,
  ChevronRight,
  Users,
  Star,
  ArrowRight,
  MessageSquareQuote,
  Trophy,
  Compass,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Established in 2016 by Mr. Abdul Hameed Ashik, Ashik Lights is Chennai's leading luxury lighting showroom serving residential, commercial and hospitality projects.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Ashik Lights | Chennai's Luxury Lighting Showroom",
    description:
      "Since 2016, Ashik Lights has delivered complete decorative, indoor, architectural and outdoor lighting solutions from our Teynampet flagship showroom.",
    url: "https://ashiklights.in/about",
  },
};

export default function AboutPage() {
  const foundationPillars = [
    {
      num: "01",
      title: "Our Journey",
      icon: Compass,
      desc: "Established in 2016, ASHIK LIGHTS has been committed to offering a wide range of lighting options to enhance every space. From decorative lighting to indoor, architectural, and outdoor lighting, we cater to residential, commercial, and industrial projects with professional expertise.",
    },
    {
      num: "02",
      title: "Our Purpose",
      icon: Lightbulb,
      desc: "At ASHIK LIGHTS, our purpose is to illuminate and transform spaces, bringing light and life into every environment we touch. We believe that quality lighting is essential to creating the perfect ambiance and enhancing the functionality of any space.",
    },
    {
      num: "03",
      title: "Our Team",
      icon: Users,
      desc: "Our team at ASHIK LIGHTS is comprised of dedicated professionals with a passion for lighting design. With years of experience and a commitment to excellence, we ensure that every customer receives personalized attention and expert advice when choosing the perfect lighting solution.",
    },
    {
      num: "04",
      title: "Customer Opinions",
      icon: MessageSquareQuote,
      desc: "Our satisfied customers speak for themselves. With glowing reviews and testimonials, we take pride in the positive feedback we receive from those who have experienced the ASHIK LIGHTS difference firsthand.",
    },
    {
      num: "05",
      title: "Achievements",
      icon: Trophy,
      desc: "Over the years, ASHIK LIGHTS has earned a reputation for excellence in the lighting industry. Our commitment to quality, innovation, and customer satisfaction has been recognized through various accolades and achievements, further solidifying our position as a leader in the field.",
    },
    {
      num: "06",
      title: "Your Solution Awaits",
      icon: ShieldCheck,
      desc: "Discover the difference that ASHIK LIGHTS can make in your space. Whether you're looking to revamp your home, office, or industrial project, we have the perfect lighting solution for you. Visit our showroom today and let us illuminate your world.",
    },
  ];

  return (
    <ScrollRevealProvider>
      <main className="min-h-screen flex flex-col bg-[#0A1628]">
        <TopBanner />
        <Header />

        {/* Hero Section — Luxury Dark Navy & Gold Ambient Atmosphere */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#0A1628] via-[#0D1E35] to-[#0A1628] border-b border-[#D4A017]/20 overflow-hidden">
          {/* Subtle Glow Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4A017]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4A017]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6" data-reveal="left">
                <div className="inline-flex items-center gap-2 text-[#D4A017] text-xs font-bold uppercase tracking-[0.2em]">
                  <span className="w-6 h-px bg-[#D4A017]/50" />
                  ABOUT ASHIK LIGHTS
                  <span className="w-6 h-px bg-[#D4A017]/50" />
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Illuminating spaces <br />
                  with{" "}
                  <span className="italic text-[#D4A017] font-medium">
                    timeless elegance.
                  </span>
                </h1>

                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-xl">
                  Established in 2016 by our founder,{" "}
                  <strong className="text-white">Mr. Abdul Hameed Ashik</strong>. ASHIK LIGHTS is a
                  leading lights retail showroom, proudly serving our valued
                  customers since 2016. Dedicated to providing complete lighting
                  solutions to all sectors.
                </p>

                {/* Stat Cards Grid */}
                <div
                  className="grid grid-cols-3 gap-4 pt-4"
                  data-reveal-stagger
                >
                  <div
                    data-reveal="up"
                    data-reveal-delay="100"
                    className="bg-[#0D1E35] p-4.5 rounded-2xl border border-[#D4A017]/20 shadow-2xs hover:border-[#D4A017] transition-all duration-300 text-center"
                  >
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#D4A017]">
                      Flagship
                    </div>
                    <div className="text-[11px] text-slate-400 font-semibold mt-1">
                      Teynampet Store
                    </div>
                  </div>
                  <div
                    data-reveal="up"
                    data-reveal-delay="200"
                    className="bg-[#0D1E35] p-4.5 rounded-2xl border border-[#D4A017]/20 shadow-2xs hover:border-[#D4A017] transition-all duration-300 text-center"
                  >
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#D4A017]">
                      10,000+
                    </div>
                    <div className="text-[11px] text-slate-400 font-semibold mt-1">
                      Homes Illuminated
                    </div>
                  </div>
                  <div
                    data-reveal="up"
                    data-reveal-delay="300"
                    className="bg-[#0D1E35] p-4.5 rounded-2xl border border-[#D4A017]/20 shadow-2xs hover:border-[#D4A017] transition-all duration-300 text-center"
                  >
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#D4A017]">
                      4.9 ★
                    </div>
                    <div className="text-[11px] text-slate-400 font-semibold mt-1">
                      Google Rating
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Showcase Photo Frame */}
              <div className="lg:col-span-6 relative" data-reveal="scale">
                <div className="rounded-3xl overflow-hidden border border-[#D4A017]/20 shadow-2xl min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] w-full group relative">
                  <img
                    src="/banner/ashik shop-image.webp"
                    alt="Ashik Lights Flagship Showroom Teynampet"
                    className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <div className="text-xs font-bold text-[#D4A017] uppercase tracking-wider">
                      Flagship Showroom
                    </div>
                    <div className="font-serif text-xl font-bold">
                      #313, Anna Salai, Teynampet, Chennai
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb — Positioned AFTER Hero */}
        <div className="bg-[#0D1E35] border-b border-[#D4A017]/15 py-3.5 px-4 sm:px-6 lg:px-12 text-xs text-slate-400 shadow-2xs">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link
              href="/"
              className="hover:text-[#D4A017] transition-colors duration-300"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#D4A017] font-bold">About Us</span>
          </div>
        </div>

        {/* Our Foundation Cards Grid */}
        <section className="py-16 lg:py-24 bg-[#0A1628]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div
              className="text-center max-w-2xl mx-auto mb-16 space-y-3"
              data-reveal="up"
            >
              <div className="inline-flex items-center gap-2 text-[#D4A017] text-xs font-bold uppercase tracking-[0.2em]">
                <span className="w-6 h-px bg-[#D4A017]/50" />
                OUR BRAND FOUNDATION
                <span className="w-6 h-px bg-[#D4A017]/50" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
                Driven by Passion &amp; Precision
              </h2>
              <p className="text-slate-400 text-sm font-light">
                Delivering complete lighting solutions to residential,
                commercial, and industrial sectors.
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              data-reveal-stagger
            >
              {foundationPillars.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.num}
                    data-reveal="up"
                    data-reveal-delay={String(idx * 100)}
                    className="bg-[#0D1E35] p-8 rounded-3xl border border-[#D4A017]/20 space-y-5 hover:border-[#D4A017] transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Top Pill Number & Icon */}
                      <div className="flex items-center justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-[#0A1628] flex items-center justify-center text-[#D4A017] shadow-2xs border border-[#D4A017]/20 group-hover:bg-[#D4A017] group-hover:text-white group-hover:border-[#D4A017] transition-all duration-300">
                          <IconComp className="w-7 h-7" />
                        </div>
                        <span className="font-serif font-bold text-2xl text-[#D4A017]/30 group-hover:text-[#D4A017] transition-colors">
                          {item.num}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#D4A017] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#D4A017]/15 flex items-center justify-between text-xs font-semibold text-[#D4A017]">
                      <span>ASHIK LIGHTS EXCELLENCE</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Founder Quote Card — Dark Luxury Style */}
        <section className="py-20 bg-[#060E1A] text-white border-t border-[#D4A017]/15 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-3xl pointer-events-none" />
          <div
            className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-6 relative z-10"
            data-reveal="scale"
          >
            <div className="w-16 h-16 rounded-full bg-[#D4A017]/15 text-[#D4A017] flex items-center justify-center mx-auto border border-[#D4A017]/30 shadow-xl">
              <Star className="w-8 h-8 fill-[#D4A017]" />
            </div>

            <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
              &ldquo;Lighting is not merely about brightness — it is the soul of
              architecture. Every fixture we curate is crafted to elevate human
              experience.&rdquo;
            </blockquote>

            <div className="pt-2 space-y-1">
              <div className="font-bold text-lg text-[#D4A017]">
                Mr. Abdul Hameed Ashik
              </div>
              <div className="text-xs text-slate-400">
                Founder &amp; Managing Director, Ashik Lights
              </div>
            </div>
          </div>
        </section>

        {/* Flagship Showroom Locator */}
        <Showrooms />

        {/* Bottom Consultation CTA */}
        <section className="py-16 bg-[#0A1628]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div
              className="bg-gradient-to-r from-[#0D1E35] via-[#122240] to-[#0D1E35] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-[#D4A017]/20"
              data-reveal="up"
            >
              <div className="space-y-3 text-center md:text-left">
                <h3 className="font-serif text-3xl font-bold text-white">
                  Experience Our Flagship Store
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-xl font-light">
                  Visit our flagship Teynampet showroom to feel the warmth of
                  our statement chandeliers and consult with our lighting
                  architects.
                </p>
              </div>

              <Link
                href="/contact"
                className="btn-shimmer px-8 py-4 text-white text-xs sm:text-sm font-bold rounded-full shadow-xl hover:shadow-2xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 shrink-0"
              >
                <span>Book Showroom Visit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ScrollRevealProvider>
  );
}
