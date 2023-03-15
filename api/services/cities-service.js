import {
  COUNTRY_REGIONS_API,
  CITIES_API_URL,
  CITY_DETAILS_API_URL,
  BASIC_CITY_INFO_URL,
  PIXABAY_API,
  PIXABAY_API_KEY,
  YOUTUBE_API,
  YOUTUBE_API_KEY,
} from "../../constants/cities-api";
import { get } from "./client";

const getRegions = async (code) => {
  const response = await get(
    COUNTRY_REGIONS_API + code + "/all/?key=00000000000000000000000000000000"
  );
  return response;
};

const getCities = async (code, region) => {
  console.log("called");
  const response = await get(
    CITIES_API_URL +
      code +
      "/search?region=" +
      region +
      "&key=00000000000000000000000000000000"
  );
  return response;
  console.log("called");
};

const getCityDetails = async (name) => {
  let modifiedName = name.charAt(0).toLowerCase() + name.slice(1);
  const response = await get(
    CITY_DETAILS_API_URL + modifiedName + "/scores/?categories=history"
  );
  return response;
};

const getCityBasicInfo = async (name) => {
  let modifiedName = name.charAt(0).toLowerCase() + name.slice(1);
  const response = await get(BASIC_CITY_INFO_URL + modifiedName);
  return response;
};

const getCityPhotos = async (name) => {
  const response = await get(
    PIXABAY_API +
      "?key=" +
      PIXABAY_API_KEY +
      "&q=" +
      name +
      "&video=true&image_type=photo"
  );
  return response;
};

const getCityVideos = async (name) => {
  const response = await get(
    YOUTUBE_API +
      YOUTUBE_API_KEY +
      "&part=snippet&q=" +
      name +
      "&type=video&maxResults=1"
  );
  return response;
};

export {
  getRegions,
  getCities,
  getCityDetails,
  getCityBasicInfo,
  getCityPhotos,
  getCityVideos,
};
