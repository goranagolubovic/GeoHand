import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Linking } from "react-native";
import { Searchbar, Card, Paragraph } from "react-native-paper";
import { getNewsData } from "../../api/services/news-service";
import { getCountryData } from "../../api/services/countries-service";
import { useTranslation } from "react-i18next";

import styles from "./NewsScreen.style";
import Spinner from "../../components/spinner/Spinner";

const NewsScreen = () => {
  const [code, setCode] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsArr, setNewsArr] = useState([]);
  const { t } = useTranslation();

  const fetchInfos = async () => {
    const response = await getCountryData("France");
    const responseData = await response.json();
    if (responseData.status === 404) {
      return;
    }

    try {
      setCode(responseData[0].cca2);
    } catch (ex) {}
  };
  const fetchData = async () => {
    if (code !== "") {
      const response = await getNewsData(code);
      const json = await response.json();
      if (json.status !== "error") {
        setNewsArr(json.articles);
      }
    }
  };

  useEffect(() => {
    fetchInfos();
    fetchData();
  }, [code]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {newsArr.length === 0 && <Spinner />}
        {newsArr.map((elem) => (
          <View key={elem.title}>
            <Card style={{ backgroundColor: "#ffb901" }}>
              <Card.Content>
                <Text style={styles.title}>{elem.title}</Text>
                <Paragraph />
                <Text
                  style={styles.link}
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
