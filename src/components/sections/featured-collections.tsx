'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FeaturedCollection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  slug: string;
}

const featuredCollections: FeaturedCollection[] = [
  {
    id: '1',
    title: 'PISTACHIO',
    subtitle: 'Premium Collection',
    description: 'A vibrant and elegant collection featuring rich pistachio tones that bring warmth and sophistication to any space.',
    image: '/collections/pistachiobig.webp',
    slug: 'pistachio'
  },
  {
    id: '2',
    title: 'RED JASPER',
    subtitle: 'Natural Stones',
    description: 'Stunning red jasper stones that showcase deep, luxurious tones perfect for premium interior designs.',
    image: '/collections/largeredjasper.webp',
    slug: 'red-jasper'
  },
  {
    id: '3',
    title: 'DARK ROAST AURORA SERIES',
    subtitle: 'Aurora Collection',
    description: 'Rich, deep dark roast tones combined with aurora finishes that create a sophisticated and luxurious atmosphere.',
    image: '/collections/darkroastauroraseries.webp',
    slug: 'dark-roast-aurora-series'
  }
];

const FeaturedCollections: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredCollections.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredCollections.length) % featuredCollections.length);
  };

  const currentCollection = featuredCollections[currentIndex];

  return (
    <section className="relative bg-white py-0 overflow-hidden">
      {/* Main Carousel */}
      <div className="relative h-screen md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={currentCollection.image}
            alt={currentCollection.title}
            fill
            className="object-cover transition-opacity duration-1000"
            priority
            sizes="100vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Navigation Bar - Desktop */}
        <nav className="absolute top-0 left-0 right-0 z-20 hidden md:block px-10 py-6">
          <div className="flex justify-center gap-16 text-white text-sm tracking-wider">
            <Link href="/pages/our-story" className="hover:text-stone-300 transition">OUR STORY</Link>
            <Link href="/pages/our-collection" className="hover:text-stone-300 transition">OUR COLLECTIONS</Link>
            <Link href="/pages/our-projects" className="hover:text-stone-300 transition">OUR PROJECTS</Link>
            <Link href="/pages/our-services" className="hover:text-stone-300 transition">OUR SERVICES</Link>
            <Link href="/pages/contact-us" className="hover:text-stone-300 transition">OUR CONTACT</Link>
          </div>
        </nav>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 md:px-12">
          <h2 className="text-4xl md:text-6xl font-light tracking-widest mb-6 uppercase">
            {currentCollection.title}
          </h2>
          <p className="text-base md:text-lg tracking-wider mb-8 opacity-90">
            {currentCollection.description}
          </p>
          <Link
            href={`/pages/our-collection?collection=${currentCollection.slug}`}
            className="inline-block px-8 md:px-10 py-3 md:py-4 border border-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider text-sm md:text-base"
          >
            EXPLORE
          </Link>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 transition-all duration-300"
          aria-label="Previous collection"
        >
          <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 transition-all duration-300"
          aria-label="Next collection"
        >
          <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {featuredCollections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8 md:w-10'
                  : 'bg-white/50 w-2 md:w-3 hover:bg-white/70'
              }`}
              aria-label={`Go to collection ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Featured Collections Grid */}
      <div className="bg-stone-50 py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-light tracking-wider mb-4 uppercase">
              Our Collections
            </h3>
            <p className="text-stone-600 text-base md:text-lg tracking-wide">
              Explore our curated selection of premium stone collections
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredCollections.map((collection) => (
              <Link
                key={collection.id}
                href={`/pages/our-collection?collection=${collection.slug}`}
                className="group"
              >
                <div className="relative h-80 md:h-96 mb-4 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl md:text-2xl font-light tracking-widest uppercase group-hover:text-stone-600 transition">
                    {collection.title}
                  </h4>
                  <p className="text-sm md:text-base text-stone-600 tracking-wider">
                    {collection.subtitle}
                  </p>
                  <p className="text-sm text-stone-500 leading-relaxed pt-2">
                    {collection.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-12 md:mt-16 text-center">
            <Link
              href="/pages/our-collection"
              className="inline-block px-10 py-3 md:py-4 border border-stone-800 hover:bg-stone-800 hover:text-white transition-all duration-300 text-stone-800 tracking-wider text-sm md:text-base"
            >
              VIEW ALL COLLECTIONS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
