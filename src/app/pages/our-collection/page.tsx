'use client';

import { useEffect, useState, ReactNode } from 'react';
import CollectionDetail from '@/components/sections/collection-detail';

export default function CollectionPage() {
  const [collection, setCollection] = useState('dining-table');
  const [isMounted, setIsMounted] = useState(false);

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
    <main className="min-h-screen bg-white">
      <CollectionDetail slug={collection} />
    </main>
  );
}

