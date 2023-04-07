import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, Linking, Dimensions } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { getNewsData } from "../../api/services/news-service";
import { useTranslation } from "react-i18next";
import { useQuery, useQueryClient } from "react-query";
import Spinner from "../../components/spinner/Spinner";
import { CacheContext } from "../../contexts/cache-context/CacheProvider";
import { useOrientation } from "../../hooks/use-orientation";
import { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

import portraitStyles from "./NewsScreenPortrait.style";
import landscapeStyles from "./NewsScreenLandscape.style";

const NewsScreen = () => {
  const netInfo = useNetInfo();
  const { cache } = useContext(CacheContext);
  const { t } = useTranslation();
  const isPortrait = useOrientation();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await getNewsData("FR");
    const json = await response.json();
    if (json.status !== "error") {
      setData(json.articles);
      if (cache) {
        await AsyncStorage.setItem(
          "last-read-news",
          JSON.stringify(json.articles)
        );
      }
    }
  };

  const renderNews = async () => {
    const cachedData = await AsyncStorage.getItem("last-read-news");
    if (netInfo.isConnected === false) {
      if (cachedData !== undefined) setData(JSON.parse(cachedData));
      else setData([]);
    } else {
      await fetchData();
    }
  };

  useEffect(() => {
    renderNews();
  }, []);

  useEffect(() => {
    renderNews();
  }, [netInfo.isConnected]);

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
        {data.length === 0 && <Spinner />}
        {data.map((elem) => (
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
