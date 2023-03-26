import React, { useEffect, useContext } from "react";
import { ScrollView } from "react-native";
import CacheSelector from "../../components/cache-selector/CacheSelector";
import PictureNumberSelector from "../../components/picture-number-selector/PictureNumberSelector";
import LanguageSelector from "../../components/language-selector/LanguageSelector";
import CacheProvider from "../../contexts/cache-context/CacheProvider";
import PictureNumberProvider from "../../contexts/picture-number-context/PictureNumberProvider";
import { useOrientation } from "../../hooks/use-orientation";
import portraitStyles from "./SettingsScreenPortrait.style";
import landscapeStyles from "./SettingsScreenLandscape.style";
//import PictureNumberContext from "../../contexts/picture-number-context/picture-number-context";

const SettingsScreen = () => {
  const isPortrait = useOrientation();
  // const { pictureNumber } = useContext(PictureNumberContext);
  // useEffect(() => {
  //   if (pictureNumber !== undefined) console.log(pictureNumber);
  // }, []);
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
