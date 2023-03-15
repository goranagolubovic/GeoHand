import React, { useEffect, useState, useContext } from "react";
import { ScrollView, Image, Text, View } from "react-native";
import {
  getCityPhotos,
  getCityVideos,
} from "../../api/services/cities-service";
import Spinner from "../../components/spinner/Spinner";
import styles from "./CityPresentation.style";
import YoutubePlayer from "react-native-youtube-iframe";
import PictureNumberContext from "../../contexts/picture-number-context/picture-number-context";

const CityPresentation = (name) => {
  const { pictureNumber } = useContext(PictureNumberContext);
  const [images, setImages] = useState([]);
  const [videoId, setVideoId] = useState(null);

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
    setImages(imgs);
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
    <ScrollView contentContainerStyle={styles.container}>
      {images.length > 0 ? (
        <View>
          {images.map((item) => (
            <Image style={styles.image} source={{ uri: item }} key={item} />
          ))}
        </View>
      ) : (
        <Spinner />
      )}
      <YoutubePlayer
        style={styles.video}
        height={200}
        play={false}
        videoId={videoId}
      />
    </ScrollView>
  );
};

export default CityPresentation;
