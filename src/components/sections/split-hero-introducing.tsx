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
    <section className="text-white lg:flex">
      {/* Left Panel */}
      <div id="screen_prev" className="relative w-full lg:w-1/2 h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/imagesfor2ndsection/1.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center lg:items-end lg:justify-end lg:p-24 lg:text-right">
            <div className="flex flex-col items-center lg:items-end">
                <h3 className="font-light text-lg sm:text-xl uppercase tracking-[0.2em] mb-6">
                    Introducing
                </h3>
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light uppercase tracking-[0.1em] text-white">
                        STONES GALLERY
                    </h1>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light italic text-white mt-2">
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
      <div id="screen_next" className="relative w-full lg:w-1/2 h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/imagesfor2ndsection/2.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

        <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-16 text-white">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Bengaluru&apos;s Trusted Stone Partner</p>
            <h3 className="mt-4 text-2xl sm:text-3xl font-light tracking-[0.2em]">
              Granite, Marble &amp; Sculptures crafted for iconic spaces
            </h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/90">
              From Jigani factory floors to Indiranagar penthouses, Stones Gallery delivers Italian marble, Dark Roast
              granite, bespoke temple idols, quartzite countertops, and hand-carved murals across the city.
            </p>
          </div>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="bg-white/10 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Priority Zones</p>
              <ul className="mt-2 space-y-1 text-white/90">
                <li>Jigani &amp; Electronic City factories</li>
                <li>JP Nagar • Jayanagar • Banashankari</li>
                <li>Koramangala • Indiranagar • Whitefield</li>
              </ul>
            </div>
            <div className="bg-white/10 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Signature Deliverables</p>
              <ul className="mt-2 space-y-1 text-white/90">
                <li>Granite countertops &amp; dining tables</li>
                <li>Temple sculptures &amp; marble idols</li>
                <li>Exterior cladding &amp; garden artifacts</li>
              </ul>
            </div>
          </div>
          <div>
            <a
              href="/pages/our-services"
              className="inline-flex items-center border border-white/70 px-6 py-3 text-xs tracking-[0.3em] uppercase hover:bg-white/10 transition-colors"
            >
              View Capabilities
            </a>
          </div>
        </div>
        
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
