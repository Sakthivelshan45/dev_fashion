import Image from "next/image";
import Link from "next/link";
import { Sparkles, Scissors, Heart, Ruler, Globe, ArrowRight, ShieldCheck, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "About Our Brand",
  description: "Learn more about the craftsmanship, heritage, and tailor expertise of Dev Fashion boutique. Handcrafted luxury designer wear for global buyers.",
};

const stats = [
  { value: "12+", label: "Years of Craftsmanship" },
  { value: "10,000+", label: "Happy Customers" },
  { value: "25,000+", label: "Bespoke Outfits Delivered" },
  { value: "15+", label: "Countries Shipped To" }
];

const processes = [
  { step: "01", title: "Styling Consultation", desc: "Collaborate with our designers via virtual video calls or in person at our studio. We discuss silhouette layouts, necklines, sleeves, custom cuts, and embroidery options." },
  { step: "02", title: "Fabric & Embellishment Selection", desc: "Choose from our curated collection of premium raw silk, Banarasi, pure organza, chiffon, and velvet. Or send us your own fabrics to stitch." },
  { step: "03", title: "Pattern Drafting & Embroidery", desc: "Every garment is custom-drafted onto paper patterns before cutting. Our skilled local artisans (karigars) handcraft exquisite embroidery (zardozi, beads, aari, and stones)." },
  { step: "04", title: "Perfect Fit Stitching", desc: "Our tailors assemble the pieces with exact alignments, premium inner linings, double stitching, and margins for future alterations. Standard stitching takes 7-10 business days." }
];

export default function AboutPage() {
  return (
    <div className="w-full bg-white pt-24">
      {/* Page Header Banner */}
      <section className="bg-gold-50/50 py-16 sm:py-24 border-b border-gold-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-pastel-blush/10 rounded-full blur-3xl pointer-events-none translate-y-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
            ✦ Discover Dev Fashion
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-stone-950 mb-6">
            Our Legacy & Craftsmanship
          </h1>
          <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" />
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Dedicated to creating flawless bridal wear, custom-tailored designer blouses, and timeless ethnic ensembles that celebrate you.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Story Image */}
          <div className="relative aspect-[4/5] border border-gold-300 p-3 bg-white shadow-2xl max-w-md mx-auto w-full">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
                alt="Dev Fashion Boutique Tailoring Craft"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Story Text */}
          <div className="flex flex-col space-y-6 sm:space-y-8 text-stone-900">
            <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block">
              ✦ Handcrafted Excellence
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-wide text-stone-950">
              The Art of Custom Tailoring
            </h2>
            <div className="h-[1px] w-16 bg-gold-500" />
            
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Founded in 2012, Dev Fashion has grown from a local boutique studio into a trusted designer label for clients worldwide. Our vision is simple: to make custom clothing accessible, professional, and perfectly fitted.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              We understand that every individual is unique. Standard sizing off-the-rack garments often fall short in fit and styling details. That is why we specialize in bespoke custom blouse stitching, designer sarees, wedding gowns, and premium boutique alterations. We combine ancient handloom techniques with contemporary silhouettes to design outfits that stand out.
            </p>

            {/* Stats list */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gold-150">
              {stats.map((s, i) => (
                <div key={i}>
                  <span className="block font-serif text-2xl font-bold text-gold-600">{s.value}</span>
                  <span className="text-[10px] uppercase font-semibold tracking-widest text-stone-500 mt-1 block">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Design Process Section */}
      <section className="py-20 bg-gold-50/20 border-t border-b border-gold-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
              ✦ Precision in Details
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-wide text-stone-950 mb-4">
              How We Create Your Outfits
            </h2>
            <div className="h-[1px] w-20 bg-gold-500 mb-5" />
            <p className="text-stone-600 text-sm">
              We follow a thorough, high-end process to ensure absolute design precision and perfect fit sizing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((p, i) => (
              <div key={i} className="bg-white border border-gold-200/50 p-8 flex flex-col h-full hover:border-gold-500 hover:shadow-xl transition-all duration-300">
                <span className="font-serif text-3xl font-bold text-gold-500/30 mb-4 block">
                  {p.step}
                </span>
                <h3 className="font-serif text-lg font-semibold tracking-wide text-stone-900 mb-3">
                  {p.title}
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mt-auto">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International NRI Orders & Virtual Fittings */}
      <section className="py-20 sm:py-24 bg-stone-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Info Text */}
            <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8">
              <span className="text-[10px] font-semibold tracking-widest text-gold-400 uppercase block">
                ✦ International Service
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-white">
                Seamless NRI & Worldwide Orders
              </h2>
              
              <div className="h-[1px] w-16 bg-gold-500" />
              
              <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
                Dev Fashion takes pride in catering to our international customers residing in the USA, UK, Canada, Australia, Singapore, and the UAE. We have customized our workflows to ensure a perfect boutique experience, no matter the distance:
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-stone-300">
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 text-gold-500 shrink-0">✔</div>
                  <p><strong>Virtual Video Call consultations</strong> - Choose fabrics, necklines, borders, and styles interactively with our team.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 text-gold-500 shrink-0">✔</div>
                  <p><strong>Step-by-Step Measurement Guide</strong> - Our stylists assist you over a video call to ensure accurate measurements are taken at home.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 text-gold-500 shrink-0">✔</div>
                  <p><strong>Courier Delivery with tracking</strong> - Safe, insured, and expedited delivery via premium shipping carriers (DHL/FedEx).</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contact#booking"
                  className="px-6 py-3 bg-gold-500 text-white hover:bg-gold-600 text-xs font-semibold tracking-widest uppercase transition-colors"
                >
                  Book Virtual Session
                </Link>
                <a
                  href="https://wa.me/919025751328?text=Hi%20Dev%20Fashion%2C%20I'd%20like%20to%20place%20an%20international%20custom%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-stone-750 text-stone-200 hover:text-white hover:border-white text-xs font-semibold tracking-widest uppercase transition-colors"
                >
                  WhatsApp International Support
                </a>
              </div>
            </div>

            {/* Showcase Image */}
            <div className="lg:col-span-5 relative aspect-[4/5] border border-gold-900/30 p-2 bg-stone-900 shadow-2xl max-w-sm mx-auto w-full">
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
                  alt="NRI Indian Designer Outfit Crafting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-gold-50 border border-gold-300 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 stroke-[1.5]" />
          </div>
          
          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-stone-950 mb-4">
            Perfect Fit & Integrity Guarantee
          </h3>
          
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Every garment we produce is tailored to your unique specifications. We guarantee that if your outfit needs alterations, we will modify it at no additional stitching fee. We maintain records of all customer measurements securely to facilitate effortless future orders.
          </p>

          <Link
            href="/contact#booking"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-stone-900 text-white hover:bg-gold-600 text-xs font-semibold tracking-widest uppercase transition-colors shadow-md"
          >
            Start Designing Today
            <ArrowRight className="w-4.5 h-4.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
