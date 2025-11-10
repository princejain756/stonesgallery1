"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroVideo = () => {

  return (
    <section className="relative h-screen w-full overflow-hidden text-white" role="banner" aria-label="Hero section showcasing Stones Gallery">
      {/* Background Video Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-contain z-0"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        aria-label="Background video of stone gallery"
      >
        <source src="/herovideo.webm" type="video/webm" />
        <source src="/herovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Fallback background in case video fails */}
      <div className="absolute inset-0 bg-gray-800 -z-10" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />

      {/* Content Layer */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center p-5">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-[0.2em] leading-tight" aria-label="World of Stones Gallery">
            <span className="block mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">WORLD</span>
            <span className="italic text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-4 block">Of</span>
            <span className="block mb-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">STONES GALLERY</span>
          </h1>
        </div>

        <Link
          href="/pages/our-story"
          className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-1/2 w-[calc(100%-40px)] -translate-x-1/2 border-2 border-white bg-transparent px-6 py-4 text-center text-base uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white/10 md:w-auto md:px-12"
          aria-label="Learn more about our story"
        >
          OUR STORY
        </Link>
      </div>
    </section>
  );
};

export default HeroVideo;
