'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, FileText } from 'lucide-react';

interface CollectionData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  smallImage: string;
  largeImage: string;
  pdfUrl?: string;
  pdfPage?: number;
  galleryImages?: string[];
}

const collectionsDatabase: Record<string, CollectionData> = {
  'dining-table': {
    id: '1',
    title: 'DINING TABLE',
    subtitle: 'Premium Furniture',
    description: 'Exquisite stone dining tables that combine elegance and durability, perfect for creating memorable dining experiences. Each piece is crafted with precision to bring timeless beauty to your dining space.',
    smallImage: '/collections/stonesgallerycollections/diningtablesmall.webp',
    largeImage: '/collections/stonesgallerycollections/diningtablebig.webp',
    pdfUrl: '/collections/allproductsareinthis.pdf',
    pdfPage: 4
  },
  'modern-art': {
    id: '2',
    title: 'MODERN ART',
    subtitle: 'Artistic Collection',
    description: 'Contemporary stone art pieces that bring sophistication and artistic expression to your living spaces. Each sculpture tells a unique story through natural stone.',
    smallImage: '/collections/stonesgallerycollections/modernartsmall.webp',
    largeImage: '/collections/stonesgallerycollections/modernartbig.webp',
    pdfUrl: '/collections/allproductsareinthis.pdf',
    pdfPage: 4
  },
  'garden-decor': {
    id: '3',
    title: 'GARDEN DECOR',
    subtitle: 'Outdoor Collection',
    description: 'Beautiful stone garden decorations that enhance your outdoor spaces with natural elegance and timeless beauty. Perfect for creating serene outdoor environments.',
    smallImage: '/collections/stonesgallerycollections/gardendecorsmall.webp',
    largeImage: '/collections/stonesgallerycollections/gardendecorbig.webp',
    pdfUrl: '/collections/allproductsareinthis.pdf',
    pdfPage: 7
  },
  'fountain': {
    id: '4',
    title: 'FOUNTAIN',
    subtitle: 'Water Features',
    description: 'Magnificent stone fountains that add a touch of luxury and tranquility to any space. The perfect centerpiece for gardens and courtyards.',
    smallImage: '/collections/stonesgallerycollections/fountainsmall.webp',
    largeImage: '/collections/stonesgallerycollections/fountainbig.webp',
    pdfUrl: '/collections/allproductsareinthis.pdf',
    pdfPage: 8
  },
  'idols': {
    id: '5',
    title: 'IDOLS',
    subtitle: 'Spiritual Collection',
    description: 'Beautifully carved stone idols that bring spiritual elegance and divine presence to your sacred spaces. Each piece is crafted with devotion and attention to detail.',
    smallImage: '/collections/stonesgallerycollections/idolssmall.webp',
    largeImage: '/collections/stonesgallerycollections/idolsbig.webp',
    pdfUrl: '/collections/allproductsareinthis.pdf',
    pdfPage: 2
  },
  'temples': {
    id: '6',
    title: 'TEMPLES',
    subtitle: 'Sacred Structures',
    description: 'Exquisite stone temples that create a divine atmosphere in your home. Masterfully crafted with traditional designs and modern craftsmanship.',
    smallImage: '/collections/stonesgallerycollections/templessmall.webp',
    largeImage: '/collections/stonesgallerycollections/templesbig.webp',
    pdfUrl: '/collections/allproductsareinthis.pdf',
    pdfPage: 3
  },
  'wall-panel': {
    id: '7',
    title: 'WALL PANEL',
    subtitle: 'Decorative Panels',
    description: 'Stunning stone wall panels featuring intricate chakra designs that add depth, texture, and artistic appeal to any interior space.',
    smallImage: '/collections/stonesgallerycollections/wallpanelchakrasmall.webp',
    largeImage: '/collections/stonesgallerycollections/WALLPANELBIG.webp',
    pdfUrl: '/collections/allproductsareinthis.pdf',
    pdfPage: 6
  },
  'tulsi-pots': {
    id: '8',
    title: 'TULSI POTS',
    subtitle: 'Sacred Planters',
    description: 'Handcrafted stone tulsi pots in various sizes and designs. Available in Makrana marble, sandstone, and granite. Perfect for your sacred tulsi plant.',
    smallImage: '/tulsi pot/makarana marble 25x18x18.jpg',
    largeImage: '/tulsi pot/custom tulsi pots.jpg',
    galleryImages: [
      '/tulsi pot/makarana marble 27x16.jpg',
      '/tulsi pot/makarana marble 34x15x15.png',
      '/tulsi pot/sandstone 20x15x15.png',
      '/tulsi pot/sadarahalli granite 22x17x17.jpg',
      '/tulsi pot/pink sandstone.jpg',
      '/tulsi pot/custom tulsi pots1.jpg',
      '/tulsi pot/custom tulsi pots2.jpg',
      '/tulsi pot/custom tulsi pots3.jpg',
    ]
  },
  'marble-temples': {
    id: '9',
    title: 'MARBLE TEMPLES',
    subtitle: 'Premium Marble Mandirs',
    description: 'Exquisite marble temples crafted from premium Makrana and Vietnam marble. Features intricate carvings, mother of pearl inlay, and traditional designs.',
    smallImage: '/Marble temples/heritage crown mandir.jpg',
    largeImage: '/Marble temples/majestic lotus pavilion.jpg',
    galleryImages: [
      '/Marble temples/eternal grace mandir.jpg',
      '/Marble temples/royal heritage shrine.jpg',
      '/Marble temples/shikhar bliss mandir.jpg',
      '/Marble temples/vibrant heritage mandir.jpg',
      '/Marble temples/marble serenity mandap.jpg',
      '/Marble temples/tranquil marble niche.jpg',
      '/Marble temples/serene lotus alcove.jpg',
      '/Marble temples/blissful sanctuary mandap.jpg',
    ]
  },
  'customised-temples': {
    id: '10',
    title: 'CUSTOMISED TEMPLES',
    subtitle: 'Bespoke Designs',
    description: 'Custom-designed temples tailored to your specific requirements. From modern minimalist to traditional ornate designs, we create sacred spaces that reflect your vision.',
    smallImage: '/Customised Temples/divine majesty mandir.jpg',
    largeImage: '/Customised Temples/grand heritage mandap.jpg',
    galleryImages: [
      '/Customised Temples/celestial serenity mandap.jpg',
      '/Customised Temples/golden grace temple.jpg',
      '/Customised Temples/peacock splendor mandap.jpg',
      '/Customised Temples/regal peacock alcove.jpg',
      '/Customised Temples/tree of life mandir.jpg',
      '/Customised Temples/royal arches sanctuary.jpg',
      '/Customised Temples/ganesh harmony sanctuary.jpg',
      '/Customised Temples/lotus entrance mandap.jpg',
    ]
  }
};

