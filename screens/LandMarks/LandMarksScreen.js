import { useEffect, useState } from "react";
import { BottomNavigation } from "react-native-paper";
import { useTranslation } from "react-i18next";
import LandmarksMap from "../../features/landmarks-map/LandmarksMap";
import LandmarksDetails from "../../features/landmarks-details/LandmarksDetails";
import { fetchLandmarksFromDB } from "../../db/db";

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
  //   (async function () {
  //     await fetchLandmarksFromDB();
  //   })();
  // }, []);

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
