import React, { useEffect, useState } from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { Button, Title } from "react-native-paper";
import styles from "./LandmarkDetails.style";
import { useTranslation } from "react-i18next";
import { IconButton } from "react-native-paper";
import { editLandmark } from "../../db/db";

const LandmarkDetails = ({
  name,
  details,
  image,
  onAction,
  favourite,
  onDBChanged,
}) => {
  const [isLiked, setIsLiked] = useState(favourite === 0 ? false : true);
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.containerTitle}>
        <Title style={styles.title}>{name}</Title>
        <IconButton
          icon={isLiked === true ? "heart" : "heart-outline"}
          //color={isLiked ? "red" : "gray"}
          size={24}
          onPress={handlePress}
        />
      </View>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.details}>{details}</Text>
      {onAction && (
        <Button
          style={styles.backButton}
          icon="arrow-left"
          labelStyle={styles.label}
          onPress={onAction}
        >
          {t("common:back")}
        </Button>
      )}
    </ScrollView>
  );
};

export default LandmarkDetails;
