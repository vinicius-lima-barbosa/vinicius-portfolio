import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const TaglineSection = () => {
  const { t, i18n } = useTranslation();
  const ref = useRef<HTMLParagraphElement>(null);
  const lines = [t('tagline.line1'), t('tagline.line2')];

  useEffect(() => {
    const words = ref.current?.querySelectorAll<HTMLElement>('.tagline-word');
    if (!words) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.visible = 'true';
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -15% 0px', threshold: 0.5 }
    );
    words.forEach((word) => observer.observe(word));
    return () => observer.disconnect();
  }, [i18n.resolvedLanguage]);

  let wordIndex = 0;
  return (
    <section
      className="section-space border-y border-line"
      aria-label={t('tagline.label')}
    >
      <div className="page-shell">
        <p className="eyebrow mb-8">{t('tagline.label')}</p>
        <p
          ref={ref}
          key={i18n.resolvedLanguage}
          className="max-w-[680px] text-4xl font-semibold tracking-tight md:text-5xl"
        >
          {lines.map((line) => (
            <span key={line} className="block">
              {line.split(' ').map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className="tagline-word mr-3 inline-block"
                  style={{ transitionDelay: `${wordIndex++ * 75}ms` }}
                >
                  {word}
                </span>
              ))}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default TaglineSection;
