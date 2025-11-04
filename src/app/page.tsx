import Header from '@/components/sections/header';
import WelcomeModal from '@/components/sections/welcome-modal';
import HeroVideo from '@/components/sections/hero-video';
import SplitHeroIntroducing from '@/components/sections/split-hero-introducing';
import ServicesHero from '@/components/sections/services-hero';
import WhereArtMeetsEngineering from '@/components/sections/where-art-meets-engineering';
import FeaturedCollections from '@/components/sections/featured-collections';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <WelcomeModal />
      <HeroVideo />
      <SplitHeroIntroducing />
      <ServicesHero />
      <WhereArtMeetsEngineering />
      <FeaturedCollections />
      <Footer />
    </main>
  );
}
