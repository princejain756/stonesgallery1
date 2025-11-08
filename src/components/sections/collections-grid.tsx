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
    title: "PATTERN PLAY",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/images/PATTERN_PLAY-04_1950x-18.jpg",
    heightClass: "h-[600px]",
    slug: "pattern-play"
  },
  {
    title: "Beautés de la Campagne",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/images/BEAUTS-14_1950x-20.jpg",
    heightClass: "h-[400px]",
    slug: "beautes-de-la-campagne"
  },
  {
    title: "TRANSCENDENCE",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/images/TRANS-05_1950x-22.jpg",
    heightClass: "h-[400px]",
    slug: "transcendence"
  },
  {
    title: "LE REFORMAGE",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/images/LE_REFORMAGE-14_1950x-24.jpg",
    heightClass: "h-[600px]",
    slug: "le-reformage"
  },
  {
    title: "MORE THAN MEETS THE EYE",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/images/MORE-04_1950x-26.jpg",
    heightClass: "h-[600px]",
    slug: "more-than-meets-the-eye"
  },
  {
    title: "KANE N ABEL",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/images/KANE-14_1950x-28.jpg",
    heightClass: "h-[400px]",
    slug: "kane-n-abel"
  },
  {
    title: "ALL THAT JAZZ",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/images/collections-29_b75de5f6-217f-40a1-9d5e-03f4452b7e3-29.jpg",
    heightClass: "h-[400px]",
    slug: "all-that-jazz"
  },
  {
    title: "NATURAL ESSENCE",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/images/our_collections_banner-26_9f9d5e78-79e7-4e9e-b874--30.jpg",
    heightClass: "h-[600px]",
    slug: "natural-essence"
  },
  {
    title: "KNOCK ON WOOD",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/images/collections-37-19.jpg",
    heightClass: "h-[600px]",
    slug: "knock-on-wood"
  },
  {
    title: "THE ART OF HAND TUFTING",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/604c8d9d-25d9-4b31-97a8-25b3962c55db-nivasa-com/assets/images/Vienna_Bed_-_By_Nivasa_1_dfbd543f-372f-44bf-af38-c-25.jpg",
    heightClass: "h-[400px]",
    slug: "the-art-of-hand-tufting"
  }
];

const CollectionTile = ({ collection }: { collection: Collection }) => {
  return (
    <Link href={`/collections/${collection.slug}`} className={`group relative block overflow-hidden ${collection.heightClass}`}>
      <Image
        src={collection.imageUrl}
        alt={collection.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-all duration-400 ease-in-out group-hover:scale-105"
      />
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