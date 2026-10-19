import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const NAV_ITEMS = ['home', 'projects', 'experiences', 'about', 'contact'];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -55% 0px' }
    );
    NAV_ITEMS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();

    const close = () => {
      setIsOpen(false);
      toggleRef.current?.focus();
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key !== 'Tab') return;
      const links = Array.from(
        menuRef.current?.querySelectorAll<HTMLAnchorElement>('a') ?? []
      );
      const first = links[0];
      const last = links[links.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        toggleRef.current?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        toggleRef.current?.focus();
      } else if (document.activeElement === toggleRef.current) {
        event.preventDefault();
        (event.shiftKey ? last : first)?.focus();
      }
    };
    const media = window.matchMedia('(min-width: 1024px)');
    const handleResize = () => {
      if (media.matches) close();
    };
    media.addEventListener('change', handleResize);
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      media.removeEventListener('change', handleResize);
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-6 pt-6 md:px-8">
        <nav
          aria-label={t('navigation.label')}
          className="mx-auto flex w-max max-w-full items-center gap-6 rounded-full border border-line bg-background/90 px-6 py-3 backdrop-blur-xl"
        >
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="shrink-0 text-sm font-bold tracking-tight"
            aria-label={t('navigation.homeLabel')}
          >
            VB<span className="text-sith-red">.</span>
          </a>
          <div className="hidden items-center gap-6 lg:flex">
            {NAV_ITEMS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? 'location' : undefined}
                className={`text-sm font-medium transition-colors duration-700 ease-fluid hover:text-foreground ${activeSection === id ? 'text-foreground' : 'text-muted'}`}
              >
                {t(`navigation.${id}`)}
                {activeSection === id && (
                  <span className="mx-auto mt-1 block h-0.5 w-3 rounded-full bg-sith-red" />
                )}
              </a>
            ))}
          </div>
          <LanguageSelector />
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t(isOpen ? 'navigation.close' : 'navigation.open')}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="relative flex h-8 w-8 items-center justify-center lg:hidden"
          >
            <span
              aria-hidden="true"
              className={`menu-line ${isOpen ? 'rotate-45' : '-translate-y-1'}`}
            />
            <span
              aria-hidden="true"
              className={`menu-line ${isOpen ? '-rotate-45' : 'translate-y-1'}`}
            />
          </button>
        </nav>
      </header>
      {isOpen && (
        <div
          ref={menuRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label={t('navigation.label')}
          className="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto bg-black/80 px-6 pb-12 pt-24 backdrop-blur-3xl lg:hidden"
        >
          <div className="flex w-full max-w-md flex-col gap-6">
            {NAV_ITEMS.map((id, index) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                aria-current={activeSection === id ? 'location' : undefined}
                style={{ animationDelay: `${100 + index * 50}ms` }}
                className="mobile-link flex items-center justify-between text-3xl font-semibold"
              >
                {t(`navigation.${id}`)}
                <span className="text-sm text-sith-red">0{index + 1}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
