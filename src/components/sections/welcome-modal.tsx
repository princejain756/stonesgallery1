"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // In a real app, this logic could be more complex (e.g., using cookies to show only once)
    const hasBeenShown = sessionStorage.getItem("welcomeModalShown");
    if (!hasBeenShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("welcomeModalShown", "true");
      }, 2000); // Delay before showing modal
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.8)]"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-[900px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] grid grid-cols-1 md:grid-cols-2 rounded-none m-4 animate-in fade-in-0 zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 text-white hover:opacity-70 transition-opacity"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Left Side: Image Placeholder */}
        <div className="hidden md:block relative h-full">
          {/* 
            Placeholder for the image described in the instructions.
            No suitable image asset was provided in the inputs.
            A real implementation would use a Next.js Image component like this:
            <Image 
              src="/path/to/luxury-interior-image.jpg"
              alt="Luxury interior design with a channeled white sofa"
              layout="fill"
              objectFit="cover"
            />
          */}
           <div className="h-full w-full bg-cover bg-center" style={{backgroundImage: "url('https://cdn.shopify.com/s/files/1/0552/0061/2542/files/newsletter_popup_image.jpg?v=1648893427')"}}></div>
        </div>

        {/* Right Side: Content */}
        <div className="bg-[#3a3a3a] text-center flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <p className="text-[0.75rem] uppercase tracking-[0.15em] text-[#999999]">
            WELCOME TO THE WORLD OF STONES GALLERY
          </p>

          <h2 className="mt-4 text-[2rem] font-normal leading-tight text-white">
            Hello there!
          </h2>

          <p className="mt-4 text-[1rem] leading-[1.6] text-[#cccccc]">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>

          <form className="mt-8 flex w-full max-w-sm mx-auto rounded-none">
            <input
              type="email"
              placeholder="email@newsletter.com"
              className="flex-grow bg-[rgba(255,255,255,0.1)] border border-solid border-[rgba(255,255,255,0.3)] p-[0.875rem] text-sm text-white placeholder:text-[#cccccc] focus:outline-none focus:ring-1 focus:ring-white/50 w-full rounded-none"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold py-[0.875rem] px-8 rounded-none transition-transform duration-200 ease-in-out hover:scale-[1.02] transform uppercase tracking-[0.2em] text-xs"
            >
              JOIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}