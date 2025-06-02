import HeroSection from '../components/hero-section';
import Navigation from '../components/navigation';

const Index = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <main>
        <section
          id="about"
          className="pt-20 min-h-screen bg-gray-900 text-white"
        >
          <h2 className="text-4xl">Sobre</h2>
        </section>

        <section
          id="skills"
          className="pt-20 min-h-screen bg-gray-800 text-white"
        >
          <h2 className="text-4xl">Habilidades</h2>
        </section>

        <section
          id="projects"
          className="pt-20 min-h-screen bg-gray-700 text-white"
        >
          <h2 className="text-4xl">Projetos</h2>
        </section>

        <section
          id="contact"
          className="pt-20 min-h-screen bg-gray-600 text-white"
        >
          <h2 className="text-4xl">Contato</h2>
        </section>
      </main>
    </>
  );
};

export default Index;
