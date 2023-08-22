import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetecor from 'i18next-browser-languagedetector';
import translationPL from './locales/pl/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  en: {
    translation: translationEN,
    imageMotors: '/motor_section_eng.jpg',
  },
  pl: {
    translation: translationPL,
    image: '/motor_section.jpg',
  },
};

i18next.use(LanguageDetecor).use(initReactI18next).init({
  debug: true,
  fallbackLng: 'pl',
  resources,
});
