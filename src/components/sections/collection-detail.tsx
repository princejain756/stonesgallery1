'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CollectionData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  smallImage: string;
  largeImage: string;
}

const collectionsDatabase: Record<string, CollectionData> = {
  'pistachio': {
    id: '1',
    title: 'PISTACHIO',
    subtitle: 'Premium Collection',
    description: 'A vibrant and elegant collection featuring rich pistachio tones that bring warmth and sophistication to any space. This collection showcases the natural beauty of premium materials.',
    smallImage: '/collections/smallpistachio.webp',
    largeImage: '/collections/pistachiobig.webp'
  },
  'red-jasper': {
    id: '2',
    title: 'RED JASPER',
    subtitle: 'Natural Stones',
    description: 'Stunning red jasper stones that showcase deep, luxurious tones perfect for premium interior designs. Each piece tells a story of natural elegance and timeless beauty.',
    smallImage: '/collections/smallredjasper.webp',
    largeImage: '/collections/largeredjasper.webp'
  },
  'dark-roast-aurora-series': {
    id: '3',
    title: 'DARK ROAST AURORA SERIES',
    subtitle: 'Aurora Collection',
    description: 'Rich, deep dark roast tones combined with aurora finishes that create a sophisticated and luxurious atmosphere. A perfect blend of modern aesthetics and timeless elegance.',
    smallImage: '/collections/darkroastauroraseriessmall.webp',
    largeImage: '/collections/darkroastauroraseries.webp'
  },
  'judagrey': {
    id: '4',
    title: 'JUDA GREY',
    subtitle: 'Grey Collection',
    description: 'Sophisticated grey tones that bring balance and elegance to any interior space. Perfect for contemporary and classic designs alike.',
    smallImage: '/collections/smalljudagrey.webp',
    largeImage: '/collections/largejudagrey.webp'
  },
  'fluting-series': {
    id: '5',
    title: 'FLUTING SERIES',
    subtitle: 'Textured Collection',
    description: 'Beautiful fluting finishes that add depth and character to your spaces. Each fluted surface creates stunning visual and tactile experiences.',
    smallImage: '/collections/flutingseries fluting finishes.webp',
    largeImage: '/collections/fluttingseries fluting finishes large.webp'
  }
};

interface CollectionDetailProps {
  slug?: string;
}

const CollectionDetail: React.FC<CollectionDetailProps> = ({ slug = 'pistachio' }) => {
  const collection = collectionsDatabase[slug] || collectionsDatabase['pistachio'];
  const [imageLoaded, setImageLoaded] = useState(false);

  const collectionSlugs = Object.keys(collectionsDatabase);
  const currentIndex = collectionSlugs.indexOf(slug);
  
  const nextCollection = collectionSlugs[(currentIndex + 1) % collectionSlugs.length];
  const prevCollection = collectionSlugs[(currentIndex - 1 + collectionSlugs.length) % collectionSlugs.length];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 md:py-6 flex justify-center gap-12 md:gap-16 text-sm md:text-base tracking-wider">
          <a href="/pages/our-story" className="hover:text-stone-600 transition">OUR STORY</a>
          <a href="/pages/our-collection" className="hover:text-stone-600 transition">OUR COLLECTIONS</a>
          <a href="/pages/our-projects" className="hover:text-stone-600 transition">OUR PROJECTS</a>
          <a href="/pages/our-services" className="hover:text-stone-600 transition">OUR SERVICES</a>
          <a href="/pages/contact-us" className="hover:text-stone-600 transition">OUR CONTACT</a>
        </div>
      </nav>

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

              {/* Explore Button */}
              <button className="px-10 py-3 md:py-4 border border-stone-800 hover:bg-stone-800 hover:text-white transition-all duration-300 text-stone-800 tracking-wider text-sm md:text-base">
                EXPLORE MORE
              </button>
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
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
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
