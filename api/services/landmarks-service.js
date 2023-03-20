import {
  FOURSQUARE_API_URL,
  CLIENT_ID,
  CLIENT_SECRET,
} from "../../constants/landmarks-api";
import { get } from "./client";

const getCountryLandmarks = async (date, country) => {
  //   console.log(FOURSQUARE_API_URL + date + "&near=" + country);
  //   const response = await get(FOURSQUARE_API_URL, {
  //     params: {
  //       near: country,
  //       limit: 10,
  //       categoryId: "4bf58dd8d48988d12d941735",
  //       client_id: CLIENT_ID,
  //       client_secret: CLIENT_SECRET,
  //       v: date,
  //     },
  //   });
  //   return response;
};

export { getCountryLandmarks };
