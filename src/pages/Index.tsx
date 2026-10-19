import { useTranslation } from 'react-i18next';
import Navigation from '../components/navigation';
import HeroSection from '../components/hero-section';
import ProjectsSection from '../components/projects-section';
import ExperienceSection from '../components/experience-section';
import TaglineSection from '../components/tagline-section';
import AboutSection from '../components/about-section';
import SkillsSection from '../components/skills-section';
import ContactSection from '../components/contact-section';
import Footer from '../components/footer';
import Reveal from '../components/reveal';

const Index = () => {
  const { t } = useTranslation();

  return (
    <>
      <a
        href="#main"
        className="fixed left-6 top-6 z-[60] -translate-y-32 rounded-lg bg-sith-red px-4 py-3 font-semibold focus:translate-y-0"
      >
        {t('navigation.skip')}
      </a>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <Reveal>
          <HeroSection />
        </Reveal>
        <Reveal>
          <ProjectsSection />
        </Reveal>
        <Reveal>
          <ExperienceSection />
        </Reveal>
        <TaglineSection />
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal>
          <SkillsSection />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
      <Footer />
    </>
  );
};

export default Index;
