import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import en from "./translations/en";
import sr from "./translations/sr";

const LANGUAGES = {
  en,
  sr,
};

const LANGUAGE_DETECTOR = {
  type: "languageDetector",
  async: true,
  detect: (callback) => {
    AsyncStorage.getItem("user-language")
      .then((language) => {
        if (!language) {
          callback("en");
        } else {
          callback(language);
        }
      })
      .catch((err) => {
        callback("en");
      });
  },
  init: () => {},
  cacheUserLanguage: (language) => {
    AsyncStorage.setItem("user-language", language);
  },
};

i18n
  .use(LANGUAGE_DETECTOR)
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    returnObjects: true,
    resources: LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });
