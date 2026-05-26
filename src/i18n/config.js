"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import FR from "../../public/locales/FR/index.js";
import EN from "../../public/locales/EN/index.js";

i18n.use(initReactI18next).init({
  resources: {
    fr: FR,
    en: EN,
  },
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
