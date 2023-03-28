import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { Searchbar, Card, Title, Paragraph } from "react-native-paper";
import { getCountryData } from "../../api/services/countries-service";
import Spinner from "../../components/spinner/Spinner";
import { Image } from "react-native";
import { useTranslation } from "react-i18next";
import portraitStyles from "./GenerallyScreenPortrait.style";
import landscapeStyles from "./GenerallyScreenLandscape.style";
import { useOrientation } from "../../hooks/use-orientation";
import { fetchCitiesFromDB, fetchLandmarksFromDB } from "../../db/db";

const GenerallyScreen = () => {
  const [capitalCity, setCapitalCity] = React.useState("");
  const [flag, setFlag] = React.useState("");
  const [population, setPopulation] = React.useState("");
  const [area, setArea] = React.useState("");
  const { t } = useTranslation();
  //const [isPortrait, setIsPortrait] = useState(true);
  const isPortrait = useOrientation();
  // useEffect(() => {
  //   const updateOrientation = () => {
  //     const { width, height } = Dimensions.get("window");
  //     const value = height > width;
  //     setIsPortrait(value);
  //   };
  //   Dimensions.addEventListener("change", updateOrientation);
  //   updateOrientation();

  //   // Remove the event listener when the component unmounts
  //   // return () => {
  //   //   Dimensions.removeEventListener("change", updateOrientation);
  //   // };
  // }, []);
  const fetchInfos = async () => {
    const response = await getCountryData("France");
    const responseData = await response.json();
    if (responseData.status === 404) {
      return;
    }
    try {
      setCapitalCity(responseData[0].capital[0]);
      setFlag(responseData[0].flags.png);
      setPopulation(responseData[0].population);
      setArea(responseData[0].area);
    } catch (ex) {}
  };
  useEffect(() => {
    fetchInfos();
    // fetchCitiesFromDB();
    // fetchLandmarksFromDB();
  }, []);

  return (
    <View
      style={isPortrait ? portraitStyles.container : landscapeStyles.container}
    >
      {capitalCity === "" || (flag === "" && <Spinner />)}
      {capitalCity !== "" && flag !== "" && (
        <ScrollView
          contentContainerstyle={
            isPortrait ? portraitStyles.content : landscapeStyles.content
          }
        >
          <Title
            style={
              isPortrait
                ? portraitStyles.capitalCity
                : landscapeStyles.capitalCity
            }
          >
            {t("common:capitalCity")}: {capitalCity}
          </Title>
          <Paragraph />
          <View
            style={
              isPortrait ? portraitStyles.content : landscapeStyles.content
            }
          >
            <Image
              source={{ uri: flag }}
              style={isPortrait ? portraitStyles.img : landscapeStyles.img}
            />
          </View>
          <Paragraph />
          <View
            style={
              isPortrait
                ? portraitStyles.generalInfos
                : landscapeStyles.generalInfos
            }
          >
            <Text>
              {t("common:population")}: {population}
            </Text>
            <Text>
              {t("common:area")}: {area}
            </Text>
            <Text
              style={
                isPortrait ? portraitStyles.history : landscapeStyles.history
              }
            >
              {" "}
              {t("common:countryHistory")}
            </Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default GenerallyScreen;
