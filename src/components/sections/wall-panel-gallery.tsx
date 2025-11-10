'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Grid, List } from 'lucide-react';

interface WallPanelGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

// Generate array of all wall panel images
const generateWallPanelImages = () => {
  const images = [];
  for (let i = 2; i <= 71; i++) {
    const pageNum = String(i).padStart(4, '0');
    images.push(`/wallpanelandinlays/wall cladding_page-${pageNum}.jpg`);
  }
  return images;
};

const allCollections = [
  { id: 'all', name: 'All Collections', count: 70 },
  { id: 'dining-table', name: 'Dining Tables', count: 0 },
  { id: 'modern-art', name: 'Modern Art', count: 0 },
  { id: 'temples', name: 'Temples', count: 0 },
  { id: 'idols', name: 'Idols', count: 0 },
  { id: 'wall-panel', name: 'Wall Panels & Inlays', count: 70 },
  { id: 'fountain', name: 'Fountains', count: 0 },
  { id: 'garden-decor', name: 'Garden Decor', count: 0 },
  { id: 'tulsi-pots', name: 'Tulsi Pots', count: 0 },
  { id: 'marble-temples', name: 'Marble Temples', count: 0 },
  { id: 'customised-temples', name: 'Customised Temples', count: 0 },
];

const WallPanelGallery: React.FC<WallPanelGalleryProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('wall-panel');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const wallPanelImages = generateWallPanelImages();
  const displayImages = selectedCategory === 'wall-panel' || selectedCategory === 'all' ? wallPanelImages : [];

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handlePrevImage = () => {
    const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : displayImages.length - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(displayImages[newIndex]);
  };

  const handleNextImage = () => {
    const newIndex = currentImageIndex < displayImages.length - 1 ? currentImageIndex + 1 : 0;
    setCurrentImageIndex(newIndex);
    setSelectedImage(displayImages[newIndex]);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId !== 'wall-panel' && categoryId !== 'all') {
      // Navigate to other collection page
      window.location.href = `/pages/our-collection?collection=${categoryId}`;
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Main Gallery Modal */}
      <div className="fixed inset-0 z-50 bg-white overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="border-b border-stone-200 bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-light tracking-wider uppercase text-stone-800">
                Gallery
              </h2>
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
                  aria-label="Grid view"
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-2 rounded ${viewMode === 'masonry' ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
                  aria-label="Masonry view"
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              aria-label="Close gallery"
            >
              <X className="h-6 w-6 text-stone-700" />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex overflow-hidden">
            {/* Left Sidebar - Categories */}
            <div className="w-64 border-r border-stone-200 bg-stone-50 overflow-y-auto">
              <div className="p-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-600 mb-4">
                  Collections
                </h3>
                <div className="space-y-1">
                  {allCollections.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-stone-800 text-white shadow-md'
                          : 'bg-white text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{category.name}</span>
                        {category.count > 0 && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            selectedCategory === category.id
                              ? 'bg-white text-stone-800'
                              : 'bg-stone-100 text-stone-600'
                          }`}>
                            {category.count}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Gallery Area */}
            <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-stone-50 to-white">
              {displayImages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="text-stone-400 mb-4">
                    <Grid className="h-16 w-16 mx-auto mb-4" />
                  </div>
                  <h3 className="text-xl font-light text-stone-600 mb-2">No images available</h3>
                  <p className="text-stone-500">This collection doesn't have gallery images yet.</p>
                </div>
              ) : (
                <div className={`
                  ${viewMode === 'grid' 
                    ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4' 
                    : 'columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4'
                  }
                `}>
                  {displayImages.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => handleImageClick(image, index)}
                      className={`
                        group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl 
                        transition-all duration-300 cursor-pointer bg-white
                        ${viewMode === 'grid' ? 'aspect-square' : 'break-inside-avoid mb-4'}
                      `}
                    >
                      <Image
                        src={image}
                        alt={`Wall Panel Design ${index + 1}`}
                        fill={viewMode === 'grid'}
                        width={viewMode === 'masonry' ? 400 : undefined}
                        height={viewMode === 'masonry' ? 400 : undefined}
                        className={`
                          ${viewMode === 'grid' ? 'object-cover' : 'w-full h-auto'}
                          group-hover:scale-110 transition-transform duration-500
                        `}
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white text-sm font-medium">Design {index + 1}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={handlePrevImage}
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>

          <button
            onClick={handleNextImage}
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>

          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4">
            <Image
              src={selectedImage}
              alt={`Wall Panel Design ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="text-white text-sm font-medium">
              {currentImageIndex + 1} / {displayImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WallPanelGallery;
