'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

interface Phase {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  story: string;
  images: string[];
  color: string;
}

const phases: Phase[] = [
  {
    number: 1,
    title: "Consultation & Design",
    subtitle: "WHERE DREAMS BEGIN",
    description: "Every masterpiece starts with a vision. We sit with you, understand your aspirations, and sketch the blueprint of your imagination.",
    story: "Your journey begins here. Our expert consultants listen intently to your ideas, lifestyle needs, and aesthetic preferences. Through collaborative design sessions, we transform abstract concepts into tangible plans. We explore materials, discuss possibilities, and create detailed designs that reflect your unique personality. This is where your dream takes its first form.",
    images: ["/stonesgallerystages/Phase 1- Consultation & Design.jpeg"],
    color: "from-amber-50 to-stone-100"
  },
  {
    number: 2,
    title: "Material Selection",
    subtitle: "CHOOSING NATURE'S FINEST",
    description: "Walk through our curated collection of premium stones. Touch, feel, and discover the perfect material that speaks to your soul.",
    story: "The world of natural stone opens before you. Each slab tells a story millions of years in the making. Our experts guide you through granite, marble, quartzite, and more - explaining the unique characteristics, durability, and beauty of each option. You'll witness how different lighting brings out hidden patterns, how textures change the ambiance, and how colors complement your space. This tactile experience ensures you choose not just with your eyes, but with your heart.",
    images: ["/stonesgallerystages/Phase 2 Material Selection.webp"],
    color: "from-stone-50 to-slate-100"
  },
  {
    number: 3,
    title: "Templating & Digital Layout",
    subtitle: "PRECISION MEETS TECHNOLOGY",
    description: "Advanced technology captures every measurement with pinpoint accuracy. We create a digital twin of your space.",
    story: "Innovation meets craftsmanship. Our skilled technicians visit your space with state-of-the-art laser measuring equipment, capturing every angle, curve, and dimension with millimeter precision. Back in our design studio, these measurements transform into detailed 3D digital layouts. You'll see exactly how your chosen stone will look in your space before a single cut is made. We optimize the layout to showcase the stone's natural beauty while ensuring structural integrity and minimal waste.",
    images: ["/stonesgallerystages/Phase 3- Templating & Digital Layout.webp"],
    color: "from-blue-50 to-cyan-100"
  },
  {
    number: 4,
    title: "Fabrication",
    subtitle: "THE ART OF TRANSFORMATION",
    description: "Master craftsmen breathe life into stone. Watch as raw slabs transform into refined pieces through skill, patience, and passion.",
    story: "This is where magic happens. In our state-of-the-art fabrication facility, raw stone slabs begin their transformation. Computer-guided precision cutting machines work in harmony with hand-crafted techniques passed down through generations. Each cut is deliberate, each edge meticulously polished, each seam perfectly matched. Our artisans treat every project as their personal masterpiece, ensuring the natural veining flows seamlessly, surfaces gleam with perfection, and every detail meets our exacting standards. The stone evolves from nature's raw beauty to refined elegance.",
    images: [
      "/stonesgallerystages/Phase 4- Fabrication.jpeg",
      "/stonesgallerystages/Phase 4- Fabrication2.jpeg",
      "/stonesgallerystages/Phase 4- Fabrication3.jpeg",
      "/stonesgallerystages/Phase 4- Fabrication4.jpeg"
    ],
    color: "from-orange-50 to-amber-100"
  },
  {
    number: 5,
    title: "Installation & Finishing",
    subtitle: "THE GRAND REVEAL",
    description: "The moment of transformation. Your space evolves into something extraordinary as expert installers bring everything together.",
    story: "This is the culmination of weeks of planning, crafting, and care. Our professional installation team arrives with your custom pieces, treating them with the reverence they deserve. Every element is positioned with precision, secured with expertise, and finished with attention to the smallest detail. Seams disappear, surfaces align perfectly, and the stone settles into its forever home. The final polish brings out the stone's full glory. And then, the moment you've been waiting for - you step back and witness your vision realized. Your space, transformed. Your dream, now reality.",
    images: [
      "/stonesgallerystages/Phase 5 installation.webp",
      "/stonesgallerystages/phase 5 finishing.jpeg"
    ],
    color: "from-emerald-50 to-teal-100"
  }
];

