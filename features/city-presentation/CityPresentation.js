import React, { useEffect, useState, useContext } from "react";
import { ScrollView, Image, Text, View, Dimensions } from "react-native";
import {
  getCityPhotos,
  getCityVideos,
} from "../../api/services/cities-service";
//import Spinner from "../../components/spinner/Spinner";
import portraitStyles from "./CityPresentationPortrait.style";
import landscapeStyles from "./CityPresentationLandscape.style";
import YoutubePlayer from "react-native-youtube-iframe";
//import PictureNumberContext from "../../contexts/picture-number-context/picture-number-context";
import { PictureNumberContext } from "../../contexts/picture-number-context/PictureNumberProvider";
import { useOrientation } from "../../hooks/use-orientation";
import { ActivityIndicator } from "react-native-paper";
const CityPresentation = (name) => {
  const { pictureNumber } = useContext(PictureNumberContext);
  const [images, setImages] = useState([]);
  const [videoId, setVideoId] = useState(null);
  //const [isPortrait, setIsPortrait] = useState(true);
  const isPortrait = useOrientation();
  //   useEffect(() => {
  //     const updateOrientation = () => {
  //       const { width, height } = Dimensions.get("window");
  //       const value = height > width;
  //       setIsPortrait(value);
  //     };
  //     Dimensions.addEventListener("change", updateOrientation);
  //     updateOrientation();

  //     // Remove the event listener when the component unmounts
  //     // return () => {
  //     //   Dimensions.removeEventListener("change", updateOrientation);
  //     // };
  //   }, []);

  const fetchPhotos = async () => {
    const city = name.name;
    const response = await getCityPhotos(name.name);
    const responseData = await response.json();
    const tags = responseData.hits.map((elem) => elem.tags);
    const filteredData = responseData.hits.filter((elem) =>
      elem.tags.includes(city.charAt(0).toLowerCase() + city.slice(1))
    );
    // console.log(
    //   responseData.hits.forEach((element) => {
    //     console.log(element.tags);
    //   })
    // );
    const imgs = responseData.hits.map((image) => image.largeImageURL);
    setImages(imgs.slice(0, pictureNumber));
  };
  const fetchVideo = async () => {
    try {
      const response = await getCityVideos(name.name + " video presentation");
      const responseData = await response.json();
      const v = responseData.items[0];
      const videoId = v.id.videoId;
      setVideoId(videoId);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPhotos();
    fetchVideo();
  }, []);

  return (
    <ScrollView
      horizontal={isPortrait ? false : true}
      contentContainerStyle={
        isPortrait ? portraitStyles.container : landscapeStyles.container
      }
    >
      {images.length > 0 ? (
        <View
          style={
            isPortrait
              ? portraitStyles.innerContainer
              : landscapeStyles.innerContainer
          }
        >
          {images.map((item) => (
            <Image
              style={isPortrait ? portraitStyles.image : landscapeStyles.image}
              source={{ uri: item }}
              key={item}
            />
          ))}
          <YoutubePlayer
            style={isPortrait ? portraitStyles.video : landscapeStyles.video}
            height={
              isPortrait
                ? Dimensions.get("window").height * 0.4
                : Dimensions.get("window").width * 0.4
            }
            width={
              isPortrait
                ? Dimensions.get("window").height * 0.33
                : Dimensions.get("window").width * 0.44
            }
            play={false}
            videoId={videoId}
          />
        </View>
      ) : (
        <ActivityIndicator
          animating={true}
          style={isPortrait ? portraitStyles.spinner : landscapeStyles.spinner}
          size="large"
          color="#gray"
        />
      )}
    </ScrollView>
  );
};

export default CityPresentation;
