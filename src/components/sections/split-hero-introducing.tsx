'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SplitHeroIntroducing = () => {
  const handleScroll = (id: string, event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  return (
    <section className="bg-background text-white lg:flex">
      {/* Left Panel */}
      <div id="screen_prev" className="relative w-full lg:w-1/2 h-[60vh] lg:h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/imagesfor2ndsection/1.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center lg:items-end lg:justify-end lg:p-24 lg:text-right">
            <div className="flex flex-col items-center lg:items-end">
                <h3 className="font-light text-xl uppercase tracking-[0.2em] mb-6">
                    Introducing
                </h3>
                <div className="mb-8">
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light uppercase tracking-[0.1em] text-white">
                        STONES GALLERY
                    </h1>
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-light italic text-white mt-2">
                        Classic
                    </h2>
                </div>
                <a
                    href="/pages/our-story"
                    className="border-2 border-white text-white uppercase text-sm tracking-[0.15em] py-3.5 px-10 hover:bg-white/15 transition-colors duration-300"
                >
                    Our Story
                </a>
            </div>
        </div>

        <a
          href="#screen_next"
          onClick={(e) => handleScroll('screen_next', e)}
          aria-label="Next"
          className="absolute top-1/2 right-4 -translate-y-1/2 z-20 opacity-70 hover:opacity-100 transition-opacity duration-300 hidden lg:block"
        >
          <ChevronRight size={40} />
        </a>
      </div>

      {/* Right Panel */}
      <div id="screen_next" className="relative w-full lg:w-1/2 h-[60vh] lg:h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/imagesfor2ndsection/2.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        
        <a
          href="#screen_prev"
          onClick={(e) => handleScroll('screen_prev', e)}
          aria-label="Previous"
          className="absolute top-1/2 left-4 -translate-y-1/2 z-20 opacity-70 hover:opacity-100 transition-opacity duration-300 hidden lg:block"
        >
          <ChevronLeft size={40} />
        </a>
      </div>
    </section>
  );
};

export default SplitHeroIntroducing;
