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
    title: 'DINING TABLES',
    subtitle: 'Elegant Stone Tables',
    description: 'Transform your dining space with our exquisite collection of handcrafted stone dining tables.',
    image: '/redsize/dining_and_tables_0200_rectangular_stone_dining_table.webp',
    slug: 'dining-tables'
  },
  {
    id: '2',
    title: 'IDOLS AND TEMPLES',
    subtitle: 'Sacred Art & Structures',
    description: 'Beautifully carved stone idols and exquisite temples that bring spiritual elegance to your sacred spaces.',
    image: '/Marble temples/majestic lotus pavilion.jpg',
    slug: 'idols-and-temples'
  },
  {
    id: '3',
    title: 'HOME DECOR',
    subtitle: 'Contemporary & Garden Elegance',
    description: 'Experience the fusion of traditional stone craftsmanship with modern artistic expression.',
    image: '/collections/stonesgallerycollections/MODERNARTBIG.webp',
    slug: 'home-decor'
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
    <section className="relative overflow-hidden">
      {/* Main Carousel */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-stone-100">
          <Image
            src={currentCollection.image}
            alt={currentCollection.title}
            fill
            className="object-cover transition-opacity duration-1000"
            priority
            sizes="100vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

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
    </section>
  );
};

export default FeaturedCollections;
