import { React, useEffect } from "react";
import { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { getCountryData } from "../../api/services/countries-service";
import { getRegions, getCities } from "../../api/services/cities-service";
import Spinner from "../../components/spinner/Spinner";
import { Country, State, City } from "country-state-city";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as SQLite from "expo-sqlite";
//import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import {
  fetchCitiesFromDB,
  fetchCitiesTable,
  openGeoHandDatabase,
} from "../../db/db";
import { FileSystem } from "expo";
import { BottomNavigation, BottomNavigationTab } from "react-native-paper";
import CountryMap from "../../features/country-map/CountryMap";
import CitiesDetails from "../../features/cities-details/CitiesDetails";
import GenerallyScreen from "../Generally/GenerallyScreen";

// const db=SQLite.openDatabase({
//   name:'GeoHand.db',
//   location:'assets'
//  // createFromLocation: 1,

// },
//   ()=>{},
//   error=>{console.log(error)}

// )
// const dbAssetURI = FileSystem.documentDirectory + 'GeoHand.db';

// const db = SQLite.openDatabase('GeoHand.db', undefined, undefined, undefined, undefined, {location: dbAssetURI});
// const dbAsset = Asset.fromModule(require('../../GeoHand.db'));
// const dbUri = dbAsset.uri;

const Tab = createBottomTabNavigator();
const CitiesScreen = () => {
  const [code, setCode] = useState("");
  const [dataReady, setDataReady] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [citiesArr, setCitiesArr] = useState([]);
  const [cities, setCities] = useState([]);
  const [mapMounted, setMapMounted] = useState(false);
  //const [regions,setRegions]=useState([]);
  const { t } = useTranslation();

  const MapRouteCities = () => <CountryMap />;

  const DetailsRouteCities = () => <CitiesDetails />;
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "mapaGradovi",
      title: t("navigate:map"),
      focusedIcon: "map-marker",
      unfocusedIcon: "map-marker-outline",
    },
    {
      key: "detaljiGradovi",
      title: t("navigate:details"),
      focusedIcon: "album",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    detaljiGradovi: DetailsRouteCities,
    mapaGradovi: MapRouteCities,
  });

  useEffect(() => {
    fetchCitiesFromDB();
    setCities(fetchCitiesTable());
  }, []);

  useEffect(() => {
    // if (mapMounted) {
    // Delay the rendering of content until the CountryMap component has mounted
    //}
  }, [mapMounted]);

  return (
    <>
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
    </>
    // <NavigationContainer independent={true}>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Map" component={CountryMap} lazy={true} />
    //     <Tab.Screen name="Details" component={CitiesDetails} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default CitiesScreen;
