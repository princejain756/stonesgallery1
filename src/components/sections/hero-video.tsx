"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroVideo = (): JSX.Element => {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* Background Video Layer */}
      <div className="absolute inset-0 -z-10">
        <video
          key="desktop-video"
          autoPlay
          loop
          muted
          playsInline
          className="hidden h-full w-full object-cover md:block"
          src="https://cdn.shopify.com/videos/c/o/v/f2ab0c388c6547e790669e1258c7cc6d.mp4"
        />
        <video
          key="mobile-video"
          autoPlay
          loop
          muted
          playsInline
          className="block h-full w-full object-cover md:hidden"
          src="https://cdn.shopify.com/videos/c/o/v/83ffac2b3cf24a6f96dc4674618771cc.mp4"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Content Layer */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-5">
        <div className="w-[80%] md:w-auto md:max-w-[600px]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/images/home-video-text_c7f508eb-c5d5-442a-8a4c-f14a5eaaba-1.png"
            alt="A design house where personalisation meets luxury."
            width={600}
            height={150}
            className="h-auto w-full"
            style={{ filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))" }}
            priority
          />
        </div>

        <Link
          href="/pages/our-story"
          className="absolute bottom-20 left-1/2 w-[calc(100%-40px)] -translate-x-1/2 border-2 border-white bg-transparent px-6 py-4 text-center text-base uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white/10 md:w-auto md:px-12"
        >
          OUR STORY
        </Link>
      </div>
    </section>
  );
};

export default HeroVideo;