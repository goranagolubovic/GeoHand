import { WEATHER_API_KEY, WEATHER_API_URL } from "../../constants/weather-api";
import { get } from "./client";

const getWeathersData = async (lat, lon) => {
  const response = await get(
    WEATHER_API_URL + lat + "&lon=" + lon + "&appid=" + WEATHER_API_KEY
  );
  return response;
};

export { getWeathersData };
