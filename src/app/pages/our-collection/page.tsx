import { ReactNode } from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import CollectionDetail from '@/components/sections/collection-detail';

interface Props {
  searchParams: { collection?: string };
  children?: ReactNode;
}

export default function CollectionPage({ searchParams }: Props) {
  const collection = searchParams?.collection || 'pistachio';

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CollectionDetail slug={collection} />
      <Footer />
    </main>
  );
}

