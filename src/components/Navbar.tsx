"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gold-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start">
            <span className="font-serif text-2xl tracking-widest font-semibold text-stone-900">
              DEV FASHION
            </span>
            <span className="text-[9px] tracking-[0.25em] text-gold-600 uppercase font-medium -mt-1">
              Premium Boutique & Tailoring
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-wider uppercase font-medium transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-gold-600"
                      : "text-stone-700 hover:text-gold-500"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact#booking"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white hover:bg-gold-600 hover:text-white rounded-none text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-sm border border-stone-900 hover:border-gold-600"
            >
              Book Consultation
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-950 hover:text-gold-600 focus:outline-none p-1.5"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-45 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col justify-between p-6 pt-24 bg-white border-l border-gold-100">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base tracking-wider uppercase font-medium transition-colors duration-200 ${
                    isActive ? "text-gold-600 font-semibold" : "text-stone-700 hover:text-gold-500"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-8 border-t border-gold-100 pt-6">
            <Link
              href="/contact#booking"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-stone-900 text-white rounded-none text-xs font-semibold tracking-widest uppercase transition-all duration-300"
            >
              Book Consultation
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay when Mobile Menu Open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm md:hidden"
        />
      )}
    </nav>
  );
}
