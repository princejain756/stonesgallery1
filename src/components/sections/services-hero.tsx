"use client";

import Image from "next/image";
import Link from "next/link";

// Services teaser hero matching stonesgallery.com (from DREAM to REALITY)
// Background uses their GIF and a subtle dark overlay; the center title
// uses the exported PNG that contains the styled text.
// CTA mirrors their outline button treatment.

export default function ServicesHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* Background media (GIF) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/FROMDREAMTOREALITY/FINAL.gif"
          alt="Services background"
          className="h-full w-full object-contain"
        />
        {/* Subtle dark overlay above GIF but below text */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Center text overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-5">
        <div className="w-[70%] max-w-[660px] md:w-auto">
          <Image
            src="/FROMDREAMTOREALITY/FROMDREAMTOREALITY.avif"
            alt="from DREAM to REALITY"
            width={800}
            height={380}
            className="h-auto w-full select-none"
            priority
          />
        </div>
      </div>

      {/* Bottom center CTA */}
      <Link
        href="/pages/our-services"
        className="absolute bottom-[8%] left-1/2 z-30 -translate-x-1/2 border-2 border-white bg-transparent px-8 py-3 text-center text-sm md:text-xs uppercase tracking-[0.15em] text-white transition-colors hover:bg-white/10 md:px-12"
      >
        OUR SERVICES
      </Link>
    </section>
  );
}
