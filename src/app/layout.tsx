import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dev Fashion | Premium Women's Boutique & Custom Tailoring",
    template: "%s | Dev Fashion Boutique"
  },
  description: "Dev Fashion is a premium luxury women's boutique in India. We specialize in custom designer blouses, bridal wear stitching, custom measurements, and international shipping. Experience perfect fit tailoring and elite ethnic fashion.",
  keywords: ["Boutique Near Me", "Custom Blouse Stitching", "Bridal Boutique", "Designer Blouse", "Women's Fashion Boutique", "Bridal Wear Designer", "Tailoring Services", "Fashion Boutique"],
  authors: [{ name: "Dev Fashion Team" }],
  openGraph: {
    title: "Dev Fashion | Premium Women's Boutique & Custom Tailoring",
    description: "Premium women's fashion design, custom designer blouse stitching, and luxury bridal wear.",
    url: "https://devfashion.com",
    siteName: "Dev Fashion",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gold-50 text-stone-900 font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
