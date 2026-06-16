"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  designType: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Bridal Customer",
    location: "Coimbatore",
    rating: 5,
    comment: "The custom wedding blouse stitching was absolute perfection. I requested an intricate zardozi work design, and Dev Fashion delivered a true masterpiece. The fit was flawless on the first try! Absolutely love their work.",
    designType: "Bridal Velvet Blouse"
  },
  {
    id: 2,
    name: "Neha Kapoor",
    role: "NRI Customer",
    location: "London, UK",
    rating: 5,
    comment: "Living abroad makes it hard to get custom Indian outfits. Their online measurement consultation was incredibly thorough and precise. My designer saree blouses arrived on time and fit like a second skin. Incredible service!",
    designType: "Designer Saree & Blouse"
  },
  {
    id: 3,
    name: "Anjali Menon",
    role: "Premium Fashion Client",
    location: "Mumbai",
    rating: 5,
    comment: "Excellent fabric selection, flawless finishing, and highly professional designers. They understand exactly what suits your body type and occasion. I will definitely be getting all my ethnic wear designed here.",
    designType: "Festive Anarkali Suit"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Slide animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const current = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      {/* Background Quote Mark */}
      <div className="absolute top-0 left-6 text-gold-200/20 pointer-events-none select-none">
        <Quote className="w-40 h-40 stroke-[0.5]" />
      </div>

      <div className="relative overflow-hidden min-h-[300px] flex flex-col justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-center flex flex-col items-center"
          >
            {/* Rating Stars */}
            <div className="flex justify-center gap-1.5 mb-6 text-gold-500">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="font-serif text-lg md:text-xl lg:text-2xl italic text-stone-800 leading-relaxed max-w-2xl mb-8">
              "{current.comment}"
            </p>

            {/* Customer Details */}
            <div className="flex flex-col items-center">
              {/* Avatar placeholder with luxury monogram */}
              <div className="w-14 h-14 bg-stone-900 border border-gold-300 text-gold-300 rounded-full flex items-center justify-center font-serif text-lg tracking-widest font-semibold mb-3">
                {current.name.split(" ").map(n => n[0]).join("")}
              </div>

              <h4 className="font-serif text-base font-semibold tracking-wide text-stone-900">
                {current.name}
              </h4>
              
              <p className="text-xs text-gold-600 font-semibold tracking-widest uppercase mt-0.5">
                {current.role} • {current.location}
              </p>
              
              <span className="inline-block mt-2 px-3 py-1 bg-gold-100/40 border border-gold-200/50 text-[10px] text-stone-600 uppercase tracking-widest font-medium">
                {current.designType}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="w-10 h-10 border border-gold-300 hover:border-gold-500 text-stone-700 hover:text-gold-600 rounded-none flex items-center justify-center transition-all bg-white shadow-sm"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 border border-gold-300 hover:border-gold-500 text-stone-700 hover:text-gold-600 rounded-none flex items-center justify-center transition-all bg-white shadow-sm"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
