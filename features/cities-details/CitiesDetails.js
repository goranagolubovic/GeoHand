import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import CityDetails from "../../features/city-details/CityDetails";
import {
  fetchCitiesFromDB,
  fetchCitiesTable,
  fetchLandmarksFromDB,
} from "../../db/db";

const CitiesDetails = () => {
  const [citiesData, setCitiesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCitiesFromDB();
      const data = await fetchCitiesTable();
      setCitiesData(data);
    };
    fetchData();
  }, []);

  return (
    <ScrollView>
      {citiesData.map((elem) => (
        <CityDetails city={elem} key={elem.name} />
      ))}
    </ScrollView>
  );
};

export default CitiesDetails;
