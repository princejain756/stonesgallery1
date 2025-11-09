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
            src="/jaipurshowroom.jpeg"
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
      <section className="py-16 md:py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            
            {/* TALK Card */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#333] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-[#333] mb-4 font-semibold">TALK</h2>
              <div className="space-y-2">
                <a 
                  href="tel:+919448987711" 
                  className="block text-[#666] hover:text-[#333] transition text-base"
                >
                  +91 94489 87711
                </a>
                <a 
                  href="https://wa.me/919448987711" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-[#666] hover:text-[#333] transition text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* MEET Card */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#333] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-[#333] mb-4 font-semibold">MEET</h2>
              <a 
                href="https://www.google.com/maps/place/Miracle+Stonex/@12.8685623,77.6410720,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae6b008975f2b7:0x3f6acb25fc6bb8ea!8m2!3d12.8685623!4d77.6436469!16s%2Fg%2F11hbghxkxz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-[#333] transition text-sm leading-relaxed block"
              >
                Miracle Stonex, 16/2,<br />
                Bannerghatta Rd, Jigani,<br />
                Bengaluru, Karnataka 560105
              </a>
            </div>

            {/* WRITE Card */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#333] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-[#333] mb-4 font-semibold">WRITE</h2>
              <a 
                href="mailto:dishimpex@gmail.com" 
                className="text-[#666] hover:text-[#333] transition text-base"
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
                src="/jaipurshowroom2.jpg"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2269827891867!2d77.64107197507637!3d12.868562287420844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b008975f2b7%3A0x3f6acb25fc6bb8ea!2sMiracle%20Stonex!5e0!3m2!1sen!2sin!4v1699500000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stones Gallery Location - Miracle Stonex, Jigani"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

