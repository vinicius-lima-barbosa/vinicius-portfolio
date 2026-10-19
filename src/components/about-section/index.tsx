import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-space">
      <div className="page-shell grid gap-12 lg:grid-cols-[1fr_1.7fr]">
        <div>
          <p className="eyebrow mb-4">03 / {t('about.label')}</p>
          <h2 className="section-title">{t('about.title')}</h2>
        </div>
        <div>
          <p className="text-lg text-foreground">{t('about.description')}</p>
          <p className="mt-6 text-base text-muted">{t('about.approach')}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="panel p-6">
              <p className="eyebrow mb-4">{t('about.educationLabel')}</p>
              <h3 className="text-base font-semibold">{t('about.degree')}</h3>
              <p className="mt-2 text-sm text-muted">{t('about.university')}</p>
              <p className="mt-4 text-sm text-muted">
                {t('about.educationDate')}
              </p>
            </div>
            <div className="panel p-6">
              <p className="eyebrow mb-4">{t('about.languageLabel')}</p>
              <h3 className="text-base font-semibold">{t('about.english')}</h3>
              <p className="mt-2 text-sm text-muted">
                {t('about.englishDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
