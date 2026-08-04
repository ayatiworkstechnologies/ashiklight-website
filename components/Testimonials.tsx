"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, MessageSquareQuote, Pause, Play } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Anna Nagar, Chennai",
      rating: 5,
      date: "2 weeks ago",
      review:
        "Purchased a double-height crystal chandelier for our villa in Anna Nagar. The CAD calculations and drop-length customization by Mr. Ashik's team at Teynampet Flagship were outstanding. Highly recommended!",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 2,
      name: "Priya Sundaram",
      location: "ECR, Chennai",
      rating: 5,
      date: "1 month ago",
      review:
        "Extensive collection of modern magnetic track lights and IP65 garden bollards. Their team from Teynampet store came on-site to assist with wiring layouts. 5-star experience!",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 3,
      name: "Architect Vikram Ramesh",
      location: "Teynampet, Chennai",
      rating: 5,
      date: "3 weeks ago",
      review:
        "As an interior architect, I rely on Ashik Lights Teynampet for all my high-end residential projects. Their low-glare UGR<13 architectural downlights and profile tracks are top tier.",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 4,
      name: "Sowmya N.",
      location: "Velachery, Chennai",
      rating: 5,
      date: "1 month ago",
      review:
        "We bought retractable wooden fans and LED vanity mirrors from Ashik Lights Teynampet for our new home. Super quiet fans and anti-fog demister mirrors work flawlessly!",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 5,
      name: "Karthik Subramanian",
      location: "Porur, Chennai",
      rating: 5,
      date: "2 months ago",
      review:
        "Best luxury lighting store in Chennai. Exceptional crystal quality, transparent pricing, and courteous staff at Ashik Lights Teynampet!",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 6,
      name: "Meenakshi Sundaram",
      location: "Tambaram, Chennai",
      rating: 5,
      date: "3 weeks ago",
      review:
        "Stunning amber glass island pendants for our kitchen island from Ashik Lights Teynampet. The warm glow transformed our entire dining space. Excellent customer support!",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 7,
      name: "Anand & Divya",
      location: "Adyar, Chennai",
      rating: 5,
      date: "1 week ago",
      review:
        "The team at Ashik Lights Teynampet guided us through selecting chandeliers for our double-height foyer. The structural ceiling load calculations gave us complete peace of mind.",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 8,
      name: "Dr. Arvind Swaminathan",
      location: "Nungambakkam, Chennai",
      rating: 5,
      date: "1 month ago",
      review:
        "Outstanding lighting collection! Visited the Ashik Lights Teynampet showroom and was impressed by the K9 optical crystal purity and warm ambient wall sconces.",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 9,
      name: "Kavitha Rangarajan",
      location: "Besant Nagar, Chennai",
      rating: 5,
      date: "2 weeks ago",
      review:
        "We replaced all traditional fans with retractable crystal fans from Ashik Lights Teynampet. Electricity bills are down and the living room looks like a 5-star hotel!",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 10,
      name: "Sanjay Mehta (Interiors)",
      location: "Alwarpet, Chennai",
      rating: 5,
      date: "3 weeks ago",
      review:
        "Ashik Lights Teynampet is my primary destination for luxury villas. Their magnetic track systems allow versatile spotlight positioning without messing up False Ceilings.",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 11,
      name: "Deepak S.",
      location: "Kilpauk, Chennai",
      rating: 5,
      date: "1 month ago",
      review:
        "Superb packing and damage-free delivery! The crystal drops for our 12-foot high ceiling cascade arrived in perfect condition from Ashik Lights Teynampet.",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 12,
      name: "Gautam & Smitha",
      location: "RA Puram, Chennai",
      rating: 5,
      date: "2 months ago",
      review:
        "The anti-fog LED vanity mirrors from Ashik Lights Teynampet are magnificent. Touch controls with warm/white dual CCT mode make everyday grooming a pleasure.",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 13,
      name: "Pradeep Chandran",
      location: "Mylapore, Chennai",
      rating: 5,
      date: "3 weeks ago",
      review:
        "Genuine K9 crystal fixtures with heavy solid brass mountings. Mr. Ashik at Teynampet personally recommended the ideal wattage for our living area.",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 14,
      name: "Reshma B.",
      location: "Sholinganallur, Chennai",
      rating: 5,
      date: "1 month ago",
      review:
        "Installed IP65 weatherproof spike spotlights for our garden landscaping. They withstand Chennai rains comfortably. Great quality from Ashik Lights Teynampet!",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 15,
      name: "Architect Shalini Rao",
      location: "Kotturpuram, Chennai",
      rating: 5,
      date: "2 weeks ago",
      review:
        "Highly aesthetic fixtures with high CRI >90 LEDs. Ashik Lights Teynampet delivers top optical precision for modern luxury apartments.",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 16,
      name: "Manoj Kumar",
      location: "Thiruvanmiyur, Chennai",
      rating: 5,
      date: "1 month ago",
      review:
        "Courteous team and seamless installation support! Ashik Lights Teynampet provided custom drop wires for our stairwell chandelier.",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 17,
      name: "Nandhini Viswanathan",
      location: "Perungudi, Chennai",
      rating: 5,
      date: "3 weeks ago",
      review:
        "The gold leaf branch chandelier we purchased at Ashik Lights Teynampet is the centerpiece of our home. Every guest praises its design!",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 18,
      name: "Venkatesh Iyer",
      location: "T Nagar, Chennai",
      rating: 5,
      date: "2 months ago",
      review:
        "Visited the flagship Teynampet store on Anna Salai. The display setups and lighting demonstration helped us choose perfect fixtures for our new flat.",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 19,
      name: "Anitha & Srinivas",
      location: "Medavakkam, Chennai",
      rating: 5,
      date: "1 week ago",
      review:
        "Prompt service, transparent guidance and reliable support. Ashik Lights Teynampet is Chennai's best lighting store without doubt.",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 20,
      name: "Balaji V.",
      location: "Velachery, Chennai",
      rating: 5,
      date: "3 weeks ago",
      review:
        "Very pleased with our linear LED profile lights and decorative wall sconces from Ashik Lights Teynampet. Sleek, energy-efficient and long lasting.",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
    {
      id: 21,
      name: "Sunil & Archana",
      location: "ECR Road, Chennai",
      rating: 5,
      date: "2 weeks ago",
      review:
        "From outdoor facade lights to grand foyer chandeliers, Ashik Lights Teynampet delivered a complete home solution effortlessly. 10/10!",
      showroom: "Ashik Lights Teynampet Flagship",
      verified: true,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const isAnimatingRef = useRef(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (newIndex: number, direction: "left" | "right") => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      setIsAnimating(true);
      setSlideDirection(direction);
      setCurrentIndex(newIndex);
      setTimeout(() => {
        setIsAnimating(false);
        isAnimatingRef.current = false;
      }, 400);
    },
    []
  );

  const nextReview = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setSlideDirection("right");
  }, [reviews.length]);

  const prevReview = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setSlideDirection("left");
  }, [reviews.length]);

  // Auto-move slider every 4.0 seconds when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextReview();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, nextReview]);

  const review = reviews[currentIndex];

  return (
    <section
      id="reviews"
      className="py-16 lg:py-24 bg-[#0E0E0E] border-t border-[#D4AF37]/25 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Title — scroll reveal */}
        <div
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
          data-reveal="up"
        >
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">
            <span className="w-6 h-px bg-[#D4AF37]/40" />
            CUSTOMER REVIEWS
            <span className="w-6 h-px bg-[#D4AF37]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
            What Our Customers Say
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Verified Google reviews from villa owners, architects, and homeowners in Chennai.
          </p>
        </div>

        {/* Auto Moving Card Container */}
        <div className="max-w-4xl mx-auto relative" data-reveal="scale">
          {/* Animated Progress Bar */}
          <div className="w-full bg-[#161616] h-1.5 rounded-full mb-4 overflow-hidden border border-[#D4AF37]/20">
            <div
              ref={progressRef}
              key={`progress-${currentIndex}-${isPlaying}`}
              className={`bg-[#D4AF37] h-full rounded-full ${
                isPlaying ? "animate-progress-bar" : ""
              }`}
              style={{ width: isPlaying ? undefined : "0%" }}
            />
          </div>

          <div className="bg-[#161616] rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/25 shadow-2xl relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
            <MessageSquareQuote className="absolute top-6 right-6 w-16 h-16 text-[#D4AF37]/10" />

            <div
              key={currentIndex}
              className={`space-y-6 relative z-10 ${
                slideDirection === "right"
                  ? "animate-slide-carousel"
                  : "animate-slide-carousel-reverse"
              }`}
            >
              {/* Stars & Date */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  {review.date}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-slate-200 font-serif italic text-lg sm:text-xl leading-relaxed min-h-[80px]">
                &ldquo;{review.review}&rdquo;
              </p>

              {/* Author & Showroom */}
              <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-base">
                      {review.name}
                    </span>
                    {review.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Verified Google Review
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {review.location} • {review.showroom}
                  </div>
                </div>

                {/* Direct Google Review Link */}
                <a
                  href="https://maps.google.com/?q=ASHIK+LIGHTS+Teynampet+Chennai"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:underline"
                >
                  <span>Read on Google Maps →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Controls & Counter Badge */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-full bg-[#161616] border border-[#D4AF37]/30 text-slate-300 hover:text-[#D4AF37] hover:border-[#D4AF37] flex items-center justify-center transition-all duration-300 cursor-pointer"
                title={isPlaying ? "Pause auto-scroll" : "Play auto-scroll"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              <div className="text-xs font-semibold text-slate-300 bg-[#161616] px-3 py-1 rounded-full border border-[#D4AF37]/30">
                <span className="text-[#D4AF37] font-bold">{currentIndex + 1}</span> / {reviews.length} Reviews
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevReview}
                className="w-10 h-10 rounded-full bg-[#161616] border border-[#D4AF37]/30 text-slate-200 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:shadow-md flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                className="w-10 h-10 rounded-full bg-[#161616] border border-[#D4AF37]/30 text-slate-200 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:shadow-md flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
