import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import CacheSelector from "../../components/cache-selector/CacheSelector";
import PictureNumberSelector from "../../components/picture-number-selector/PictureNumberSelector";
import LanguageSelector from "../../components/language-selector/LanguageSelector";
import styles from "./SettingsScreen.style";
import CacheProvider from "../../contexts/cache-context/CacheProvider";
import PictureNumberProvider from "../../contexts/picture-number-context/PictureNumberProvider";

const SettingsScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={true}
    >
      <LanguageSelector />
      <CacheProvider>
        <CacheSelector />
      </CacheProvider>
      <PictureNumberProvider>
        <PictureNumberSelector />
      </PictureNumberProvider>
    </ScrollView>
  );
};

export default SettingsScreen;
