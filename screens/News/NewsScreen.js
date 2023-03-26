import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, Linking, Dimensions } from "react-native";
import { Searchbar, Card, Paragraph } from "react-native-paper";
import { getNewsData } from "../../api/services/news-service";
import { getCountryData } from "../../api/services/countries-service";
import { useTranslation } from "react-i18next";
import { useQuery, useQueryClient } from "react-query";

import Spinner from "../../components/spinner/Spinner";
import portraitStyles from "./NewsScreenPortrait.style";
import landscapeStyles from "./NewsScreenLandscape.style";
import { CacheContext } from "../../contexts/cache-context/CacheProvider";
import { useOrientation } from "../../hooks/use-orientation";

const NewsScreen = () => {
  const { cache } = useContext(CacheContext);
  const queryClient = useQueryClient();
  const [code, setCode] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsArr, setNewsArr] = useState([]);
  const { t } = useTranslation();
  // const [isPortrait, setIsPortrait] = useState(true);
  const isPortrait = useOrientation();
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  // useEffect(() => {
  //   const updateOrientation = () => {
  //     const { width, height } = Dimensions.get("window");
  //     const value = height > width;
  //     setIsPortrait(value);
  //   };
  //   Dimensions.addEventListener("change", updateOrientation);
  //   updateOrientation();

  //   // Remove the event listener when the component unmounts
  //   // return () => {
  //   //   Dimensions.removeEventListener("change", updateOrientation);
  //   // };
  // }, []);
  // const fetchInfos = async () => {
  //   const response = await getCountryData("France");
  //   const responseData = await response.json();
  //   if (responseData.status === 404) {
  //     return;
  //   }

  //   try {
  //     setCode(responseData[0].cca2);
  //   } catch (ex) {}
  // };
  const fetchData = async () => {
    // if (code !== "") {
    const response = await getNewsData("FR");
    const json = await response.json();
    if (json.status !== "error") {
      setNewsArr(json.articles);
    }
    return json.articles;
    // }
  };
  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, [isPortrait]);
  const { data, status } = useQuery("last-read-news", fetchData);
  useEffect(() => {
    fetchData();
    if (cache) {
      queryClient.setQueryData("last-read-news", newsArr);
    }
  }, [code]);

  return (
    <View
      style={isPortrait ? portraitStyles.container : landscapeStyles.container}
    >
      <ScrollView
        contentContainerStyle={
          isPortrait ? portraitStyles.content : landscapeStyles.content
        }
        showsVerticalScrollIndicator={false}
      >
        {data !== undefined && data.length === 0 && <Spinner />}
        {data !== undefined &&
          data.map((elem) => (
            <View key={elem.title}>
              <Card style={{ backgroundColor: "#ffb901" }}>
                <Card.Content>
                  <Text
                    style={
                      isPortrait ? portraitStyles.title : landscapeStyles.title
                    }
                  >
                    {elem.title}
                  </Text>
                  <Paragraph />
                  <Text
                    style={
                      isPortrait ? portraitStyles.link : landscapeStyles.link
                    }
                    onPress={() => Linking.openURL(elem.url)}
                  >
                    {t("common:readArticle")}
                  </Text>
                  <Paragraph />
                </Card.Content>
              </Card>
              <Paragraph></Paragraph>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default NewsScreen;
