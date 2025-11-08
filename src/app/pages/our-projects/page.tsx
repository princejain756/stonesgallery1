import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';

const projects = [
  'https://cdn.shopify.com/s/files/1/0633/4911/2714/files/our_projects-42_1950x.jpg?v=1730018553',
  'https://cdn.shopify.com/s/files/1/0633/4911/2714/files/collections-17_1950x.jpg?v=1707587292',
  'https://cdn.shopify.com/s/files/1/0633/4911/2714/files/our_collections_banner-26_1950x.jpg?v=1707587426',
  'https://cdn.shopify.com/s/files/1/0633/4911/2714/files/our_projects-16_1950x.jpg?v=1730018553',
];

export default function OurProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-[#8d8986]">
      <Header />
      <section className="mx-auto max-w-[1200px] px-5 pt-10 md:pt-16">
        <h1 className="mb-8 text-center text-2xl uppercase tracking-[0.25em] text-[#333]">
          Our Projects
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden">
              <Image src={src} alt="Project" fill className="object-contain" />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

