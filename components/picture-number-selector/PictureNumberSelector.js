import React, { useState, useContext } from "react";
import { View, Text, Dimensions } from "react-native";
import NumberSlider from "react-native-number-slider";
import { useTranslation } from "react-i18next";
import { PictureNumberContext } from "../../contexts/picture-number-context/PictureNumberProvider";

import portraitStyles from "./PictureNumberSelectorPortrait.style";
import landscapeStyles from "./PictureNumberSelectorLandscape.style";

const PictureNumberSelector = (isPortrait) => {
  const { width, height } = Dimensions.get("window");
  const [valueHeight, setValueHeight] = useState(
    width > height ? width : height
  );
  const [valueWidth, setValueWidth] = useState(height > width ? height : width);

  const { t } = useTranslation();
  const { pictureNumber, setPictureNumber } = useContext(PictureNumberContext);

  onValueChange = (value) => {
    setPictureNumber(value);
  };

  return (
    <View
      style={isPortrait ? portraitStyles.container : landscapeStyles.container}
    >
      <Text style={isPortrait ? portraitStyles.title : landscapeStyles.title}>
        {t("common:pictureNumber")}
      </Text>
      <NumberSlider
        onValueChange={onValueChange}
        value={pictureNumber}
        width={valueWidth * 0.3}
        displayValues={[1, 5, 10, 15, 20]}
        fontSize={isPortrait ? valueWidth * 0.02 : valueHeight * 0.02}
        containerBackground="#f1f2f6"
        selectedBackground="#ffe2c8"
      />
    </View>
  );
};
export default PictureNumberSelector;
