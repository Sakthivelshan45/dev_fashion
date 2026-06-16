"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Heart, Award, Sparkles, Scissors, Globe, Lock, Truck, Ruler, CheckCircle } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import GalleryLightbox from "@/components/GalleryLightbox";
import BookingForm from "@/components/BookingForm";

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "25K+", label: "Bespoke Designs Delivered" },
  { value: "5K+", label: "Bridal Orders Completed" },
  { value: "2K+", label: "International Clients" },
];

const featuredServices = [
  { title: "Custom Blouse Stitching", description: "Bespoke designer blouses tailored to perfection with custom necklines, sleeve details, and padding choices.", iconName: "Scissors" },
  { title: "Bridal Wear Design", description: "Elite lehengas and wedding outfits intricately embroidered with premium zardozi and stone craftsmanship.", iconName: "Sparkles" },
  { title: "Designer Saree Blouses", description: "Elegant couture designs matching modern cutouts and traditional handlooms.", iconName: "Heart" },
  { title: "Alteration Services", description: "Ensure your favorite garments fit flawlessly with our professional fitting and adjustment services.", iconName: "Ruler" },
  { title: "Boutique Fashion Consultation", description: "One-on-one styling guidance with fashion designers to curate fabrics, colors, and cuts.", iconName: "Award" },
  { title: "Occasion Wear Design", description: "Elegant outfits tailored for receptions, sangeets, festive socials, and family events.", iconName: "Globe" },
];

const highlights = [
  { title: "Premium Fabric Selection", description: "We source only the finest raw silk, Banarasi silk, velvet, organza, and premium linens.", icon: Award },
  { title: "Personalized Designs", description: "Collaborate with dedicated designers to sketch and materialize your dream outfit.", icon: Sparkles },
  { title: "Skilled Tailoring", description: "Crafted by master tailors with decades of experience in high-end ethnic finishing.", icon: Scissors },
  { title: "Perfect Fit Guarantee", description: "Enjoy complimentary fittings and alterations until your garment fits like a second skin.", icon: Ruler },
  { title: "International Support", description: "Custom measurements taken virtually for global and NRI clients with express shipping.", icon: Globe },
  { title: "Secure Customer Privacy", description: "Confidential design consultations, private measurements, and secure transactions.", icon: Lock },
];

