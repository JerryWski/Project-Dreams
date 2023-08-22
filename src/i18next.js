import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetecor from 'i18next-browser-languagedetector';
import translationPL from './locales/pl/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  pl: {
    translation: translationPL,
  },
};

i18next.use(LanguageDetecor).use(initReactI18next).init({
  debug: true,
  fallbackLng: 'pl',
  resources,
});
