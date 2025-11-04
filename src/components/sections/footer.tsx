import React from 'react';
import Link from 'next/link';

const navLinks = [
  { href: "/pages/our-story", label: "OUR STORY" },
  { href: "/pages/our-collection", label: "OUR COLLECTIONS" },
  { href: "/pages/our-projects", label: "OUR PROJECTS" },
  { href: "/pages/our-services", label: "OUR SERVICES" },
];

const socialIcons = [
  { href: 'https://www.instagram.com/miraclestonex24/', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/svgs/instagram_icon-5.svg', alt: 'Instagram' },
  { href: 'https://m.facebook.com/NivasaHome/', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/svgs/facebook_icon-6.svg', alt: 'Facebook' },
  { href: 'https://www.linkedin.com/company/nivasa-home', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/svgs/linkedin_icon-7.svg', alt: 'LinkedIn' },
  { href: 'https://youtube.com/channel/UCfpaFEH02b2VMOu2I3yQ-Xg', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/svgs/youTube_icon-8.svg', alt: 'YouTube' },
  { href: 'https://in.pinterest.com/NIVASA_HOME/', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/svgs/pinterest_icon-9.svg', alt: 'Pinterest' },
  { href: 'https://www.houzz.in/pro/nivel-nivasa/nivasa', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/svgs/houzz_link-10.svg', alt: 'Houzz' },
];

const SocialIcon = ({ href, src, alt }: { href: string; src: string; alt: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={alt}
    className="group transition-transform duration-300 ease-in-out hover:-translate-y-[2px]"
  >
    <div
      className="h-7 w-7 bg-[#666666] group-hover:bg-[#333333] transition-colors duration-300 md:h-8 md:w-8"
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
      }}
    />
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8]">
      <div className="mx-auto max-w-[1200px] px-8 py-16 md:px-5">
        <div className="text-center">
          <h2 className="font-display mb-4 text-[2rem] leading-none tracking-[0.3em] text-[#333333]">
            STONES GALLERY
          </h2>
          <p className="text-sm uppercase tracking-[0.15em] text-[#999999]">
            OUR WORLD
          </p>
          <p className="text-xs tracking-[0.1em] text-[#999999] mt-4">
            By Taruna
          </p>
        </div>

        <nav className="my-12">
          <ul className="grid grid-cols-1 gap-y-6 text-center md:grid-cols-4 md:gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm uppercase tracking-[0.1em] text-[#666666] transition-colors duration-300 hover:text-[#333333]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <hr className="my-12 border-t border-[#dddddd]" />

        <div className="text-center">
          <p className="mb-8 text-xs uppercase tracking-[0.15em] text-[#999999]">
            REACH US
          </p>
          <div className="flex items-center justify-center gap-6 md:gap-8">
            {socialIcons.map((icon) => (
              <SocialIcon key={icon.alt} href={icon.href} src={icon.src} alt={icon.alt} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;