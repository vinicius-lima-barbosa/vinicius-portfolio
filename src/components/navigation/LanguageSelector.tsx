import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'pt-BR', name: t('language.portuguese'), flag: '🇧🇷' },
    { code: 'en-US', name: t('language.english'), flag: '🇺🇸' }
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/20 border border-empire-silver/20 text-empire-silver hover:bg-black/30 hover:cursor-pointer transition-all duration-300"
        aria-label="Select Language"
      >
        <Globe size={18} />
        <span className="text-sm font-medium">{currentLanguage.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute transition-all duration-200 top-full mt-2 right-0 bg-black/90 border border-empire-silver/20 rounded-lg shadow-xl z-50 min-w-[150px]">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-empire-silver/10 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg hover:cursor-pointer ${
                i18n.language === language.code
                  ? 'bg-empire-silver/20 text-[#dc143c]'
                  : 'text-empire-silver'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="text-md font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default LanguageSelector;
