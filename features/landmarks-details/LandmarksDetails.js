import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native";
import { Divider } from "react-native-paper";
import { fetchLandmarksTable } from "../../db/db";
import LandmarkDetails from "../landmark-details/LandmarkDetails";

const LandmarksDetails = () => {
  const [landMarksData, setLandMarksData] = useState([]);
  const [dbChanged, setDBChanged] = useState(null);

  const getInfos = async () => {
    const result = await fetchLandmarksTable();
    setLandMarksData(result);
  };

  useEffect(() => {
    getInfos();
  }, []);
  useEffect(() => {
    getInfos();
  }, [dbChanged]);

  return (
    <ScrollView>
      {landMarksData.map((landmark) => (
        <ScrollView key={landmark.name}>
          <LandmarkDetails
            name={landmark.name}
            details={landmark.details}
            image={landmark.image}
            onAction={null}
            favourite={landmark.favourite}
            onDBChanged={(value) => setDBChanged(value)}
          />
          <Divider bold={true} />
        </ScrollView>
      ))}
    </ScrollView>
  );
};

export default LandmarksDetails;
