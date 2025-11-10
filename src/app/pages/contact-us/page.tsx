'use client';

import type { Metadata } from 'next';
import { FormEvent, useState } from 'react';
import Script from 'next/script';
import Image from 'next/image';

// Note: For client components, we'll add metadata via a separate metadata file
// This is a placeholder showing what metadata would be used

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const phoneNumber = '919448987711'; // WhatsApp number without +
    const message = `Hello, I'm ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({ fullName: '', phone: '', email: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative h-[50vh] min-h-[400px] bg-stone-900">
        <div className="absolute inset-0">
          <Image
            src="/showroomimage.webp"
            alt="Stones Gallery Contact"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] uppercase mb-4">
              HELLO THERE!
            </h1>
            <p className="text-lg md:text-xl tracking-wider max-w-2xl mx-auto opacity-90">
              Embark on a journey with us into the world of premium natural stones. 
              Let's create something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 md:py-24 bg-white border-b border-[#e5e5e5]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            
            {/* TALK Card */}
            <div className="text-center border-r-0 md:border-r border-[#e5e5e5] last:border-r-0">
              <div className="mb-6">
                <svg className="w-12 h-12 mx-auto text-[#666] stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="text-sm uppercase tracking-[0.25em] text-[#333] mb-4 font-normal">TALK</h2>
              <a 
                href="tel:+919448987711" 
                className="text-[#666] hover:text-[#333] transition text-sm"
              >
                +91 94489 87711
              </a>
            </div>

            {/* MEET Card */}
            <div className="text-center border-r-0 md:border-r border-[#e5e5e5] last:border-r-0">
              <div className="mb-6">
                <svg className="w-12 h-12 mx-auto text-[#666] stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-sm uppercase tracking-[0.25em] text-[#333] mb-4 font-normal">MEET</h2>
              <a 
                href="https://share.google/crBA1Oy5veYbqWdoF"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-[#333] transition text-sm leading-relaxed inline-block"
              >
                Dish Impex LLP<br />
                Sy.no, 16/2, hobli, begihalli village, taluk, Jigani, Anekal, Karnataka 560105
              </a>
            </div>

            {/* WRITE Card */}
            <div className="text-center">
              <div className="mb-6">
                <svg className="w-12 h-12 mx-auto text-[#666] stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-sm uppercase tracking-[0.25em] text-[#333] mb-4 font-normal">WRITE</h2>
              <a 
                href="mailto:dishimpex@gmail.com" 
                className="text-[#666] hover:text-[#333] transition text-sm"
              >
                dishimpex@gmail.com
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/showroomimagebottom.webp"
                alt="Stones Gallery Interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right Side - Form */}
            <div className="space-y-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input
                    className="w-full border border-[#dcdcdc] bg-white px-4 py-3 text-sm outline-none focus:border-[#333] transition placeholder:text-[#999] placeholder:uppercase placeholder:tracking-wider"
                    placeholder="FULL NAME*"
                    aria-label="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <input
                    className="w-full border border-[#dcdcdc] bg-white px-4 py-3 text-sm outline-none focus:border-[#333] transition placeholder:text-[#999] placeholder:uppercase placeholder:tracking-wider"
                    placeholder="PHONE*"
                    type="tel"
                    aria-label="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <input
                    className="w-full border border-[#dcdcdc] bg-white px-4 py-3 text-sm outline-none focus:border-[#333] transition placeholder:text-[#999] placeholder:uppercase placeholder:tracking-wider"
                    placeholder="EMAIL*"
                    type="email"
                    aria-label="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <textarea
                    className="w-full border border-[#dcdcdc] bg-white px-4 py-3 text-sm outline-none focus:border-[#333] transition placeholder:text-[#999] placeholder:uppercase placeholder:tracking-wider resize-none"
                    placeholder="MESSAGE"
                    rows={6}
                    aria-label="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 border border-[#dcdcdc] rounded"
                  />
                  <label htmlFor="newsletter" className="text-sm text-[#666] cursor-pointer">
                    Subscribe to our newsletter
                  </label>
                </div>
                <div>
                  <button 
                    type="submit"
                    className="w-full px-12 py-4 bg-[#4a4a4a] hover:bg-[#333] text-white text-xs uppercase tracking-[0.2em] transition-colors"
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.2em] text-center text-[#333] mb-12 uppercase">
            Visit Our Showroom
          </h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62229.05500832097!2d77.54814287772911!3d12.792582679619444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf9b59d3b33bd168!2sDISH%20IMPEX%20LLP%20-%20STONE%20BOUTIQUE%20BENGALURU!5e0!3m2!1sen!2sin!4v1709393742612!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stones Gallery Location - Dish Impex LLP, Jigani"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

