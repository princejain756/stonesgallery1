'use client';

import type { Metadata } from 'next';
import { FormEvent, useState } from 'react';
import Script from 'next/script';

// Note: For client components, we'll add metadata via a separate metadata file
// This is a placeholder showing what metadata would be used

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const phoneNumber = '919448987711'; // WhatsApp number without +
    const message = `Hello, I'm ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-white text-[#8d8986]">
      <section className="mx-auto max-w-[900px] px-5 py-16 md:py-24">
        <h1 className="mb-8 text-center text-2xl uppercase tracking-[0.25em] text-[#333]">
          Our Contact
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-sm uppercase tracking-[0.2em] text-[#333]">Studio</h2>
            <p className="text-sm leading-7">
              Stones Gallery
              <br />
              <a href="tel:+919448987711" className="hover:text-[#333] transition">
                +91 94489 87711
              </a>
              <br />
              <a href="https://wa.me/919448987711" target="_blank" rel="noopener noreferrer" className="hover:text-[#333] transition">
                WhatsApp: +91 94489 87711
              </a>
              <br />
              <a href="mailto:dishimpex@gmail.com" className="hover:text-[#333] transition">
                Email: dishimpex@gmail.com
              </a>
            </p>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <input
              className="border border-[#dcdcdc] bg-white px-3 py-3 text-sm outline-none focus:border-[#333]"
              placeholder="Name"
              aria-label="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              className="border border-[#dcdcdc] bg-white px-3 py-3 text-sm outline-none focus:border-[#333]"
              placeholder="Email"
              type="email"
              aria-label="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <textarea
              className="border border-[#dcdcdc] bg-white px-3 py-3 text-sm outline-none focus:border-[#333]"
              placeholder="Message"
              rows={5}
              aria-label="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <button 
              type="submit"
              className="border border-[#cfcfcf] px-8 py-3 text-xs uppercase tracking-[0.15em] text-[#444] hover:bg-black hover:text-white hover:border-black transition-colors"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>
      <section className="mx-auto max-w-[900px] px-5 pb-16 md:pb-24">
        <h2 className="mb-8 text-center text-xl uppercase tracking-[0.25em] text-[#333]">
          Our Location
        </h2>
        <div className="aspect-video w-full">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=RDzzBg5y6OyOcZ28A"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Stones Gallery Location"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

