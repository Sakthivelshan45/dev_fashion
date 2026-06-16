import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata = {
  title: "Bespoke Design Gallery",
  description: "Browse through our collection of premium bridal blouses, custom designer wear, party wear outfits, and traditional designs.",
};

export default function GalleryPage() {
  return (
    <div className="w-full bg-white pt-24 min-h-screen">
      {/* Page Header */}
      <section className="bg-gold-50/50 py-16 sm:py-24 border-b border-gold-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] font-semibold tracking-widest text-gold-600 uppercase block mb-3">
            ✦ Lookbook & Inspiration
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-stone-950 mb-6">
            Our Signature Gallery
          </h1>
          <div className="h-[1.5px] w-20 bg-gold-500 mx-auto mb-6" />
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A showcase of custom ethnic wear, designer blouses, and bridal silhouettes crafted for our clients. Click on any design to request customization.
          </p>
        </div>
      </section>

      {/* Gallery Showcase Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryLightbox />
      </section>
    </div>
  );
}
