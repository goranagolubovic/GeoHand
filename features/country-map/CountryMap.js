import { React, useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { fetchCitiesTable, fetchCitiesFromDB } from "../../db/db";

const CountryMap = () => {
  const [citiesData, setCitiesData] = useState([]);

  const fetchInfos = async () => {
    await fetchCitiesFromDB();
    const response = await fetchCitiesTable();
    setCitiesData(response);
  };

  useEffect(() => {
    fetchInfos();
  }, []);

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 48.8566,
        longitude: 2.3522,
        latitudeDelta: 20,
        longitudeDelta: 20,
      }}
    >
      {citiesData.map((city) => (
        <Marker
          key={city.name}
          coordinate={{
            latitude: city.lat,
            longitude: city.lon,
          }}
          title={city.name}
        />
      ))}
    </MapView>
  );
};

export default CountryMap;
