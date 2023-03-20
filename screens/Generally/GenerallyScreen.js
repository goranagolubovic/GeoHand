import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { Searchbar, Card, Title, Paragraph } from "react-native-paper";
import { getCountryData } from "../../api/services/countries-service";
import Spinner from "../../components/spinner/Spinner";
import styles from "./GenerallyScreen.style.js";
import { Image } from "react-native";
import { useTranslation } from "react-i18next";

const GenerallyScreen = () => {
  const [capitalCity, setCapitalCity] = React.useState("");
  const [flag, setFlag] = React.useState("");
  const [population, setPopulation] = React.useState("");
  const [area, setArea] = React.useState("");
  const { t } = useTranslation();

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
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {capitalCity === "" || (flag === "" && <Spinner />)}
        {capitalCity !== "" && flag !== "" && (
          <Card>
            <View style={styles.card}>
              <Card.Content>
                <Title style={styles.capitalCity}>
                  {t("common:capitalCity")}: {capitalCity}
                </Title>
                <Paragraph />
                <Image source={{ uri: flag }} style={styles.img} />
                <Paragraph />
                <View style={styles.generalInfos}>
                  <Text>
                    {t("common:population")}: {population}
                  </Text>
                  <Text>
                    {t("common:area")}: {area}
                  </Text>
                </View>
              </Card.Content>
            </View>
          </Card>
        )}
      </ScrollView>
    </View>
  );
};

export default GenerallyScreen;
