import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng:
      typeof window !== "undefined"
        ? window.localStorage.getItem("lang")
        : false,
    fallbackLng: "en",
    debug: false,
    react: {
      useSuspense: false,
    },
    detection: {
      order: [
        "localStorage",
        "cookie",
        "sessionStorage",
        "navigator",
        "htmlTag",
      ],
      lookupLocalStorage: "lang",
      lookupCookie: "i18next",
      lookupSessionStorage: "i18nextLng",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
// import i18n from "i18next";
// import Backend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
// import { initReactI18next } from "react-i18next";

// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     lng: "en", // Set the language to English
//     fallbackLng: "en",
//     debug: false,
//     react: {
//       useSuspense: false,
//     },
//     detection: {
//       order: [
//         "localStorage",
//         "cookie",
//         "sessionStorage",
//         "navigator",
//         "htmlTag",
//       ],
//       lookupLocalStorage: "lang",
//       lookupCookie: "i18next",
//       lookupSessionStorage: "i18nextLng",
//     },
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;
