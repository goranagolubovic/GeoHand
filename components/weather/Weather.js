import { useEffect, useState, useTransition } from "react";
import { useTranslation } from "react-i18next";
import { Image, ImageBackground } from "react-native";
import { View, Text } from "react-native";
import { getWeathersData } from "../../api/services/weather-service";
import { calculateCelziusTemp } from "../../util";
import { Avatar } from "react-native-paper";
import styles from "./Weather.style";
const Weather = ({ name, lat, lon }) => {
  const [description, setDescription] = useState("");
  const [temp, setTemp] = useState(0.0);
  const [feelsLike, setFeelsLike] = useState(0.0);
  const [icon, setIcon] = useState("");
  const [date, setDate] = useState("");
  const { t } = useTranslation();

  const fetchWeathersData = async () => {
    const response = await getWeathersData(lat, lon);
    const responseData = await response.json();
    setDescription(responseData.weather[0].description);
    setTemp(calculateCelziusTemp(responseData.main.temp));
    setFeelsLike(calculateCelziusTemp(responseData.main.feels_like));
    setIcon(
      "http://openweathermap.org/img/wn/" +
        responseData.weather[0].icon +
        "@2x.png"
    );
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");

    const options = { weekday: "long" };
    const dayName = currentDate.toLocaleDateString("en-US", options);
    const formattedDate = dayName.split(",")[0] + " " + day;
    setDate(formattedDate);
  };

  useEffect(() => {
    getCurrentDate();
    fetchWeathersData();
  }, []);

  return (
    <View style={styles.centralContainer}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.temp}>
            <Avatar.Icon
              size={58}
              icon="thermometer-lines"
              style={styles.tempIcon}
            />
            <Text style={styles.currentTemp}>{temp}°C</Text>
          </View>
          <Text style={styles.info}>
            {t("common:subFeel")}: {feelsLike}
          </Text>
          <Text style={styles.info}>
            {" "}
            {t("common:today")}, {date}
          </Text>
        </View>
        {icon !== "" ? (
          <Image source={{ uri: icon }} style={styles.icon} />
        ) : (
          ""
        )}
      </View>
      <Text style={styles.place}>
        {name}, {description}
      </Text>
    </View>
  );
};

export default Weather;