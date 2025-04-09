import { Fragment } from 'react';
import Navbar from '@/components/ui/navbar';
import HeroBanner from '@/components/sections/hero-banner';
import LineupSection from '@/components/sections/lineup-section';
import ArtistsSection from '@/components/sections/artists-section';
import TicketsSection from '@/components/sections/tickets-section';
import InfoSection from '@/components/sections/info-section';
import AboutSection from '@/components/sections/about-section';
import NewsletterSection from '@/components/sections/newsletter-section';
import Footer from '@/components/sections/footer';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <HeroBanner />
        <LineupSection />
        <ArtistsSection />
        <TicketsSection />
        <InfoSection />
        <AboutSection />
        <NewsletterSection />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