interface CollectionDetailProps {
  slug?: string;
}

const CollectionDetail: React.FC<CollectionDetailProps> = ({ slug = 'dining-table' }) => {
  const collection = collectionsDatabase[slug] || collectionsDatabase['dining-table'];
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showPdfViewer, setShowPdfViewer] = useState(false);

  const collectionSlugs = Object.keys(collectionsDatabase);
  const currentIndex = collectionSlugs.indexOf(slug);
  
  const nextCollection = collectionSlugs[(currentIndex + 1) % collectionSlugs.length];
  const prevCollection = collectionSlugs[(currentIndex - 1 + collectionSlugs.length) % collectionSlugs.length];

  return (
    <div className="min-h-screen bg-white">
      {/* PDF Viewer Modal */}
      {showPdfViewer && collection.pdfUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full h-full max-w-7xl max-h-screen flex flex-col bg-white rounded-lg shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-stone-200 bg-stone-50">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-stone-700" />
                <h2 className="text-lg md:text-xl font-light tracking-wider uppercase text-stone-800">
                  {collection.title} Catalog
                </h2>
              </div>
              <button
                onClick={() => setShowPdfViewer(false)}
                className="p-2 hover:bg-stone-200 rounded-lg transition-colors group"
                aria-label="Close PDF viewer"
              >
                <X className="h-6 w-6 text-stone-700 group-hover:text-stone-900" />
              </button>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={`${collection.pdfUrl}#page=${collection.pdfPage || 1}`}
                className="w-full h-full border-0"
                title={`${collection.title} PDF Catalog`}
              />
            </div>
            
            {/* Modal Footer */}
            <div className="flex items-center justify-between p-4 border-t border-stone-200 bg-stone-50">
              <a
                href={collection.pdfUrl}
                download
                className="px-6 py-2 border border-stone-800 hover:bg-stone-800 hover:text-white transition-all duration-300 text-stone-800 tracking-wider text-sm"
              >
                DOWNLOAD PDF
              </a>
              <button
                onClick={() => setShowPdfViewer(false)}
                className="px-6 py-2 bg-stone-800 text-white hover:bg-stone-700 transition-all duration-300 tracking-wider text-sm"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Collection Detail - Split Layout */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
            {/* Left Side - Info & Small Image */}
            <div className="space-y-8 order-2 md:order-1">
              <div>
                <h1 className="text-4xl md:text-5xl font-light tracking-widest uppercase mb-3">
                  {collection.title}
                </h1>
                <p className="text-sm md:text-base tracking-wider text-stone-600 mb-6">
                  {collection.subtitle}
                </p>
                <p className="text-base md:text-lg text-stone-700 leading-relaxed mb-8">
                  {collection.description}
                </p>
              </div>

              {/* Small Image */}
              <div className="relative h-64 md:h-72 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={collection.smallImage}
                  alt={`${collection.title} - Small`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-10 py-3 md:py-4 border border-stone-800 hover:bg-stone-800 hover:text-white transition-all duration-300 text-stone-800 tracking-wider text-sm md:text-base">
                  EXPLORE MORE
                </button>
                
                {collection.pdfUrl && (
                  <button 
                    onClick={() => setShowPdfViewer(true)}
                    className="px-10 py-3 md:py-4 border border-stone-800 bg-stone-800 text-white hover:bg-stone-700 transition-all duration-300 tracking-wider text-sm md:text-base flex items-center justify-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    VIEW CATALOG
                  </button>
                )}
              </div>
            </div>

            {/* Right Side - Large Image */}
            <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden shadow-2xl order-1 md:order-2">
              <Image
                src={collection.largeImage}
                alt={collection.title}
                fill
                className={`object-cover transition-all duration-700 ${
                  imageLoaded ? 'scale-100 blur-0' : 'scale-110 blur-sm'
                }`}
                sizes="(max-width: 768px) 100vw, 50vw"
                onLoadingComplete={() => setImageLoaded(true)}
                priority
              />
            </div>
          </div>

          {/* Gallery Section - Only show if collection has gallery images */}
          {collection.galleryImages && collection.galleryImages.length > 0 && (
            <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-stone-200">
              <div className="mb-8 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-light tracking-widest uppercase text-center mb-4">
                  Collection Gallery
                </h3>
                <p className="text-center text-stone-600 tracking-wide">
                  Explore more designs from our {collection.title.toLowerCase()} collection
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {collection.galleryImages.map((image, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                    <Image
                      src={image}
                      alt={`${collection.title} - Gallery ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation between collections */}
          <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-stone-200">
            <div className="flex items-center justify-between mb-8 md:mb-12">
              <h3 className="text-xl md:text-2xl font-light tracking-widest uppercase">
                More Collections
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {collectionSlugs.slice(0, 3).map((collSlug) => {
                const col = collectionsDatabase[collSlug];
                return (
                  <a
                    key={col.id}
                    href={`/pages/our-collection?collection=${collSlug}`}
                    className="group"
                  >
                    <div className="relative h-72 md:h-80 mb-4 overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={col.largeImage}
                        alt={col.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h4 className="text-lg md:text-xl font-light tracking-widest uppercase group-hover:text-stone-600 transition">
                      {col.title}
                    </h4>
                    <p className="text-sm text-stone-600 tracking-wider mt-2">
                      {col.subtitle}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="bg-stone-50 py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href={`/pages/our-collection?collection=${prevCollection}`}
            className="flex items-center gap-2 text-stone-800 hover:text-stone-600 transition group"
          >
            <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="tracking-wider text-sm md:text-base">PREVIOUS</span>
          </a>

          <div className="flex gap-3">
            {collectionSlugs.map((collSlug, index) => (
              <a
                key={index}
                href={`/pages/our-collection?collection=${collSlug}`}
                className={`w-3 h-3 rounded-full transition-all ${
                  collSlug === slug
                    ? 'bg-stone-800 w-8'
                    : 'bg-stone-300 hover:bg-stone-600'
                }`}
                aria-label={`Go to ${collectionsDatabase[collSlug].title}`}
              />
            ))}
          </div>

          <a
            href={`/pages/our-collection?collection=${nextCollection}`}
            className="flex items-center gap-2 text-stone-800 hover:text-stone-600 transition group"
          >
            <span className="tracking-wider text-sm md:text-base">NEXT</span>
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CollectionDetail;
