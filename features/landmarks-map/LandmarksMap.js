import { React, useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { View, ScrollView } from "react-native";
import { fetchLandmarksTable } from "../../db/db";
import LandmarkDetails from "../landmark-details/LandmarkDetails";

const LandmarksMap = () => {
  const [landMarksData, setLandMarksData] = useState([]);
  const [landmark, setLandmark] = useState("");
  const [landmarkDetails, setLandmarkDetails] = useState("");
  const [landmarkImage, setLandmarkImage] = useState("");
  const [favourite, setFavourite] = useState(0);
  const [dbChanged, setDBChanged] = useState(null);

  const handleMarkerPress = (landmark, details, image, favourite) => {
    setLandmark(landmark);
    setLandmarkDetails(details);
    setLandmarkImage(image);
    setFavourite(favourite);
  };

  const getInfos = async () => {
    const result = await fetchLandmarksTable();
    setLandMarksData(result);
  };

  useEffect(() => {
    getInfos();
  }, []);

  useEffect(() => {
    getInfos();
  }, [landmark, dbChanged]);

  return (
    <View style={{ flex: 1 }}>
      {landmark === "" && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 48.8566,
            longitude: 2.3522,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
        >
          {landMarksData.map((landmark) => (
            <Marker
              key={landmark.name}
              coordinate={{
                latitude: landmark.lat,
                longitude: landmark.lon,
              }}
              title={landmark.name}
              onPress={() => {
                handleMarkerPress(
                  landmark.name,
                  landmark.details,
                  landmark.image,
                  landmark.favourite
                );
              }}
            />
          ))}
        </MapView>
      )}
      {landmark !== "" && (
        <ScrollView>
          <LandmarkDetails
            name={landmark}
            details={landmarkDetails}
            image={landmarkImage}
            favourite={favourite}
            onAction={() => {
              setLandmark("");
            }}
            onDBChanged={(value) => setDBChanged(value)}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default LandmarksMap;
