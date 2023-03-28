import { React, useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { fetchCitiesTable } from "../../db/db";

const CountryMap = () => {
  const [citiesData, setCitiesData] = useState([]);

  const fetchInfos = async () => {
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
        latitudeDelta: 50,
        longitudeDelta: 50,
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
