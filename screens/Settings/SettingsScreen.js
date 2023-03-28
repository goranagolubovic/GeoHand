import React from "react";
import { ScrollView } from "react-native";
import CacheSelector from "../../components/cache-selector/CacheSelector";
import PictureNumberSelector from "../../components/picture-number-selector/PictureNumberSelector";
import LanguageSelector from "../../components/language-selector/LanguageSelector";
import { useOrientation } from "../../hooks/use-orientation";

import portraitStyles from "./SettingsScreenPortrait.style";
import landscapeStyles from "./SettingsScreenLandscape.style";

const SettingsScreen = () => {
  const isPortrait = useOrientation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      contentContainerStyle={
        isPortrait ? portraitStyles.container : landscapeStyles.container
      }
      showsHorizontalScrollIndicator={true}
    >
      <LanguageSelector isPortrait={isPortrait} />
      <CacheSelector isPortrait={isPortrait} />
      <PictureNumberSelector isPortrait={isPortrait} />
    </ScrollView>
  );
};

export default SettingsScreen;
