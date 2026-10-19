import { useTranslation } from 'react-i18next';
import NordsolLogo from '../../assets/NordsolLogo.png';
import Sun4Logo from '../../assets/Sun4Logo.png';

const EXPERIENCES = [
  {
    id: 'nordsol',
    name: 'Nordsol',
    logo: NordsolLogo,
    start: '2025-05',
    end: null
  },
  { id: 'sun4', name: 'Sun4', logo: Sun4Logo, start: '2025-07', end: '2026-04' }
];

const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section id="experiences" className="section-space">
      <div className="page-shell grid gap-12 lg:grid-cols-[1fr_1.7fr]">
        <div>
          <p className="eyebrow mb-4">02 / {t('experiences.label')}</p>
          <h2 className="section-title">{t('experiences.title')}</h2>
          <p className="mt-6 max-w-sm text-base text-muted">
            {t('experiences.description')}
          </p>
        </div>
        <div className="space-y-8">
          {EXPERIENCES.map((experience) => (
            <article key={experience.id} className="panel p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-2">
                  <img
                    src={experience.logo}
                    alt={experience.name}
                    width={40}
                    height={40}
                    loading="lazy"
                    className="max-h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{experience.name}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {t(`experiences.${experience.id}.role`)}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted">
                <time dateTime={experience.start}>
                  {t(`experiences.${experience.id}.start`)}
                </time>
                {' · '}
                {experience.end ? (
                  <time dateTime={experience.end}>
                    {t(`experiences.${experience.id}.end`)}
                  </time>
                ) : (
                  t('experiences.current')
                )}
                {' / '}
                {t('experiences.remote')}
              </p>
              <p className="mt-4 text-base text-muted">
                {t(`experiences.${experience.id}.description`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
