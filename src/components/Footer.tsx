// import Link from "next/link";
// import Image from "next/image";
// import { Mail, Phone, MapPin, Clock } from "lucide-react";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-stone-950 text-stone-300 border-t border-gold-900/20 pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
//         {/* Brand Info */}
//         <div className="flex flex-col space-y-4">
//           <Link href="/" className="flex items-center gap-3 group">
//             <div className="relative h-10 w-10 rounded-full border border-gold-400 bg-white p-0.5 overflow-hidden shrink-0">
//               <Image
//                 src="/logo.jpg"
//                 alt="Dev Fashion Official Logo"
//                 fill
//                 className="object-contain p-0.5"
//               />
//             </div>
//             <div className="flex flex-col">
//               <span className="font-serif text-2xl tracking-widest font-semibold text-white group-hover:text-gold-400 transition-colors">
//                 DEV FASHION
//               </span>
//               <span className="text-[9px] tracking-[0.25em] text-gold-500 uppercase font-medium -mt-1">
//                 Premium Boutique & Tailoring
//               </span>
//             </div>
//           </Link>
//           <p className="text-stone-400 text-sm leading-relaxed">
//             OUR PROMISE
//             Every Dev Fashion outfit is thoughtfully designed to bring together comfort, creativity and timeless elegance. From basic fabric selection to the smallest handcrafted detail, each piece goes through three levels of quality check.
//             <br /><br />
//             Because we believe, you deserve more than something beautiful to wear — you deserve something that feels like you. Every stitch, every detail and every finish is created to make you feel special, confident and truly beautiful.
//           </p>
//           <div className="flex space-x-4 pt-2">
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors" aria-label="Instagram">
//               <svg className="w-5 h-5 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                 <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//               </svg>
//             </a>
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors" aria-label="Facebook">
//               <svg className="w-5 h-5 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//               </svg>
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors" aria-label="Twitter">
//               <svg className="w-5 h-5 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M4 4l11.733 16h4.267l-11.733-16z M4 20l6.768-6.768m2.46-2.46L20 4" />
//               </svg>
//             </a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="font-serif text-lg text-white font-medium tracking-wide mb-5 border-b border-gold-900/30 pb-2">
//             Explore
//           </h3>
//           <ul className="space-y-3 text-sm">
//             <li>
//               <Link href="/" className="hover:text-gold-500 transition-colors">Home</Link>
//             </li>
//             <li>
//               <Link href="/about" className="hover:text-gold-500 transition-colors">About Brand</Link>
//             </li>
//             <li>
//               <Link href="/services" className="hover:text-gold-500 transition-colors">Our Services</Link>
//             </li>
//             <li>
//               <Link href="/classes" className="hover:text-gold-500 transition-colors">Tailoring Classes</Link>
//             </li>
//             <li>
//               <Link href="/gallery" className="hover:text-gold-500 transition-colors">Design Gallery</Link>
//             </li>
//             <li>
//               <Link href="/contact" className="hover:text-gold-500 transition-colors">Book Consultation</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Services List */}
//         <div>
//           <h3 className="font-serif text-lg text-white font-medium tracking-wide mb-5 border-b border-gold-900/30 pb-2">
//             Services
//           </h3>
//           <ul className="space-y-3 text-sm text-stone-400">
//             <li>Custom Blouse Stitching</li>
//             <li>Bridal Wear Design</li>
//             <li>Designer Saree Blouses</li>
//             <li>Alteration Services</li>
//             <li>Boutique Fashion Consultation</li>
//             <li>Occasion Wear Design</li>
//           </ul>
//         </div>

//         {/* Contact Information */}
//         <div>
//           <h3 className="font-serif text-lg text-white font-medium tracking-wide mb-5 border-b border-gold-900/30 pb-2">
//             Connect
//           </h3>
//           <ul className="space-y-4 text-sm text-stone-400">
//             <li className="flex items-start gap-3">
//               <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
//               <span>
//                 9th Street, tatabed,<br />
//                 Gandipuram, coimbatore,<br />
//                 Tamil Nadu 560001, India
//               </span>
//             </li>
//             <li className="flex items-center gap-3">
//               <Phone className="w-5 h-5 text-gold-500 shrink-0" />
//               <a href="tel:+919025751328" className="hover:text-gold-500 transition-colors">+91 80985 58923</a>
//             </li>
//             <li className="flex items-center gap-3">
//               <Mail className="w-5 h-5 text-gold-500 shrink-0" />
//               <a href="mailto:contact@devfashion.com" className="hover:text-gold-500 transition-colors">contact@devfashion.com</a>
//             </li>
//             <li className="flex items-start gap-3">
//               <Clock className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
//               <div>
//                 <span className="block font-medium text-stone-300">Mon - Sat: 10:00 AM - 8:00 PM</span>
//                 <span className="block text-xs">Sunday: 11:00 AM - 5:00 PM (Appointments Only)</span>
//               </div>
//             </li>
//           </ul>
//         </div>

//       </div>

//       {/* Footer Bottom */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-xs text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
//         <div>
//           &copy; {currentYear} Dev Fashion. All rights reserved. Design and developed with love by Shahi.
//         </div>
//         <div className="flex space-x-6">
//           <Link href="/privacy" className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
//           <Link href="/terms" className="hover:text-gold-500 transition-colors">Terms & Conditions</Link>
//         </div>
//         <div className="text-[10px] tracking-widest text-gold-600 font-semibold uppercase">
//           ✦ Secure Design Guarantee ✦
//         </div>
//       </div>
//     </footer>
//   );
// }





