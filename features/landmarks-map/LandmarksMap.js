import { React, useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { getCountryLandmarks } from "../../api/services/landmarks-service";
import Spinner from "../../components/spinner/Spinner";
import { View, Text } from "react-native";
import {
  fetchCitiesFromDB,
  fetchLandmarksTable,
  fetchLandmarksFromDB,
} from "../../db/db";
import LandmarksDetails from "../landmarks-details/LandmarksDetails";
import LandmarkDetails from "../landmark-details/LandmarkDetails";
import { ScrollView } from "react-native";

const landmarksDB = [
  {
    name: "Eiffel Tower",
    lat: 48.858257,
    lon: 2.294537,
    country: "France",
    details:
      "The Eiffel Tower (/ˈaɪfəl/ EYE-fəl; French: tour Eiffel [tuʁ ɛfɛl] (listen)) is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.Locally nicknamed 'La dame de fer' (French for 'Iron Lady'), it was constructed from 1887 to 1889 as the centerpiece of the 1889 World's Fair. Although initially criticised by some of France's leading artists and intellectuals for its design, it has since become a global cultural icon of France and one of the most recognisable structures in the world. The Eiffel Tower is the most visited monument with an entrance fee in the world: 6.91 million people ascended it in 2015. It was designated a monument historique in 1964, and was named part of a UNESCO World Heritage Site ('Paris, Banks of the Seine') in 1991.",
    image:
      "https://fastly.4sqi.net/img/general/original/2960181_QytskOzX9KNE4z9ifAJtXTjT6YE6Zqc_volw8k3mSzE.jpg",
  },
  {
    name: "Arc de Triomphe",
    lat: 48.873783275868725,
    lon: 2.2950589656829834,
    country: "France",
    details:
      "The Arc de Triomphe in Paris is a monument located in the center of Charles de Gaulle Square (Place Charles de Gaulle), also known as the Place de l'Étoile (Star Square). It is situated at the western end of the Champs-Élysées avenue. The triumphal arch was erected in honor of French soldiers, especially those who fought in the Napoleonic Wars. Beneath the arch is the Tomb of the Unknown Soldier from World War I.The monument was designed by Jean Chalgrin in 1806, shortly after the Battle of Austerlitz. Construction lasted until the early 1830s. The design is a neoclassical interpretation of the ancient Roman Arch of Titus. The monument is 49.5 meters high and 45 meters wide, making it the second-largest triumphal arch in the world.",
    image: "https://xdn.tf.rs/2021/10/23/foto-pixabay-iankelsall1-830x0.jpg",
  },
  {
    name: "Cathedral of Notre-Dame de Paris",
    lat: 48.85312443201169,
    lon: 2.3495614528656006,
    country: "France",
    details:
      "Notre-Dame de Paris, referred to simply as Notre-Dame,is a medieval Catholic cathedral. The cathedral, dedicated to the Virgin Mary, is considered one of the finest examples of French Gothic architecture. Several attributes set it apart from the earlier Romanesque style, particularly its pioneering use of the rib vault and flying buttress, its enormous and colourful rose windows, and the naturalism and abundance of its sculptural decoration. Notre Dame also stands out for its three pipe organs (one historic) and its immense church bells.",
    image:
      "https://hr.wikipedia.org/wiki/Katedrala_Notre-Dame_u_Parizu#/media/Datoteka:Cath%C3%A9drale_Notre-Dame_de_Paris_-_12.jpg",
  },
];

const LandmarksMap = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // add 1 to get the correct month
  const day = date.getDate();
  const formattedDate = `${year}${month.toString().padStart(2, "0")}${day
    .toString()
    .padStart(2, "0")}`;

  const [landMarksData, setLandMarksData] = useState([]);
  const [landmark, setLandmark] = useState("");
  const [landmarkDetails, setLandmarkDetails] = useState("");
  const [landmarkImage, setLandmarkImage] = useState("");
  const [favourite, setFavourite] = useState(0);
  const [dbChanged, setDBChanged] = useState(null);
  const fetchLandmarksData = async () => {
    // const response = await getCountryLandmarks(formattedDate, "France");
    // const responseData = await response.json();
    // console.log(responseData);
  };
  const handleMarkerPress = (landmark, details, image, favourite) => {
    console.log("slika" + image);
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
    console.log("mountained landmarks map");
    getInfos();

    // setDBChanged(false);
  }, []);
  useEffect(() => {
    console.log("Landmark Detail use effect happened");
    getInfos();
    // setDBChanged(false);
  }, [landmark, dbChanged]);

  return (
    <View style={{ flex: 1 }}>
      {landmark === "" && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 48.8566,
            longitude: 2.3522,
            latitudeDelta: 50,
            longitudeDelta: 50,
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
