'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface MarbleSinksGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const generateMarbleSinkImages = () => {
  const images = [];
  for (let i = 1; i <= 70; i++) {
    const pageNum = String(i).padStart(4, '0');
    images.push(`/marblesinks/DISH IMPEX MARBLE SINKS WITH PRICE (3) (1)_page-${pageNum}.jpg`);
  }
  return images;
};

const allCollections = [
  { name: 'Dining Table', slug: 'dining-table' },
  { name: 'Modern Art', slug: 'modern-art' },
  { name: 'Garden Decor', slug: 'garden-decor' },
  { name: 'Fountain', slug: 'fountain' },
  { name: 'Idols', slug: 'idols' },
  { name: 'Temples', slug: 'temples' },
  { name: 'Wall Panel', slug: 'wall-panel' },
  { name: 'Tulsi Pots', slug: 'tulsi-pots' },
  { name: 'Marble Temples', slug: 'marble-temples' },
  { name: 'Customised Temples', slug: 'customised-temples' },
  { name: 'Marble Sinks', slug: 'marble-sinks' },
];

const MarbleSinksGallery: React.FC<MarbleSinksGalleryProps> = ({ isOpen, onClose }) => {
  const marbleImages = generateMarbleSinkImages();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');

  if (!isOpen) return null;

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? marbleImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === marbleImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-95 overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black to-transparent p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-white text-2xl md:text-3xl font-light tracking-widest uppercase">
            Marble Sinks Collection
          </h1>
          <button
            onClick={onClose}
            className="text-white hover:text-stone-300 transition-colors p-2"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-screen pt-20">
        {/* Left Sidebar - Collections */}
        <div className="w-64 bg-black bg-opacity-80 overflow-y-auto border-r border-stone-700 hidden lg:block">
          <div className="p-6 space-y-3">
            <h2 className="text-stone-300 text-sm font-semibold tracking-widest uppercase mb-6">
              Collections
            </h2>
            {allCollections.map((collection) => (
              <button
                key={collection.slug}
                onClick={() => {
                  onClose();
                  window.location.href = `/pages/our-collection?collection=${collection.slug}`;
                }}
                className={`w-full text-left px-4 py-2 rounded transition-all text-sm tracking-wide ${
                  collection.slug === 'marble-sinks'
                    ? 'bg-stone-700 text-white font-semibold'
                    : 'text-stone-400 hover:text-white hover:bg-stone-900'
                }`}
              >
                {collection.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Gallery Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Image Counter and View Mode */}
          <div className="flex justify-between items-center px-6 py-4 bg-black bg-opacity-50 border-b border-stone-700">
            <div className="text-white text-sm tracking-wide">
              {selectedImageIndex + 1} / {marbleImages.length}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded text-sm transition-all ${
                  viewMode === 'grid'
                    ? 'bg-stone-700 text-white'
                    : 'bg-stone-900 text-stone-400 hover:text-white'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`px-4 py-2 rounded text-sm transition-all ${
                  viewMode === 'masonry'
                    ? 'bg-stone-700 text-white'
                    : 'bg-stone-900 text-stone-400 hover:text-white'
                }`}
              >
                Masonry
              </button>
            </div>
          </div>

          {/* Image Display Section */}
          <div className="flex-1 overflow-auto">
            {viewMode === 'grid' ? (
              // Grid View - Selected Image Lightbox
              <div className="h-full flex items-center justify-center p-8">
                <div className="relative w-full h-full max-w-4xl max-h-[70vh]">
                  <Image
                    src={marbleImages[selectedImageIndex]}
                    alt={`Marble Sink ${selectedImageIndex + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-stone-300 transition-colors p-3 hover:bg-stone-900 hover:bg-opacity-50 rounded"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-stone-300 transition-colors p-3 hover:bg-stone-900 hover:bg-opacity-50 rounded"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </button>
                </div>
              </div>
            ) : (
              // Masonry Grid View
              <div className="p-6 columns-3 gap-6">
                {marbleImages.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedImageIndex(index);
                      setViewMode('grid');
                    }}
                    className="break-inside-avoid mb-6 cursor-pointer group"
                  >
                    <div className="relative h-40 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                      <Image
                        src={image}
                        alt={`Marble Sink ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          View
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Thumbnail Strip */}
          <div className="bg-black bg-opacity-80 border-t border-stone-700 overflow-x-auto">
            <div className="flex gap-2 p-3 min-w-min">
              {marbleImages.slice(0, 20).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 relative h-16 w-16 rounded overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index
                      ? 'border-white'
                      : 'border-stone-700 hover:border-stone-500'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
              {marbleImages.length > 20 && (
                <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center text-white text-xs text-center">
                  +{marbleImages.length - 20} more
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarbleSinksGallery;
