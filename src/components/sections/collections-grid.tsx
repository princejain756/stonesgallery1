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
    title: "DINING TABLE",
    imageUrl: "/collections/stonesgallerycollections/diningtablebig.webp",
    heightClass: "h-[500px]",
    slug: "dining-table"
  },
  {
    title: "MODERN ART",
    imageUrl: "/collections/stonesgallerycollections/modernartbig.webp",
    heightClass: "h-[400px]",
    slug: "modern-art"
  },
  {
    title: "TEMPLES",
    imageUrl: "/collections/stonesgallerycollections/templesbig.webp",
    heightClass: "h-[500px]",
    slug: "temples"
  },
  {
    title: "IDOLS",
    imageUrl: "/collections/stonesgallerycollections/idolsbig.webp",
    heightClass: "h-[400px]",
    slug: "idols"
  },
  {
    title: "MARBLE TEMPLES",
    imageUrl: "/Marble temples/majestic lotus pavilion.jpg",
    heightClass: "h-[500px]",
    slug: "marble-temples"
  },
  {
    title: "CUSTOMISED TEMPLES",
    imageUrl: "/Customised Temples/grand heritage mandap.jpg",
    heightClass: "h-[400px]",
    slug: "customised-temples"
  },
  {
    title: "TULSI POTS",
    imageUrl: "/tulsi pot/custom tulsi pots.jpg",
    heightClass: "h-[400px]",
    slug: "tulsi-pots"
  },
  {
    title: "FOUNTAIN",
    imageUrl: "/collections/stonesgallerycollections/fountainbig.webp",
    heightClass: "h-[500px]",
    slug: "fountain"
  },
  {
    title: "GARDEN DECOR",
    imageUrl: "/collections/stonesgallerycollections/gardendecorbig.webp",
    heightClass: "h-[400px]",
    slug: "garden-decor"
  },
  {
    title: "WALL PANEL",
    imageUrl: "/collections/stonesgallerycollections/WALLPANELBIG.webp",
    heightClass: "h-[500px]",
    slug: "wall-panel"
  },
  {
    title: "MARBLE SINKS",
    imageUrl: "/marblesinks/DISH IMPEX MARBLE SINKS WITH PRICE (3) (1)_page-0020.jpg",
    heightClass: "h-[400px]",
    slug: "marble-sinks"
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