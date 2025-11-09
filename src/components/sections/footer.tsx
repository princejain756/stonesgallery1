import React from 'react';
import Link from 'next/link';

const socialIcons = [
  { href: 'https://www.instagram.com/miraclestonex24/', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/svgs/instagram_icon-5.svg', alt: 'Instagram' },
  { href: 'https://m.facebook.com/NivasaHome/', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/svgs/facebook_icon-6.svg', alt: 'Facebook' },
  { href: 'https://www.linkedin.com/company/miracle-stone-exports-llp/?originalSubdomain=in', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/svgs/linkedin_icon-7.svg', alt: 'LinkedIn' },
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
      <div className="mx-auto max-w-[1200px] px-8 py-0 md:px-5">
        <div className="py-12">
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

        <div className="grid gap-8 md:grid-cols-3 text-left text-[#4a4a4a] mt-12">
          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] uppercase mb-3">Bengaluru Stone Experts</h3>
            <p className="text-sm leading-relaxed">
              Stones Gallery by Dish Impex LLP curates Italian marble, quartzite, Dark Roast granite, pistachio marble,
              temple sculptures, and custom stone furniture for luxury villas and landmark commercial spaces across Bengaluru.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] uppercase mb-3">Priority Micro-Markets</h3>
            <ul className="text-sm space-y-1">
              <li>Jigani granite hub &amp; stone factory outlets</li>
              <li>JP Nagar, Jayanagar &amp; Banashankari residences</li>
              <li>Koramangala, Indiranagar &amp; Whitefield penthouses</li>
              <li>Electronic City, Sarjapur Road &amp; Yelahanka projects</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] uppercase mb-3">Pan-India Export Desk</h3>
            <p className="text-sm leading-relaxed">
              We export premium granite slabs, onyx, bespoke temple idols, and handcrafted stone furniture to architects,
              builders, and retailers across India with turnkey logistics support.
            </p>
            <ul className="mt-3 text-sm space-y-1">
              <li>Delhi NCR • Mumbai • Hyderabad • Chennai</li>
              <li>Pune • Ahmedabad • Kolkata • Kochi • Jaipur</li>
            </ul>
            <Link
              href="/pages/contact-us"
              className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-[#333333] border-b border-[#333333]/40 hover:border-[#333333]"
            >
              PLAN A SITE VISIT
            </Link>
          </div>
        </div>

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

        <hr className="my-12 border-t border-[#dddddd]" />

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 text-[#333333]">Company</h4>
            <ul className="space-y-2 text-sm text-[#666666]">
              <li><Link href="/pages/about" className="hover:text-[#333333] transition-colors">About Us</Link></li>
              <li><Link href="/pages/our-story" className="hover:text-[#333333] transition-colors">Our Story</Link></li>
              <li><Link href="/pages/our-projects" className="hover:text-[#333333] transition-colors">Projects</Link></li>
              <li><Link href="/pages/contact-us" className="hover:text-[#333333] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 text-[#333333]">Products</h4>
            <ul className="space-y-2 text-sm text-[#666666]">
              <li><Link href="/pages/our-collection" className="hover:text-[#333333] transition-colors">Collections</Link></li>
              <li><Link href="/pages/our-services" className="hover:text-[#333333] transition-colors">Services</Link></li>
              <li><Link href="/pages/blog" className="hover:text-[#333333] transition-colors">Stone Guides</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 text-[#333333]">Locations</h4>
            <ul className="space-y-2 text-sm text-[#666666]">
              <li><Link href="/pages/locations/jaipur" className="hover:text-[#333333] transition-colors">Jaipur Factory</Link></li>
              <li className="text-xs">
                <strong>Bengaluru Locations:</strong><br />
                Miracle Stonex, 16/2, Bannerghatta Rd,<br />
                Malle Nalsandra, Begihalli, Jigani,<br />
                Karnataka 560105
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 text-[#333333]">Support</h4>
            <ul className="space-y-2 text-sm text-[#666666]">
              <li><Link href="/pages/faq" className="hover:text-[#333333] transition-colors">FAQ</Link></li>
              <li><Link href="/pages/privacy-policy" className="hover:text-[#333333] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/pages/terms-of-service" className="hover:text-[#333333] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#dddddd] pt-8 pb-8 text-center">
          <p className="text-xs text-[#999999] tracking-[0.1em]">
            © {new Date().getFullYear()} Stones Gallery by Dish Impex LLP. All rights reserved.
          </p>
          <p className="text-xs text-[#999999] mt-2">
            Premium Marble, Granite & Temple Sculptures | Jaipur, Rajasthan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