export default function HomePage() {
  return (
    <div className="w-full relative bg-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gold-50/45">
        {/* Soft pastel decorative gradient */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pastel-blush/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pastel-sage/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 sm:space-y-8 text-stone-900"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-gold-300 bg-gold-100/35 text-[10px] font-semibold tracking-widest text-gold-700 uppercase rounded-full self-start">
              ✦ Premium Women's Boutique
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-wide text-stone-950">
              Crafting Elegance,<br />
              <span className="luxury-text-gradient">Designed for You</span>
            </h1>
            
            <p className="text-stone-600 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
              Premium boutique, custom tailoring, and designer bridal wear tailored with passion. From exquisite zardozi blouses to customized dream gowns, we guarantee the perfect fit for every occasion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact#booking"
                className="px-8 py-4 bg-stone-900 text-white hover:bg-gold-600 hover:text-white rounded-none text-xs font-semibold tracking-widest uppercase transition-colors text-center shadow-md flex items-center justify-center gap-2.5"
              >
                Book Consultation
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>
              <Link
                href="/gallery"
                className="px-8 py-4 border border-stone-900 text-stone-900 hover:border-gold-600 hover:text-gold-600 rounded-none text-xs font-semibold tracking-widest uppercase transition-colors text-center bg-transparent"
              >
                Explore Collections
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-gold-200/50 flex flex-wrap gap-x-8 gap-y-4 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <div className="flex text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-stone-900">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold-600" />
                <span>Perfect Fit Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gold-600" />
                <span>Worldwide Express Shipping</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[4/5] max-w-lg mx-auto border border-gold-300 p-3 bg-white shadow-2xl"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/hero_model.png"
                alt="Dev Fashion Premium Custom Designer Outfit"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Artistic decorative frame */}
              <div className="absolute inset-4 border border-white/40 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="py-20 sm:py-28 border-t border-gold-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            {/* About Left Image Panel */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] border border-gold-200 p-2 bg-white shadow-md mt-6">
                <div className="relative h-full w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80"
                    alt="Fabric Drafting Studio"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative aspect-[3/4] border border-gold-200 p-2 bg-white shadow-md">
                <div className="relative h-full w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80"
                    alt="Bridal Details"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* About Right Content */}
            <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8 text-stone-900">
              <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block">
                ✦ Legacy & Craftsmanship
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950">
                Crafting Timeless Couture Since 2012
              </h2>
              
              <div className="h-[1px] w-20 bg-gold-500" />
              
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Welcome to <strong>Dev Fashion</strong>, where tailoring meets art. With over a decade of experience in fashion design and boutique custom stitching, we specialize in high-end women's wear, bridal couture, designer saree blouses, and premium alterations.
              </p>
              
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Every design is fully tailored to our clients' precise measurements. Our skilled karigars and master designers work collaboratively to bring your ideas to life. We serve a premium clientele, including brides across India and international NRI customers who rely on our virtual fitting appointments and reliable worldwide delivery.
              </p>

              {/* Stats Block */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gold-200/50">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <span className="block font-serif text-2xl sm:text-3xl font-bold text-gold-600">
                      {stat.value}
                    </span>
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-stone-500 mt-1 block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-stone-900 hover:text-gold-600 uppercase transition-colors underline decoration-gold-400 decoration-2 underline-offset-4"
                >
                  Read Our Full Story
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-20 sm:py-28 bg-gold-50/25 border-t border-b border-gold-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
              ✦ Elite Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950 mb-4">
              Bespoke Design & Tailoring
            </h2>
            <div className="h-[1px] w-20 bg-gold-500 mb-5" />
            <p className="text-stone-600 text-sm">
              Explore our curation of premium tailoring services. Hand-patterned, stitched, and personalized to suit your styling preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, i) => (
              <ServiceCard
                key={i}
                title={service.title}
                description={service.description}
                iconName={service.iconName}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white hover:bg-gold-600 hover:text-white rounded-none text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              View All Services & Pricing
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Featured Collections & 5. Gallery Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
              ✦ Design Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950 mb-4">
              Featured Collections & Gallery
            </h2>
            <div className="h-[1px] w-20 bg-gold-500 mb-5" />
            <p className="text-stone-600 text-sm">
              Discover our signature designs. Browse through high-resolution photography, filter by categories, and request custom tailoring for any design.
            </p>
          </div>

          <GalleryLightbox />
        </div>
      </section>

      {/* 6. Why Choose Dev Fashion */}
      <section className="py-20 sm:py-28 bg-stone-950 text-white relative overflow-hidden">
        {/* Soft lighting decorations */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-900/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center">
            <span className="text-[10px] font-semibold tracking-widest text-gold-400 uppercase block mb-3">
              ✦ The Dev Fashion Edge
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-white mb-4">
              Why Choose Our Studio?
            </h2>
            <div className="h-[1px] w-20 bg-gold-500 mb-5" />
            <p className="text-stone-400 text-sm">
              We combine centuries-old craftsmanship with modern convenience to deliver a premium tailoring experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={i} className="bg-stone-900/40 border border-stone-850 p-8 flex gap-5 hover:border-gold-700/60 transition-all duration-300">
                  <div className="w-12 h-12 bg-stone-800 border border-gold-900/40 text-gold-500 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold tracking-wide text-stone-100 mb-2">
                      {h.title}
                    </h3>
                    <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-stone-900 border border-gold-900/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Truck className="w-12 h-12 text-gold-500 shrink-0" />
              <div>
                <h4 className="font-serif text-lg font-medium text-stone-100">Global Courier Shipping Available</h4>
                <p className="text-stone-400 text-xs mt-1">We safely parcel your design items right to your doorstep, anywhere in the UK, USA, UAE, and beyond.</p>
              </div>
            </div>
            <Link
              href="/services#international"
              className="px-6 py-3 bg-white text-stone-950 hover:bg-gold-500 hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors shrink-0"
            >
              Delivery Guidelines
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Customer Testimonials */}
      <section className="py-20 sm:py-28 border-b border-gold-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center">
            <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
              ✦ Words of Praise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950 mb-4">
              Client Testimonials
            </h2>
            <div className="h-[1px] w-20 bg-gold-500 mb-5" />
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* 8. Appointment Booking */}
      <section id="booking" className="py-20 sm:py-28 bg-gold-50/20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Info text column */}
            <div className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-8">
              <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block">
                ✦ Virtual & In-Studio Booking
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-stone-950">
                Book a Styling Consultation
              </h2>
              
              <div className="h-[1px] w-20 bg-gold-500" />
              
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Schedule a professional design discussion either in person at our Coimbatore studio or virtually via video call.
              </p>

              <div className="space-y-4 text-sm text-stone-700">
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 text-gold-600 mt-0.5 shrink-0">✦</div>
                  <p><strong>Step 1: Consultation</strong> - Share references, fabrics preferences, necklines, and style sketches.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 text-gold-600 mt-0.5 shrink-0">✦</div>
                  <p><strong>Step 2: Measurement</strong> - In-person recording or step-by-step assisted virtual measurement guide.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 text-gold-600 mt-0.5 shrink-0">✦</div>
                  <p><strong>Step 3: Stitched Masterpiece</strong> - Shipped directly to your address with complimentary adjustments.</p>
                </div>
              </div>

              <div className="bg-white border border-gold-250/65 p-6 shadow-sm">
                <p className="text-xs font-semibold text-stone-900 tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-gold-600" />
                  Perfect Fit Guarantee
                </p>
                <p className="text-stone-500 text-xs mt-2 leading-relaxed">
                  We verify each measurement. If the outfit does not fit perfectly, we will modify it at zero extra charge.
                </p>
              </div>
            </div>

            {/* Booking Form column */}
            <div className="lg:col-span-7">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Privacy & Trust */}
      <section className="py-12 bg-stone-900 text-stone-300 border-b border-stone-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gold-600/40 flex items-center justify-center text-gold-500 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-medium text-white">Your Privacy is Our Highest Priority</h4>
                <p className="text-stone-400 text-xs mt-0.5">Confidential measurements, designs, and personal information are protected securely.</p>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 text-[10px] tracking-widest text-gold-500 font-semibold uppercase">
              <span className="px-3 py-1.5 border border-gold-900/40 bg-stone-950/50">Confidentiality Assured</span>
              <span className="px-3 py-1.5 border border-gold-900/40 bg-stone-950/50">Protected Measurements</span>
              <span className="px-3 py-1.5 border border-gold-900/40 bg-stone-950/50">Secure Transactions</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Quick Contact Section */}
      <section className="py-16 bg-white border-b border-gold-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            <div>
              <h4 className="font-serif text-xl font-bold text-stone-900 mb-3">Visit Our Studio</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                12, Premium Fashion Arcade,<br />
                Designer Street, Coimbatore,<br />
                Karnataka 560001, India
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-xl font-bold text-stone-900 mb-3">Enquiries & Styling</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Email: <a href="mailto:contact@devfashion.com" className="hover:text-gold-600 transition-colors">contact@devfashion.com</a><br />
                Phone: <a href="tel:+919025751328" className="hover:text-gold-600 transition-colors">+91 98765 43210</a><br />
                WhatsApp Support: <a href="https://wa.me/919025751328" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:underline">Chat Online</a>
              </p>
            </div>

            <div>
              <h4 className="font-serif text-xl font-bold text-stone-900 mb-3">Business Hours</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                Monday - Saturday: 10:00 AM - 8:00 PM<br />
                Sunday: 11:00 AM - 5:00 PM<br />
                <span className="text-xs text-gold-600 font-semibold uppercase tracking-wider block mt-1">✦ Sunday by Appointment Only</span>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