const JourneyStorytelling: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentPhase = phases[activePhase];

  return (
    <section ref={sectionRef} className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 text-center">
        <h2 className="text-4xl md:text-6xl font-light tracking-widest uppercase mb-6 text-stone-900">
          Our Journey Together
        </h2>
        <p className="text-lg md:text-xl text-stone-600 tracking-wide max-w-3xl mx-auto">
          From your first dream to the final masterpiece, experience the artistry and dedication behind every creation
        </p>
        <div className="mt-8 flex justify-center">
          <ChevronDown className="h-8 w-8 text-stone-400 animate-bounce" />
        </div>
      </div>

      {/* Phase Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {phases.map((phase, index) => (
            <button
              key={phase.number}
              onClick={() => setActivePhase(index)}
              className={`group relative px-6 py-3 border-2 transition-all duration-300 ${
                activePhase === index
                  ? 'border-stone-800 bg-stone-800 text-white scale-105'
                  : 'border-stone-300 bg-white text-stone-700 hover:border-stone-600'
              }`}
            >
              <span className="text-sm md:text-base tracking-wider font-medium">
                PHASE {phase.number}
              </span>
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-stone-800 transition-all duration-300 ${
                  activePhase === index ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentPhase.color} transition-all duration-700 -z-10`} />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-6 order-2 lg:order-1">
              {/* Phase Number */}
              <div className="flex items-center gap-4">
                <div className="text-8xl md:text-9xl font-light text-stone-300 leading-none">
                  {currentPhase.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-light tracking-wider uppercase text-stone-900 mb-2">
                    {currentPhase.title}
                  </h3>
                  <p className="text-sm md:text-base tracking-widest text-stone-500 uppercase">
                    {currentPhase.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-light italic border-l-4 border-stone-800 pl-6">
                {currentPhase.description}
              </p>

              {/* Story */}
              <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-lg">
                <p className="text-base md:text-lg text-stone-600 leading-relaxed">
                  {currentPhase.story}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-stone-600 tracking-wider">YOUR JOURNEY PROGRESS</span>
                  <span className="text-sm font-medium text-stone-800">{Math.round(((activePhase + 1) / phases.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-stone-800 transition-all duration-700 ease-out"
                    style={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Images */}
            <div className="order-1 lg:order-2">
              <div className={`grid ${currentPhase.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
                {currentPhase.images.map((image, idx) => (
                  <div
                    key={idx}
                    className={`relative rounded-lg overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105 ${
                      currentPhase.images.length === 1 ? 'h-[500px] md:h-[600px] col-span-2' : 
                      idx === 0 ? 'h-64 md:h-80 col-span-2' : 'h-48 md:h-64'
                    }`}
                    style={{
                      animationDelay: `${idx * 100}ms`,
                      animation: 'fadeInUp 0.8s ease-out forwards'
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${currentPhase.title} - Image ${idx + 1}`}
                      fill
                      className="object-contain bg-stone-50"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 flex justify-between items-center">
          <button
            onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
            disabled={activePhase === 0}
            className={`px-6 py-3 border-2 border-stone-800 tracking-wider transition-all ${
              activePhase === 0
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:bg-stone-800 hover:text-white'
            }`}
          >
            ← PREVIOUS
          </button>

          <span className="text-stone-600 tracking-wider text-sm md:text-base">
            {activePhase + 1} OF {phases.length}
          </span>

          <button
            onClick={() => setActivePhase(Math.min(phases.length - 1, activePhase + 1))}
            disabled={activePhase === phases.length - 1}
            className={`px-6 py-3 border-2 border-stone-800 tracking-wider transition-all ${
              activePhase === phases.length - 1
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:bg-stone-800 hover:text-white'
            }`}
          >
            NEXT →
          </button>
        </div>

        {/* Call to Action */}
        {activePhase === phases.length - 1 && (
          <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 text-center">
            <div className="bg-stone-900 text-white p-8 md:p-12 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-light tracking-wider uppercase mb-4">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-base md:text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
                Let's create something extraordinary together. Your masterpiece awaits.
              </p>
              <a
                href="/pages/our-contact"
                className="inline-block px-10 py-4 bg-white text-stone-900 hover:bg-stone-100 transition-all duration-300 tracking-wider text-sm md:text-base font-medium"
              >
                START YOUR JOURNEY
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Add keyframe animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default JourneyStorytelling;
