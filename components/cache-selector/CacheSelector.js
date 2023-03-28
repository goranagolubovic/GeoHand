import React from "react";
import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { Switch } from "react-native-paper";
import { CacheContext } from "../../contexts/cache-context/CacheProvider";
import { useContext } from "react";

import portraitStyles from "./CacheSelectorPortrait.style";
import landscapeStyles from "./CacheSelectorLandscape.style";

const CacheSelector = (isPortrait) => {
  const { t } = useTranslation();
  const { cache, setCache } = useContext(CacheContext);

  const onToggleSwitch = () => {
    setCache(!cache);
  };

  return (
    <View
      style={isPortrait ? portraitStyles.container : landscapeStyles.container}
    >
      <Text style={isPortrait ? portraitStyles.title : landscapeStyles.title}>
        {t("common:cacheSelector")}
      </Text>
      <View style={isPortrait ? portraitStyles.switch : landscapeStyles.switch}>
        <Text
          style={
            isPortrait
              ? portraitStyles.textWithButton
              : landscapeStyles.textWithButton
          }
        >
          {t("common:allowCaching")}
        </Text>
        <Switch
          value={cache}
          onValueChange={onToggleSwitch}
          color="#ffb901"
          style={
            isPortrait
              ? portraitStyles.switchButton
              : landscapeStyles.switchButton
          }
        />
      </View>
    </View>
  );
};

export default CacheSelector;
