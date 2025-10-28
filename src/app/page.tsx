import Header from '@/components/sections/header';
import WelcomeModal from '@/components/sections/welcome-modal';
import HeroVideo from '@/components/sections/hero-video';
import SplitHeroIntroducing from '@/components/sections/split-hero-introducing';
import ServicesHero from '@/components/sections/services-hero';
import CollectionsGrid from '@/components/sections/collections-grid';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <WelcomeModal />
      <HeroVideo />
      <SplitHeroIntroducing />
      <ServicesHero />
      <CollectionsGrid />
      <Footer />
    </main>
  );
}
