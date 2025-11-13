'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, FileText } from 'lucide-react';
import WallPanelGallery from './wall-panel-gallery';
import MarbleSinksGallery from './marble-sinks-gallery';
import CollectionGallery from './collection-gallery';

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
  slideshowImages?: string[];
}

const collectionsDatabase: Record<string, CollectionData> = {
  'dining-tables': {
    id: '1',
    title: 'DINING TABLES',
    subtitle: 'Elegant Stone Tables',
    description: 'Transform your dining space with our exquisite collection of handcrafted stone dining tables. Each piece is a masterwork of natural beauty and artisan craftsmanship.',
    smallImage: '/collections/stonesgallerycollections/diningtablesmall.webp',
    largeImage: '/collections/stonesgallerycollections/diningtablebig.webp',
    pdfUrl: '/collections/allproductsareinthis.pdf',
    pdfPage: 1,
    slideshowImages: [
      '/redsize/dining_and_tables_0068_polished_stone_dining_table.webp',
      '/redsize/dining_and_tables_0083_large_marble_dining_table.webp',
      '/redsize/dining_and_tables_0095_agate_stone_dining_table.webp',
      '/redsize/dining_and_tables_0112_large_marble_dining_table.webp',
      '/redsize/dining_and_tables_0176_round_stone_dining_table.webp',
      '/redsize/dining_and_tables_0186_rectangular_marble_dining_table.webp',
      '/redsize/dining_and_tables_0196_oval_marble_dining_table.webp',
    ]
  },
  'idols-and-temples': {
    id: '2',
    title: 'IDOLS AND TEMPLES',
    subtitle: 'Sacred Art & Structures',
    description: 'Beautifully carved stone idols and exquisite temples that bring spiritual elegance and divine presence to your sacred spaces. From traditional designs to custom creations, each piece is crafted with devotion and attention to detail using premium Makrana marble and fine stone.',
    smallImage: '/collections/stonesgallerycollections/idolssmall.webp',
    largeImage: '/Marble temples/majestic lotus pavilion.jpg',
    pdfUrl: '/collections/allproductsareinthis.pdf',
    pdfPage: 2,
    slideshowImages: [
      '/redsize/idols_and_temples_0001_black_stone_buddha_idol.webp',
      '/redsize/idols_and_temples_0014_white_stone_deity_idol.webp',
      '/redsize/idols_and_temples_0029_white_and_gold_buddha_idol.webp',
      '/redsize/idols_and_temples_0043_ornate_marble_temple_structure.webp',
      '/redsize/idols_and_temples_0048_intricate_marble_temple_shrine.webp',
      '/redsize/idols_and_temples_0059_large_stone_buddha_statue.webp',
      '/redsize/idols_and_temples_0222_stone_buddha_relief_panel.webp',
    ],
    galleryImages: [
      '/collections/stonesgallerycollections/templessmall.webp',
      '/Marble temples/heritage crown mandir.jpg',
      '/Marble temples/eternal grace mandir.jpg',
      '/Marble temples/royal heritage shrine.jpg',
      '/Marble temples/shikhar bliss mandir.jpg',
      '/Marble temples/vibrant heritage mandir.jpg',
      '/Marble temples/marble serenity mandap.jpg',
      '/Marble temples/tranquil marble niche.jpg',
      '/Marble temples/serene lotus alcove.jpg',
      '/Marble temples/blissful sanctuary mandap.jpg',
      '/Customised Temples/divine majesty mandir.jpg',
      '/Customised Temples/grand heritage mandap.jpg',
      '/Customised Temples/celestial serenity mandap.jpg',
      '/Customised Temples/golden grace temple.jpg',
      '/Customised Temples/peacock splendor mandap.jpg',
      '/Customised Temples/regal peacock alcove.jpg',
      '/Customised Temples/tree of life mandir.jpg',
      '/Customised Temples/royal arches sanctuary.jpg',
      '/Customised Temples/ganesh harmony sanctuary.jpg',
      '/Customised Temples/lotus entrance mandap.jpg',
    ]
  },
  'home-decor': {
    id: '3',
    title: 'HOME DECOR',
    subtitle: 'Contemporary & Garden Elegance',
    description: 'Experience the fusion of traditional stone craftsmanship with modern artistic expression. From contemporary indoor pieces to stunning outdoor sculptures, tulsi pots, and premium marble sinks, each piece adds timeless beauty and sophistication to your living spaces.',
    smallImage: '/collections/stonesgallerycollections/modernartsmall.webp',
    largeImage: '/collections/stonesgallerycollections/modernartbig.webp',
    pdfUrl: '/collections/allproductsareinthis.pdf',
    pdfPage: 7,
    slideshowImages: [
      '/redsize/home_decor_0012_ornate_carved_stone_wall.webp',
      '/redsize/home_decor_0064_carved_stone_lion_sculpture.webp',
      '/redsize/home_decor_0160_stone_freestanding_wash_basin.webp',
      '/redsize/home_decor_0296_decorative_stone_lady_sculptures.webp',
      '/redsize/home_decor_0322_large_striped_stone_vase.webp',
      '/redsize/home_decor_0329_stone_wash_basins_displayed.webp',
    ],
    galleryImages: [
      '/collections/stonesgallerycollections/gardendecorsmall.webp',
      '/collections/stonesgallerycollections/gardendecorbig.webp',
      '/tulsi pot/makarana marble 25x18x18.jpg',
      '/tulsi pot/custom tulsi pots.jpg',
      '/tulsi pot/makarana marble 27x16.jpg',
      '/tulsi pot/makarana marble 34x15x15.png',
      '/tulsi pot/sandstone 20x15x15.png',
      '/tulsi pot/sadarahalli granite 22x17x17.jpg',
      '/tulsi pot/pink sandstone.jpg',
      '/tulsi pot/custom tulsi pots1.jpg',
      '/tulsi pot/custom tulsi pots2.jpg',
      '/tulsi pot/custom tulsi pots3.jpg',
      '/marblesinks/DISH IMPEX MARBLE SINKS WITH PRICE (3) (1)_page-0001.jpg',
      '/marblesinks/DISH IMPEX MARBLE SINKS WITH PRICE (3) (1)_page-0020.jpg',
    ]
  },
  'fountain': {
    id: '4',
    title: 'FOUNTAIN',
    subtitle: 'Water Features',
    description: 'Magnificent stone fountains that add a touch of luxury and tranquility to any space. The perfect centerpiece for gardens and courtyards.',
    smallImage: '/collections/stonesgallerycollections/fountainsmall.webp',
    largeImage: '/collections/stonesgallerycollections/fountainbig.webp',
    pdfUrl: '/collections/allproductsareinthis.pdf',
    pdfPage: 8,
    slideshowImages: [
      '/redsize/fountain_0208_ornate_carved_stone_fountain.webp',
      '/redsize/fountain_0209_ornate_tiered_stone_fountain.webp',
      '/redsize/fountain_0210_ornate_tiered_stone_fountain.webp',
      '/redsize/fountain_0211_ornate_tiered_stone_fountains.webp',
      '/redsize/fountain_0212_carved_multitier_stone_fountains.webp',
      '/redsize/fountain_0213_tiered_stone_decorative_fountains.webp',
    ]
  },
  'wall-cladding': {
    id: '5',
    title: 'WALL CLADDING',
    subtitle: 'Decorative Panels',
    description: 'Stunning stone wall cladding featuring intricate chakra designs that add depth, texture, and artistic appeal to any interior space. Transform your walls into masterpieces.',
    smallImage: '/collections/stonesgallerycollections/wallpanelchakrasmall.webp',
    largeImage: '/collections/stonesgallerycollections/WALLPANELBIG.webp',
    pdfUrl: '/collections/allproductsareinthis.pdf',
    pdfPage: 6,
    slideshowImages: [
      '/redsize/stone_cladding_0214_stone_carved_tree_panel.webp',
      '/redsize/stone_cladding_0228_textured_stone_wall_panels.webp',
      '/redsize/stone_cladding_0259_3d_textured_wall_panels.webp',
      '/redsize/stone_cladding_0286_intricately_carved_stone_panel.webp',
      '/wallpanelandinlays/wall cladding_page-0010.jpg',
      '/wallpanelandinlays/wall cladding_page-0025.jpg',
      '/wallpanelandinlays/wall cladding_page-0040.jpg',
      '/wallpanelandinlays/wall cladding_page-0055.jpg',
    ]
  }
};

