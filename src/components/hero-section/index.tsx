import { useTranslation } from 'react-i18next';
import ProfileImage from '../../assets/my-image.jpeg';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="page-shell pb-16 pt-24 md:pb-24">
      <div className="grid items-center gap-16 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="eyebrow mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-sith-red" />
            {t('hero.role')}
          </p>
          <h1 className="hero-title max-w-[680px] text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {t('hero.line1')}
            <br />
            {t('hero.line2')}
          </h1>
          <p className="mt-8 max-w-[680px] text-lg text-muted">
            {t('hero.description')}
          </p>
          <a className="button-primary mt-8" href="#projects">
            {t('hero.button')} <span aria-hidden="true">↗</span>
          </a>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted">
            <span>{t('hero.production')}</span>
            <span>{t('hero.remote')}</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="panel relative overflow-hidden p-6 md:p-8">
            <div className="mb-8 flex items-center justify-between">
              <span className="eyebrow">{t('hero.profile')}</span>
              <span className="text-xs text-muted" aria-hidden="true">
                Vinícius Barbosa
              </span>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-64">
              <div className="portrait-orbit" aria-hidden="true" />
              <img
                src={ProfileImage}
                alt="Vinícius Barbosa"
                width={256}
                height={256}
                fetchPriority="high"
                className="h-full w-full rounded-full object-cover p-4"
              />
            </div>
            <div className="mt-8 text-center">
              <p className="text-2xl font-semibold tracking-tight">
                Vinícius Barbosa<span className="text-sith-red">.</span>
              </p>
              <p className="mt-2 text-sm text-muted">
                React · Node.js · TypeScript
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-4 text-xs text-muted">
              <span>{t('hero.signature')}</span>
              <span className="text-sith-red" aria-hidden="true">
                ✳
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
