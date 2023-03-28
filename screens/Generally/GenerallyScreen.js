import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Title, Paragraph } from "react-native-paper";
import { getCountryData } from "../../api/services/countries-service";
import Spinner from "../../components/spinner/Spinner";
import { Image } from "react-native";
import { useTranslation } from "react-i18next";
import portraitStyles from "./GenerallyScreenPortrait.style";
import landscapeStyles from "./GenerallyScreenLandscape.style";
import { useOrientation } from "../../hooks/use-orientation";

const GenerallyScreen = () => {
  const [capitalCity, setCapitalCity] = useState("");
  const [flag, setFlag] = useState("");
  const [population, setPopulation] = useState("");
  const [area, setArea] = useState("");
  const { t } = useTranslation();
  const isPortrait = useOrientation();

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
