import { useEffect, useState } from "react";
import { Text } from "react-native";
import { BottomNavigation } from "react-native-paper";
import CitiesDetails from "../../features/cities-details/CitiesDetails";
import { useTranslation } from "react-i18next";
import LandmarksMap from "../../features/landmarks-map/LandmarksMap";
import LandmarksDetails from "../../features/landmarks-details/LandmarksDetails";
import { fetchLandmarksFromDB, fetchLandmarksTable } from "../../db/db";

const LandMarksScreen = () => {
  const MapRouteLandmarks = () => <LandmarksMap />;

  const DetailsRouteLandmarks = () => <LandmarksDetails />;
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();
  const [routes] = useState([
    {
      key: "mapaZnamenitosti",
      title: t("navigate:map"),
      focusedIcon: "map-marker",
      unfocusedIcon: "map-marker-outline",
    },
    {
      key: "detaljiZnamenitosti",
      title: t("navigate:details"),
      focusedIcon: "album",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    detaljiZnamenitosti: DetailsRouteLandmarks,
    mapaZnamenitosti: MapRouteLandmarks,
  });
  // useEffect(() => {
  //   try {
  //     const res = fetchLandmarksFromDB();
  //     console.log("result" + res);
  //   } catch (err) {}
  // }, []);
  useEffect(() => {
    try {
      const res = fetchLandmarksFromDB();
      console.log("result" + res);
    } catch (err) {}
  }, []);
  return (
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
  );
};

export default LandMarksScreen;
