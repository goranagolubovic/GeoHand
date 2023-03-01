import { COUNTRY_API_URL } from "../../constants/country-api";
import { get } from "./client";

const getCountryData = async (name) => {
    const response = await get(COUNTRY_API_URL + name+"?fullText=true");
    return response;
  };

export {getCountryData};