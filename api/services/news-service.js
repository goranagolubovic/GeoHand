import { NEWS_API_KEY, NEWS_API_URL } from "../../constants/news-api";
import { get } from "./client";

const getNewsData = async (code) => {
    const response = await get(NEWS_API_URL + code+"&apiKey="+NEWS_API_KEY);
    return response;
  };

export {getNewsData};