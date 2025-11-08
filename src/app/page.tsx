import Header from '@/components/sections/header';
import HeroVideo from '@/components/sections/hero-video';
import SplitHeroIntroducing from '@/components/sections/split-hero-introducing';
import ServicesHero from '@/components/sections/services-hero';
import WhereArtMeetsEngineering from '@/components/sections/where-art-meets-engineering';
import LiveTheExperience from '@/components/sections/live-the-experience';
import FeaturedCollections from '@/components/sections/featured-collections';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroVideo />
      <SplitHeroIntroducing />
      <ServicesHero />
      <WhereArtMeetsEngineering />
      <LiveTheExperience />
      <FeaturedCollections />
      <Footer />
    </main>
  );
}
