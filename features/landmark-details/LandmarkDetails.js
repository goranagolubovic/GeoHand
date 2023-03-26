import React, { useEffect, useState } from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { Button, Title } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { IconButton } from "react-native-paper";
import { editLandmark } from "../../db/db";
import { useOrientation } from "../../hooks/use-orientation";
import portraitStyles from "./LandmarkDetailsPortrait.style";
import landscapeStyles from "./LandmarkDetailsLandscape.style";

const LandmarkDetails = ({
  name,
  details,
  image,
  onAction,
  favourite,
  onDBChanged,
}) => {
  const [isLiked, setIsLiked] = useState(favourite === 0 ? false : true);
  const isPortrait = useOrientation();
  useEffect(() => {
    favourite === 0 ? setIsLiked(false) : setIsLiked(true);
    console.log(name + "   " + favourite);
  }, [favourite]);

  const handlePress = () => {
    const fav = isLiked === true ? 0 : 1;
    setIsLiked(!isLiked);
    editLandmark(fav, name, (updatedRecord) => {
      onDBChanged(updatedRecord);
    });
  };
  const { t } = useTranslation();
  return (
    <ScrollView
      contentContainerStyle={
        isPortrait ? portraitStyles.container : landscapeStyles.container
      }
    >
      <View
        style={
          isPortrait
            ? portraitStyles.containerTitle
            : landscapeStyles.containerTitle
        }
      >
        <Title
          style={isPortrait ? portraitStyles.title : landscapeStyles.title}
        >
          {name}
        </Title>
        <IconButton
          icon={isLiked === true ? "heart" : "heart-outline"}
          //color={isLiked ? "red" : "gray"}
          size={24}
          onPress={handlePress}
        />
      </View>
      <Image
        style={isPortrait ? portraitStyles.image : landscapeStyles.image}
        source={{ uri: image }}
      />
      <Text
        style={isPortrait ? portraitStyles.details : landscapeStyles.details}
      >
        {details}
      </Text>
      {onAction && (
        <Button
          style={
            isPortrait ? portraitStyles.backButton : landscapeStyles.backButton
          }
          icon="arrow-left"
          labelStyle={isPortrait ? portraitStyles.label : landscapeStyles.label}
          onPress={onAction}
        >
          {t("common:back")}
        </Button>
      )}
    </ScrollView>
  );
};

export default LandmarkDetails;