"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: wire this up to your email provider / API route
    console.log("Subscribe:", email);
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* ===== Top Section: About | Logo | Subscribe ===== */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-start text-center md:text-left">

          {/* About */}
          <div className="flex flex-col items-center md:items-start space-y-5">
            <h3 className="text-white text-sm tracking-[0.2em] font-semibold uppercase">
              About
            </h3>
            <p className="text-neutral-400 text-[15px] leading-relaxed max-w-xs">
              <span className="text-pink-500 font-semibold">Dev Fashion</span>{" "}
              is a premium boutique &amp; tailoring house founded on comfort,
              creativity and timeless elegance. Every piece passes through
              three levels of quality checks before it reaches you.
            </p>
            <Link
              href="/about"
              className="inline-block border border-neutral-500 text-neutral-200 text-xs tracking-[0.15em] uppercase font-semibold px-7 py-3 rounded-full transition-colors duration-300 hover:bg-pink-500 hover:border-pink-500 hover:text-white"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Logo / Brand */}
          <div className="flex flex-col items-center space-y-4">
            <Link href="/" className="flex flex-col items-center gap-4">
              <div className="relative h-28 w-28 rounded-full bg-pink-500 p-1 overflow-hidden shrink-0">
                <div className="relative h-full w-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/logo.jpg"
                    alt="Dev Fashion Official Logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </div>
              <div className="flex items-baseline gap-2 flex-wrap justify-center">
                <span className="font-serif text-pink-500 text-2xl font-bold tracking-wide">
                  DEV
                </span>
                <span className="font-serif text-white text-2xl font-medium tracking-wide">
                  FASHION
                </span>
              </div>
            </Link>
          </div>

          {/* Subscribe */}
          <div className="flex flex-col items-center md:items-end space-y-5 w-full">
            <h3 className="text-white text-sm tracking-[0.2em] font-semibold uppercase">
              Subscribe
            </h3>

            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-xs rounded-md overflow-hidden"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full bg-white text-neutral-800 placeholder-neutral-400 text-sm px-4 py-3 outline-none rounded-l-md"
              />
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white text-xs tracking-widest uppercase font-bold px-6 whitespace-nowrap transition-colors duration-300 rounded-r-md"
              >
                {subscribed ? "Thanks!" : "Sign Me Up!"}
              </button>
            </form>

            <div className="flex space-x-5 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583-.002.02-.002.04-.002.06 0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.096 7.14 2.096 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.198-4.354-2.618-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.017 0C5.396 0 0 5.396 0 12.017c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.406.042-3.44.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.024 0 1.518.769 1.518 1.69 0 1.03-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.066-4.881-5.014-4.881-3.415 0-5.418 2.561-5.418 5.208 0 1.031.397 2.138.893 2.741a.36.36 0 0 1 .083.345c-.09.375-.293 1.194-.332 1.361-.053.219-.174.265-.402.16-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.379l-.748 2.853c-.271 1.043-1.003 2.352-1.494 3.149C9.144 23.803 10.53 24 12.017 24c6.62 0 11.983-5.396 11.983-11.983C24 5.396 18.637 0 12.017 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Middle Section: Three Location / Info Columns ===== */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          <div>
            <h4 className="text-neutral-200 text-sm tracking-[0.15em] uppercase font-semibold mb-3">
              Coimbatore, TN
            </h4>
            <p className="text-sm text-neutral-500 leading-relaxed">
              9th Street, Tatabad,<br />
              Gandipuram, Coimbatore,<br />
              Tamil Nadu 641001, India
            </p>
          </div>

          <div>
            <h4 className="text-neutral-200 text-sm tracking-[0.15em] uppercase font-semibold mb-3">
              Explore
            </h4>
            <p className="text-sm text-neutral-500 leading-relaxed space-x-0">
              <Link href="/" className="hover:text-pink-500 transition-colors">Home</Link>
              {" · "}
              <Link href="/services" className="hover:text-pink-500 transition-colors">Services</Link>
              {" · "}
              <Link href="/classes" className="hover:text-pink-500 transition-colors">Classes</Link>
              {" · "}
              <Link href="/gallery" className="hover:text-pink-500 transition-colors">Gallery</Link>
            </p>
          </div>

          <div>
            <h4 className="text-neutral-200 text-sm tracking-[0.15em] uppercase font-semibold mb-3">
              Get In Touch
            </h4>
            <p className="text-sm text-neutral-500 leading-relaxed">
              <a href="tel:+918098558923" className="hover:text-pink-500 transition-colors">+91 80985 58923</a>
              <br />
              <a href="mailto:contact@devfashion.com" className="hover:text-pink-500 transition-colors">contact@devfashion.com</a>
            </p>
          </div>

        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6 flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 text-xs text-neutral-500 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-2">
            <span>&copy; {currentYear} Dev Fashion</span>
            <span>|</span>
            <Link href="/privacy" className="hover:text-pink-500 transition-colors">Policies</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-pink-500 transition-colors">Terms &amp; Conditions</Link>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="hidden md:flex items-center justify-center h-8 w-8 rounded-full text-neutral-500 hover:text-pink-500 transition-colors duration-300"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};