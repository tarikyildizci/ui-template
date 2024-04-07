import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

export const initI18n = () => {
  i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      ns: ['translation'],
      fallbackLng: 'en',
      load: 'currentOnly',
      returnEmptyString: false,
      react: {
        useSuspense: true,
      },
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: `/locales/{{lng}}/translation.json`,
      },
    })
}
