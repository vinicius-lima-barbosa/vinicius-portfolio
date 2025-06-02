import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'home', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Projetos' },
  { id: 'contact', label: 'Contato' }
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let scrollTimeout: number;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const sections = NAV_ITEMS.map((item) =>
          document.getElementById(item.id)
        );
        const scrollPosition = window.scrollY + 100;

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          if (section) {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;

            if (
              scrollPosition >= top &&
              scrollPosition < bottom &&
              activeSection !== NAV_ITEMS[i].id
            ) {
              setActiveSection(NAV_ITEMS[i].id);
            }
          }
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 z-30 w-full border-b imperial-border shadow-lg">
      <nav className="max-w-screen-xl px-6 py-4 flex items-center justify-between">
        <h1 className="font-starwars text-xl font-bold text-sith-red text-glow">
          IMPÉRIO.GALÁTICO.DEV
        </h1>
        <div className="hidden md:flex gap-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`relative font-imperial font-medium tracking-wide px-3 py-2 transition-all duration-300 hover:cursor-pointer hover:[color:#dc143c] hover:tracking-widest ${
                activeSection === item.id
                  ? 'text-sith-red'
                  : 'text-empire-silver'
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-sith-red transition-all duration-300 ${
                  activeSection === item.id
                    ? 'w-full animate-lightsaber-glow'
                    : 'w-0'
                }`}
              />
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
