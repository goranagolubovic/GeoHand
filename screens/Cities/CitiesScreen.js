import { React, useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchCitiesFromDB, fetchCitiesTable } from "../../db/db";
import { BottomNavigation } from "react-native-paper";
import CountryMap from "../../features/country-map/CountryMap";
import CitiesDetails from "../../features/cities-details/CitiesDetails";

const CitiesScreen = () => {
  const { t } = useTranslation();

  const MapRouteCities = () => <CountryMap />;

  const DetailsRouteCities = () => <CitiesDetails />;
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "mapaGradovi",
      title: t("navigate:map"),
      focusedIcon: "map-marker",
      unfocusedIcon: "map-marker-outline",
    },
    {
      key: "detaljiGradovi",
      title: t("navigate:details"),
      focusedIcon: "album",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    detaljiGradovi: DetailsRouteCities,
    mapaGradovi: MapRouteCities,
  });
  // const initializeDb = async () => {
  //   await fetchCitiesFromDB();
  // };
  // useEffect(() => {
  //   initializeDb();
  // }, []);

  return (
    <>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: "#144e5a" }}
        inactiveColor="white"
        theme={{
          colors: { secondaryContainer: "#ffb901" },
        }}
        activeColor="white"
      />
    </>
  );
};

export default CitiesScreen;
