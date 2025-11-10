'use client';

import { useEffect, useState, ReactNode } from 'react';
import Link from 'next/link';
import CollectionDetail from '@/components/sections/collection-detail';
import { ChevronRight } from 'lucide-react';

const collectionsCategories = [
  { name: 'Dining Tables', slug: 'dining-tables' },
  { name: 'Idols and Temples', slug: 'idols-and-temples' },
  { name: 'Home Decor', slug: 'home-decor' },
  { name: 'Fountain', slug: 'fountain' },
  { name: 'Wall Cladding', slug: 'wall-cladding' },
];

export default function CollectionPage() {
  const [collection, setCollection] = useState('dining-tables');
  const [isMounted, setIsMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Get collection from URL query params
    const params = new URLSearchParams(window.location.search);
    const collectionParam = params.get('collection');
    if (collectionParam) {
      setCollection(collectionParam);
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-white flex">
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-6 left-6 z-40 lg:hidden bg-stone-800 text-white p-3 rounded-full shadow-lg hover:bg-stone-700 transition-colors"
      >
        <ChevronRight className={`h-5 w-5 transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Sidebar - Categories */}
      <aside
        className={`fixed lg:relative top-0 left-0 h-screen w-64 bg-stone-50 border-r border-stone-200 overflow-y-auto transition-all duration-300 z-30 lg:z-auto ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="sticky top-0 bg-stone-50 border-b border-stone-200 p-6">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-stone-800">
            Collections
          </h2>
          <p className="text-xs text-stone-500 tracking-wide mt-1">Browse Our Categories</p>
        </div>

        <nav className="p-4 space-y-1">
          {collectionsCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/pages/our-collection?collection=${cat.slug}`}
              onClick={() => {
                setCollection(cat.slug);
                setSidebarOpen(false);
              }}
              className={`block px-4 py-3 rounded-lg transition-all text-sm tracking-wide font-medium ${
                collection === cat.slug
                  ? 'bg-stone-800 text-white shadow-md'
                  : 'text-stone-700 hover:bg-stone-200 hover:text-stone-900'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        {/* Footer Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-stone-100 to-transparent border-t border-stone-200">
          <p className="text-xs text-stone-600 text-center">
            Select a collection to explore
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <CollectionDetail slug={collection} />
      </div>
    </main>
  );
}

