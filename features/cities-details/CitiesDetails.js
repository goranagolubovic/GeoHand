import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import CityDetails from "../../features/city-details/CityDetails";
import { fetchDataFromDB } from "../../db/db";

const CitiesDetails = () => {
  const [citiesData, setCitiesData] = useState([]);
  useEffect(() => {
    setCitiesData(fetchDataFromDB("city"));
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
