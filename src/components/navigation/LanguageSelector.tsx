import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();

  return (
    <div
      className="flex shrink-0 items-center gap-1"
      role="group"
      aria-label={t('language.select')}
    >
      {['pt-BR', 'en-US'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => void i18n.changeLanguage(code)}
          aria-label={t(
            code === 'pt-BR' ? 'language.portuguese' : 'language.english'
          )}
          aria-pressed={i18n.resolvedLanguage === code}
          className={`rounded-md px-2 py-1 text-xs font-semibold transition-colors duration-700 ease-fluid hover:text-foreground ${i18n.resolvedLanguage === code ? 'bg-surface-raised text-foreground' : 'text-muted'}`}
        >
          {code === 'pt-BR' ? 'PT' : 'EN'}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
