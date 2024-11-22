import i18next from "i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next.init({
  lng: "de",
  resources: {
    de: {
      translation: {
        greeting: "hallo Welt",
      },
    },
  },
});
// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     debug: true,
//     lng: "fr",
//     // fallbackLng: ["en-US"],
//     resources: {
//       en: {
//         translantion: {
//           greeting: "Hello, Welcome!",
//         },
//       },
//       fr: {
//         translantion: {
//           greeting: "Bonjour, Bienvenue !",
//         },
//       },
//     },
//   });
