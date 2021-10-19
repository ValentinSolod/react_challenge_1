import i18n from "i18next";
import translationEN from "./en/index.json";
import translationRU from "./ru/index.json";
import { initReactI18next } from "react-i18next";
import intervalPlural from "i18next-intervalplural-postprocessor";

const resources = {
  en: { translation: translationEN },
  ru: { translation: translationRU },
};

i18n.use(initReactI18next).use(intervalPlural).init({
  lng: "en",
  resources,
});
