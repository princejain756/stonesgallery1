"use client";

import React from "react";
import Link from "next/link";

export default function LiveTheExperience() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-contain"
          src="/livetheexperiecne.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Subtle overlay to improve legibility */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Centered overlay heading */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center">
        <div className="drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)]">
          <div className="mb-1 text-[18px] uppercase tracking-[0.35em] opacity-90 md:text-[20px]">
            LIVE THE
          </div>
          <div className="-mt-1 flex items-end justify-center gap-2">
            <span className="font-serif text-[64px] italic leading-none md:text-[86px]">
              EXPERIENCE
            </span>
          </div>
        </div>
      </div>

      {/* CTA at bottom center */}
      <Link
        href="/pages/our-collection"
        className="absolute bottom-[8%] left-1/2 z-30 -translate-x-1/2 border-2 border-white bg-transparent px-8 py-3 text-center text-xs uppercase tracking-[0.15em] text-white transition-colors hover:bg-white/10 md:px-12"
      >
        OUR COLLECTION
      </Link>
    </section>
  );
}