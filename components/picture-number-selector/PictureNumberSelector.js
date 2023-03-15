import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import NumberSlider from "react-native-number-slider";
import { useTranslation } from "react-i18next";
import styles from "./PictureNumberSelector.style";
import PictureNumberContext from "../../contexts/picture-number-context/picture-number-context";
import PictureNumberProvider from "../../contexts/picture-number-context/PictureNumberProvider";

const PictureNumberSelector = () => {
  const { t } = useTranslation();
  const number = useContext(PictureNumberContext);
  const [pictureNumber, setPictureNumber] = useState(number.pictureNumber);

  onValueChange = (value) => {
    console.log(pictureNumber);
    setPictureNumber(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("common:pictureNumber")}</Text>
      <NumberSlider
        onValueChange={onValueChange}
        value={pictureNumber}
        width={200}
        displayValues={[1, 2, 3, 4, 5]}
        fontSize={15}
        containerBackground="#f1f2f6"
        selectedBackground="#ffe2c8"
      />
    </View>
  );
};
export default PictureNumberSelector;
