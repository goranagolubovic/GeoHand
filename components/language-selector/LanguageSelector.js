import React from "react";
import { View, Text, Pressable } from "react-native";
import { useTranslation } from "react-i18next";

import portraitStyles from "./LanguageSelectorPortrait.style";
import landscapeStyles from "./LanguageSelectorLandscape.style";

const LANGUAGES = [
  {
    code: "en",
  },
  {
    code: "sr",
  },
];

const LanguageSelector = (isPortrait) => {
  const { t, i18n } = useTranslation();
  const selectedLanguageCode = i18n.language;

  const setLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <View
      style={isPortrait ? portraitStyles.container : landscapeStyles.container}
    >
      <Text style={isPortrait ? portraitStyles.title : landscapeStyles.title}>
        {t("common:languageSelector")}
      </Text>

      {LANGUAGES.map((language) => {
        const selectedLanguage = language.code === selectedLanguageCode;

        return (
          <Pressable
            key={language.code}
            style={
              isPortrait
                ? portraitStyles.buttonContainer
                : landscapeStyles.buttonContainer
            }
            disabled={selectedLanguage}
            onPress={() => setLanguage(language.code)}
          >
            <Text
              style={[
                selectedLanguage && isPortrait
                  ? portraitStyles.selectedText
                  : isPortrait && !selectedLanguage
                  ? portraitStyles.text
                  : !isPortrait && selectedLanguage
                  ? landscapeStyles.selectedText
                  : landscapeStyles.text,
              ]}
            >
              {t("common:" + language.code)}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default LanguageSelector;