interface CollectionDetailProps {
  slug?: string;
}

const CollectionDetail: React.FC<CollectionDetailProps> = ({ slug = 'dining-tables' }) => {
  const collection = collectionsDatabase[slug] || collectionsDatabase['dining-tables'];
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [showWallPanelGallery, setShowWallPanelGallery] = useState(false);
  const [showMarbleSinksGallery, setShowMarbleSinksGallery] = useState(false);
  const [showCollectionGallery, setShowCollectionGallery] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!collection.slideshowImages || collection.slideshowImages.length === 0 || isHovering) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => 
        (prev + 1) % collection.slideshowImages!.length
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [collection.slideshowImages, isHovering]);

  const collectionSlugs = Object.keys(collectionsDatabase);
  const currentIndex = collectionSlugs.indexOf(slug);
  
  const nextCollection = collectionSlugs[(currentIndex + 1) % collectionSlugs.length];
  const prevCollection = collectionSlugs[(currentIndex - 1 + collectionSlugs.length) % collectionSlugs.length];

  const handleViewCatalog = () => {
    // Show collection gallery for all collections
    setShowCollectionGallery(true);
  };

  // Get the current image to display (slideshow or default)
  const displayImage = collection.slideshowImages && collection.slideshowImages.length > 0
    ? collection.slideshowImages[currentSlideIndex]
    : collection.largeImage;

  // Determine if this collection needs rotation
  const needsRotation = ['idols-and-temples', 'home-decor', 'fountain'].includes(slug);

  return (
    <div className="min-h-screen bg-white">
      {/* Collection Gallery - New Unified Gallery */}
      <CollectionGallery 
        isOpen={showCollectionGallery} 
        onClose={() => setShowCollectionGallery(false)}
        collectionSlug={slug}
      />

      {/* Wall Panel Gallery */}
      <WallPanelGallery 
        isOpen={showWallPanelGallery} 
        onClose={() => setShowWallPanelGallery(false)} 
      />

      {/* Marble Sinks Gallery */}
      <MarbleSinksGallery 
        isOpen={showMarbleSinksGallery} 
        onClose={() => setShowMarbleSinksGallery(false)} 
      />

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
                  className="object-contain hover:scale-105 transition-transform duration-500"
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
                    onClick={handleViewCatalog}
                    className="px-10 py-3 md:py-4 border border-stone-800 bg-stone-800 text-white hover:bg-stone-700 transition-all duration-300 tracking-wider text-sm md:text-base flex items-center justify-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    VIEW CATALOG
                  </button>
                )}
              </div>
            </div>

            {/* Right Side - Large Image with Slideshow */}
            <div 
              className={`relative h-[400px] md:h-[600px] rounded-lg overflow-visible shadow-2xl order-1 md:order-2 flex items-center justify-center ${
                ['idols-and-temples', 'fountain', 'wall-cladding'].includes(slug) 
                  ? 'bg-gradient-to-br from-white via-stone-50 to-stone-100' 
                  : 'bg-white'
              }`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Background lighting effect - only for specific collections */}
              {['idols-and-temples', 'fountain', 'wall-cladding'].includes(slug) && (
                <div className="absolute inset-0 bg-radial-gradient pointer-events-none rounded-lg" 
                  style={{
                    background: 'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.6) 0%, transparent 70%)'
                  }}
                />
              )}
              
              <div className="relative w-full h-full flex items-center justify-center z-10">
                <img
                  src={displayImage}
                  alt={collection.title}
                  className={`max-w-full max-h-full w-auto h-auto object-contain transition-all duration-700 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  } ${['idols-and-temples', 'fountain', 'wall-cladding'].includes(slug) ? 'brightness-110 contrast-105' : ''}`}
                  onLoad={() => setImageLoaded(true)}
                  style={{ 
                    imageOrientation: 'from-image',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    transform: needsRotation ? 'rotate(-90deg)' : 'none',
                    filter: ['idols-and-temples', 'fountain', 'wall-cladding'].includes(slug) 
                      ? 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))' 
                      : 'none'
                  }}
                />
              </div>
              
              {/* Slideshow indicators - only show if there are slideshow images */}
              {collection.slideshowImages && collection.slideshowImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                  {collection.slideshowImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlideIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlideIndex
                          ? 'bg-stone-800 w-8'
                          : 'bg-stone-400 w-2 hover:bg-stone-600'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
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
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
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
