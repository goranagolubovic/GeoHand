import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, Modal } from "react-native";
import {
  getCityBasicInfo,
  getCityDetails,
} from "../../api/services/cities-service";
import { removeTags, removeUnecessaryInfos } from "../../util";
import { Divider, Button, IconButton } from "react-native-paper";
import { get } from "../../api/services/client";
import Weather from "../../components/weather/Weather";
import styles from "./CityDetails.style";
import CityPresentation from "../../features/city-presentation/CityPresentation";

const CityDetails = (city) => {
  const [info, setInfo] = useState("");
  const [population, setPopulation] = useState(0);
  const [weatherModalVisible, setWeatherweatherModalVisible] = useState(false);
  const [presentaionModalVisible, setPresentaionModalVisible] = useState(false);
  const { t } = useTranslation();

  const toogleWeatherModal = () => {
    setWeatherweatherModalVisible(!weatherModalVisible);
  };
  const tooglePresentationModal = () => {
    setPresentaionModalVisible(!presentaionModalVisible);
  };

  const findCityDetails = async () => {
    const response = await getCityDetails(city.city.name);
    const responseData = await response.json();
    const stringWithRemovedTags = removeTags(responseData.summary);
    const infos = removeUnecessaryInfos(stringWithRemovedTags);
    setInfo(infos);
  };

  const findBasicInfo = async () => {
    const response = await getCityBasicInfo(city.city.name);
    const responseData = await response.json();
    const url =
      responseData._embedded["city:search-results"][0]._links["city:item"].href;
    const res = await get(url);
    const resData = await res.json();
    setPopulation(resData.population);
  };

  useEffect(() => {
    findCityDetails();
    findBasicInfo();
  });

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.name}>{city.city.name}</Text>
        <View style={styles.basicInfos}>
          <Text style={styles.content}>
            {t("common:population")} : {population}
          </Text>
          <Text style={styles.content}>
            {t("common:lat")} : {city.city.lat}
          </Text>
          <Text style={styles.content}>
            {t("common:lon")} : {city.city.lon}
          </Text>
        </View>
        <Text>{info}</Text>
        <View style={styles.buttonContainer}>
          <Button
            icon="weather-cloudy"
            mode="contained"
            onPress={toogleWeatherModal}
            contentStyle={{ backgroundColor: "#1c2520" }}
          >
            {t("common:weatherForecast")}
          </Button>
          <Button
            icon="presentation-play"
            mode="contained"
            onPress={tooglePresentationModal}
            contentStyle={{ backgroundColor: "#1c2520" }}
          >
            {t("common:showPresentation")}
          </Button>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={weatherModalVisible}
          onRequestClose={toogleWeatherModal}
          onPress={toogleWeatherModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <IconButton
                style={styles.close}
                icon="close"
                mode="contained"
                onPress={toogleWeatherModal}
                iconColor={"#ffe2c8"}
                backgroundColor="#1c2520"
              />
              <Weather
                name={city.city.name}
                lat={city.city.lat}
                lon={city.city.lon}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 10,
              }}
            ></View>

            {/* <Button
              icon="weather-cloudy"
              mode="contained"
              onPress={toogleWeatherModal}
              contentStyle={{ backgroundColor: "#1c2520" }}
            >
              Close
            </Button> */}
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={presentaionModalVisible}
          onRequestClose={tooglePresentationModal}
          onPress={tooglePresentationModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <IconButton
                style={styles.close}
                icon="close"
                mode="contained"
                onPress={tooglePresentationModal}
                iconColor={"#ffe2c8"}
                backgroundColor="#1c2520"
              />
              <CityPresentation name={city.city.name} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 10,
              }}
            ></View>

            {/* <Button
              icon="weather-cloudy"
              mode="contained"
              onPress={toogleWeatherModal}
              contentStyle={{ backgroundColor: "#1c2520" }}
            >
              Close
            </Button> */}
          </View>
        </Modal>
      </View>
      <Divider bold={true} />
    </View>
  );
};

export default CityDetails;
