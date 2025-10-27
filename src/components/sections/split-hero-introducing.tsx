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
            backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/images/classic_contemporary-51-desk_1080x-12.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center lg:items-end lg:justify-end lg:p-24 lg:text-right">
            <div className="flex flex-col items-center lg:items-end">
                <h3 className="font-light text-xl uppercase tracking-[0.2em] mb-6">
                    Introducing
                </h3>
                <div className="mb-8">
                     <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/images/logo_white-09_large-2.png"
                        alt="Nivasa Logo"
                        width={280}
                        height={58}
                        className="max-w-[280px]"
                    />
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
            backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/images/classic_contemporary-53-desk_1080x-13.jpg')`,
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