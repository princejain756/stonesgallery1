import Image from 'next/image';
import Link from 'next/link';

interface Collection {
  title: string;
  imageUrl: string;
  heightClass: string;
  slug: string;
}

const collectionsData: Collection[] = [
  {
    title: "DINING TABLES",
    imageUrl: "/collections/stonesgallerycollections/diningtablebig.webp",
    heightClass: "h-[500px]",
    slug: "dining-tables"
  },
  {
    title: "IDOLS AND TEMPLES",
    imageUrl: "/Marble temples/majestic lotus pavilion.jpg",
    heightClass: "h-[500px]",
    slug: "idols-and-temples"
  },
  {
    title: "HOME DECOR",
    imageUrl: "/collections/stonesgallerycollections/modernartbig.webp",
    heightClass: "h-[500px]",
    slug: "home-decor"
  },
  {
    title: "FOUNTAIN",
    imageUrl: "/collections/stonesgallerycollections/fountainbig.webp",
    heightClass: "h-[500px]",
    slug: "fountain"
  },
  {
    title: "WALL CLADDING",
    imageUrl: "/collections/stonesgallerycollections/WALLPANELBIG.webp",
    heightClass: "h-[500px]",
    slug: "wall-cladding"
  }
];

const CollectionTile = ({ collection }: { collection: Collection }) => {
  return (
    <Link href={`/pages/our-collection?collection=${collection.slug}`} className={`group relative block overflow-hidden ${collection.heightClass}`}>
      <Image
        src={collection.imageUrl}
        alt={collection.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-all duration-400 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-center px-4">
          {collection.title}
        </h3>
      </div>
    </Link>
  );
};

const CollectionsGrid = () => {
  return (
    <section className="bg-background py-20 px-5 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {collectionsData.map((collection, index) => (
            <CollectionTile key={index} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsGrid;