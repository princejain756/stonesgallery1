'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Showroom3DView: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const iframeUrls = [
    "https://www.google.com/maps/embed?pb=!4v1762822577432!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRGo4OUhzbkFF!2m2!1d12.79745126946617!2d77.60626466051258!3f180!4f10!5f0.7820865974627469",
    "https://www.google.com/maps/embed?pb=!4v1762822587411!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGo4N0hIVVE.!2m2!1d12.79745126946617!2d77.60626466051258!3f300!4f0!5f0.7820865974627469",
    "https://www.google.com/maps/embed?pb=!4v1762822605276!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRGo4N0hzdWdF!2m2!1d12.79745126946617!2d77.60626466051258!3f20!4f0!5f0.7820865974627469",
    "https://www.google.com/maps/embed?pb=!4v1762822613836!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGo4NUdhT0E.!2m2!1d12.79745126946617!2d77.60626466051258!3f359.88742!4f0!5f0.7820865974627469",
    "https://www.google.com/maps/embed?pb=!4v1762822629684!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRGo4X0h6NkFF!2m2!1d12.79745126946617!2d77.60626466051258!3f350.3682067534016!4f-4.121437905444026!5f0.7820865974627469",
    "https://www.google.com/maps/embed?pb=!4v1762822639525!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRGo4NUdya1FF!2m2!1d12.79745126946617!2d77.60626466051258!3f40!4f10!5f0.7820865974627469"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % iframeUrls.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + iframeUrls.length) % iframeUrls.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 px-5 md:px-10 bg-stone-50">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.2em] uppercase text-stone-800 mb-4">
            360 DEGREES SHOWROOM TOUR
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Experience our showroom virtually with these immersive 360-degree views. Explore every corner and get a real feel of our stone collections.
          </p>
        </div>

        {/* Main Slideshow Container */}
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="aspect-[16/10] md:aspect-[21/9] relative">
            <iframe
              src={iframeUrls[currentSlide]}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`3D Showroom View ${currentSlide + 1}`}
              className="w-full h-full"
            />
          </div>

          {/* Navigation Arrows */}
          <Button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-stone-800 shadow-lg h-12 w-12 rounded-full p-0"
            size="icon"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-stone-800 shadow-lg h-12 w-12 rounded-full p-0"
            size="icon"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {iframeUrls.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white shadow-lg'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            {currentSlide + 1} / {iframeUrls.length}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-8 flex justify-center space-x-4 overflow-x-auto pb-4">
          {iframeUrls.map((url, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-20 h-16 md:w-24 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentSlide
                  ? 'border-stone-800 shadow-lg scale-105'
                  : 'border-stone-300 hover:border-stone-500'
              }`}
            >
              <iframe
                src={url}
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Thumbnail ${index + 1}`}
                className="w-full h-full"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showroom3DView;