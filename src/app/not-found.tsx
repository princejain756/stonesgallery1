"use client";

import { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";

// Note: Metadata export removed as this is now a client component
// The metadata is handled in the root layout for 404 pages

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/pages/blog?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const popularLinks = [
    { href: "/pages/our-collection", label: "Browse Collections", icon: "🏛️" },
    { href: "/pages/our-contact", label: "Our Contact", icon: "📞" },
    { href: "/pages/blog", label: "Stone Guides & Blog", icon: "📚" },
    { href: "/pages/faq", label: "FAQ", icon: "❓" },
    { href: "/pages/locations/jaipur", label: "Visit Jaipur Showroom", icon: "📍" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-white flex items-center">
      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-9xl font-bold text-stone-900 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            The page you're looking for seems to have been moved, deleted, or doesn't exist. 
            Let's get you back on track!
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for marble, granite, sculptures..."
              className="w-full px-6 py-4 rounded-lg border-2 border-stone-300 focus:border-stone-900 focus:outline-none text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-stone-900 hover:bg-stone-800 text-white px-6 py-2 rounded-lg transition-colors"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        {/* Popular Links */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-stone-900 mb-8 text-center">
            Popular Pages
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {popularLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white hover:bg-stone-50 border-2 border-stone-200 hover:border-stone-900 rounded-lg p-6 transition-all text-center group"
              >
                <div className="text-4xl mb-3">{link.icon}</div>
                <span className="text-lg font-semibold text-stone-900 group-hover:text-stone-800">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-stone-900 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
            <p className="text-stone-300 mb-6">
              Chat with our stone experts on WhatsApp
            </p>
            <a
              href="https://wa.me/919448987711?text=Hi%20Stones%20Gallery%2C%20I%20need%20assistance."
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              WhatsApp: +91 94489 87711
            </a>
          </div>

          <div className="bg-stone-100 rounded-lg p-8 text-center border-2 border-stone-200">
            <h3 className="text-2xl font-bold text-stone-900 mb-4">Browse All Products</h3>
            <p className="text-stone-700 mb-6">
              Explore our complete catalog of premium stones
            </p>
            <Link
              href="/pages/our-collection"
              className="inline-block bg-stone-900 hover:bg-stone-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View Collections
            </Link>
          </div>
        </div>

        {/* Go Home */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-lg font-semibold text-stone-900 hover:text-stone-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
