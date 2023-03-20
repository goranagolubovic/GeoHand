import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native";
import { Divider } from "react-native-paper";
import { fetchLandmarksTable } from "../../db/db";
import LandmarkDetails from "../landmark-details/LandmarkDetails";

const LandmarksDetails = () => {
  const [landMarksData, setLandMarksData] = useState([]);
  const [dbChanged, setDBChanged] = useState(null);
  useEffect(() => {
    console.log("mountained landmarks map");
    setLandMarksData(fetchLandmarksTable());
    // setDBChanged(false);
  }, []);
  useEffect(() => {
    console.log("mountained landmarks map");
    setLandMarksData(fetchLandmarksTable());
    // setDBChanged(false);
  }, [dbChanged]);

  const onLandmarkChanged = (array) => {
    setLandMarksData(array);
    console.log(landMarksData);
  };
  return (
    <ScrollView>
      {landMarksData.map((landmark) => (
        <View key={landmark.name}>
          <LandmarkDetails
            name={landmark.name}
            details={landmark.details}
            image={landmark.image}
            onAction={null}
            favourite={landmark.favourite}
            onDBChanged={(value) => setDBChanged(value)}
          />
          <Divider bold={true} />
        </View>
      ))}
    </ScrollView>
  );
};

export default LandmarksDetails;
