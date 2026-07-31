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
        "We bought retractable BLDC wooden fans and LED vanity mirrors from Ashik Lights Teynampet for our new home. Super quiet fans and anti-fog demister mirrors work flawlessly!",
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
        "Best luxury lighting store in Chennai. Exceptional crystal quality, genuine 3-year on-site warranty, and courteous staff at Ashik Lights Teynampet!",
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
        "We replaced all traditional fans with BLDC retractable crystal fans from Ashik Lights Teynampet. Electricity bills are down and the living room looks like a 5-star hotel!",
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
        "Prompt service, transparent guidance and reliable 3-year warranty. Ashik Lights Teynampet is Chennai's best lighting store without doubt.",
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

  // Auto-move slider every 3.0 seconds when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextReview();
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, nextReview]);

  const review = reviews[currentIndex];

  return (
    <section
      id="reviews"
      className="py-16 lg:py-24 bg-[#FAF6F0] border-t border-[#EAE3D2] overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Title — scroll reveal */}
        <div
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
          data-reveal="up"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE3D2] shadow-2xs">
            {/* Google G SVG */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span className="text-xs font-bold text-slate-800">4.9 / 5.0 Rating on Google</span>
            <div className="flex items-center text-amber-400">
              <Star className="w-3 h-3 fill-amber-400" />
              <Star className="w-3 h-3 fill-amber-400" />
              <Star className="w-3 h-3 fill-amber-400" />
              <Star className="w-3 h-3 fill-amber-400" />
              <Star className="w-3 h-3 fill-amber-400" />
            </div>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1A1813]">
            What Our Customers Say
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Verified Google reviews from villa owners, architects, and homeowners in Chennai.
          </p>
        </div>

        {/* Auto Moving Card Container */}
        <div className="max-w-4xl mx-auto relative" data-reveal="scale">
          {/* Animated Progress Bar */}
          <div className="w-full bg-slate-200 h-1 rounded-full mb-4 overflow-hidden">
            <div
              ref={progressRef}
              key={`progress-${currentIndex}-${isPlaying}`}
              className={`bg-[#B8860B] h-full rounded-full ${
                isPlaying ? "animate-progress-bar" : ""
              }`}
              style={{ width: isPlaying ? undefined : "0%" }}
            />
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EAE3D2] shadow-xl relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
            <MessageSquareQuote className="absolute top-6 right-6 w-16 h-16 text-[#B8860B]/10" />

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
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  {review.date}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-slate-800 font-serif italic text-lg sm:text-xl leading-relaxed min-h-[80px]">
                &ldquo;{review.review}&rdquo;
              </p>

              {/* Author & Showroom */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-base">
                      {review.name}
                    </span>
                    {review.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified Google Review
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {review.location} • {review.showroom}
                  </div>
                </div>

                {/* Direct Google Review Link */}
                <a
                  href="https://maps.google.com/?q=ASHIK+LIGHTS+Teynampet+Chennai"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#B8860B] hover:underline"
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
                className="w-8 h-8 rounded-full bg-white border border-[#EAE3D2] text-slate-600 hover:text-[#B8860B] hover:border-[#B8860B] flex items-center justify-center transition-all duration-300 cursor-pointer"
                title={isPlaying ? "Pause auto-scroll" : "Play auto-scroll"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              <div className="text-xs font-semibold text-slate-600 bg-white px-3 py-1 rounded-full border border-[#EAE3D2]">
                <span className="text-[#B8860B] font-bold">{currentIndex + 1}</span> / {reviews.length} Reviews
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevReview}
                className="w-10 h-10 rounded-full bg-white border border-[#EAE3D2] shadow-2xs hover:border-[#B8860B] hover:text-[#B8860B] hover:shadow-md flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                className="w-10 h-10 rounded-full bg-white border border-[#EAE3D2] shadow-2xs hover:border-[#B8860B] hover:text-[#B8860B] hover:shadow-md flex items-center justify-center transition-all duration-300 cursor-pointer"
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
