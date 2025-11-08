'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, User, X } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://www.instagram.com/miraclestonex24/',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/svgs/instagram_icon_white-2.svg',
    alt: 'Instagram',
  },
  {
    href: 'https://in.pinterest.com/NIVASA_HOME/',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/svgs/pinterest_icon_white-3.svg',
    alt: 'Pinterest',
  },
  {
    href: 'https://m.facebook.com/NivasaHome/',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/svgs/facebook_icon-white-4.svg',
    alt: 'Facebook',
  },
];

const navLinks = [
  { href: '/pages/our-story', label: 'OUR STORY' },
  { href: '/pages/our-collection', label: 'OUR COLLECTIONS' },
  { href: '/pages/our-projects', label: 'OUR PROJECTS' },
  { href: '/pages/our-services', label: 'OUR SERVICES' },
  { href: '/pages/blog', label: 'BLOG' },
  { href: '/pages/contact-us', label: 'OUR CONTACT' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? 'bg-[#1a1a1a]/95 backdrop-blur-md'
            : 'bg-gradient-to-b from-[#3a3a3a]/80 to-[#1f1f1f]/80'
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          {/* Desktop Header */}
          <div className="hidden lg:flex flex-col">
            <div className="flex items-center justify-between py-6">
              <div className="w-1/3">
                <ul className="flex items-center gap-4">
                  {socialLinks.map((link) => (
                    <li key={link.alt}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                        aria-label={link.alt}
                      >
                        <span className="h-9 w-9 rounded-full border border-white/50 flex items-center justify-center transition-all duration-200 hover:border-white/80">
                          <Image
                            src={link.src}
                            alt={link.alt}
                            width={18}
                            height={18}
                            className="opacity-90 group-hover:opacity-100"
                          />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-1/3 flex justify-center">
                <Link href="/" className="text-white hover:text-white/90 transition-colors">
                  <span className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase">
                    Stones Gallery
                  </span>
                </Link>
              </div>
              <div className="w-1/3 flex justify-end items-center gap-4">
                <Link href="/account" aria-label="Account" className="group">
                  <span className="h-9 w-9 rounded-full border border-white/50 flex items-center justify-center transition-all duration-200 hover:border-white/80">
                    <User className="h-5 w-5 text-white/95" />
                  </span>
                </Link>
                <button aria-label="Search" className="group">
                  <span className="h-9 w-9 rounded-full border border-white/50 flex items-center justify-center transition-all duration-200 hover:border-white/80">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/svgs/search_icon-03-1.svg"
                      alt="Search"
                      width={18}
                      height={18}
                      className="opacity-95"
                    />
                  </span>
                </button>
              </div>
            </div>
            <div className="px-2">
              <div className="h-px w-full border-t border-white/50" />
            </div>
            <nav className="flex justify-center items-center h-[52px]">
              <ul className="flex items-center w-full max-w-[1100px] justify-between">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white text-[11px] tracking-[0.1em] font-medium uppercase transition-colors hover:text-white/90"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden flex items-center justify-between h-[60px]">
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
              <Menu className="h-6 w-6 text-white" />
            </button>
            <Link href="/" className="text-white hover:text-white/90 transition-colors">
              <span className="text-lg font-light tracking-[0.15em] uppercase">
                Stones Gallery
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/account" aria-label="Account" className="group">
                <span className="h-8 w-8 rounded-full border border-white/50 flex items-center justify-center">
                  <User className="h-4 w-4 text-white/95" />
                </span>
              </Link>
              <button aria-label="Search" className="group">
                <span className="h-8 w-8 rounded-full border border-white/50 flex items-center justify-center">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/svgs/search_icon-03-1.svg"
                    alt="Search"
                    width={16}
                    height={16}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <nav
          className={`relative w-full max-w-xs h-full bg-[#181818] p-5 shadow-2xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-end mb-10">
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <ul className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-white text-base tracking-[0.1em] uppercase transition-colors hover:text-[#CCCCCC]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Header Backfill */}
      <div className="hidden lg:block h-[148px]" />
      <div className="lg:hidden h-[60px]" />
    </>
  );
}
