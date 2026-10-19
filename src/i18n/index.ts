import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptBR from './locales/pt-BR.json';
import enUS from './locales/en-US.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'pt-BR': {
        translation: ptBR
      },
      'en-US': {
        translation: enUS
      }
    },
    fallbackLng: 'pt-BR',
    supportedLngs: ['pt-BR', 'en-US'],
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'htmlTag', 'navigator'],
      caches: ['localStorage']
    },
    debug: false
  });

document.documentElement.lang = i18n.resolvedLanguage || 'pt-BR';
i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language;
});

export default i18n;
