'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, User, X } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://www.instagram.com/nivasa_home/',
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
          isScrolled ? 'bg-[#181818]/95 backdrop-blur-md' : 'bg-transparent'
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
                        className="opacity-80 hover:opacity-100 transition-opacity"
                      >
                        <Image src={link.src} alt={link.alt} width={18} height={18} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-1/3 flex justify-center">
                <Link href="/">
                  <span
                    className="text-white font-serif uppercase tracking-[0.3em] text-center inline-block"
                    style={{ width: '180px', fontSize: '18px' }}
                  >
                    NIVASA
                  </span>
                </Link>
              </div>
              <div className="w-1/3 flex justify-end items-center gap-6">
                <Link href="/account">
                  <User className="h-5 w-5 text-white transition-transform hover:scale-110" />
                </Link>
                <button aria-label="Search">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/svgs/search_icon-03-1.svg"
                    alt="Search"
                    width={20}
                    height={20}
                    className="transition-transform hover:scale-110"
                  />
                </button>
              </div>
            </div>
            <hr
              className={`border-white/20 transition-opacity duration-300 ${
                isScrolled ? 'border-b' : ''
              }`}
            />
            <nav className="flex justify-center items-center h-[50px]">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white text-sm tracking-[0.1em] uppercase transition-colors hover:text-[#CCCCCC]"
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
            <Link href="/">
              <span
                className="text-white font-serif uppercase tracking-[0.2em] text-center inline-block"
                style={{ width: '120px', fontSize: '18px' }}
              >
                NIVASA
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/account">
                <User className="h-5 w-5 text-white" />
              </Link>
              <button aria-label="Search">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/svgs/search_icon-03-1.svg"
                  alt="Search"
                  width={20}
                  height={20}
                />
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
      <div className="hidden lg:block h-[140px]" />
      <div className="lg:hidden h-[60px]" />
    </>
  );
}