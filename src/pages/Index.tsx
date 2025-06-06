import { Toaster } from 'react-hot-toast';
import AboutSection from '../components/about-section';
import ContactSection from '../components/contact-section';
import Footer from '../components/footer';
import HeroSection from '../components/hero-section';
import Navigation from '../components/navigation';
import SkillsSection from '../components/skills-section';

const Index = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <Toaster position="bottom-right" />
    </>
  );
};

export default Index;
