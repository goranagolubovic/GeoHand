import { React, useEffect } from "react";
import { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { getCountryData } from "../../api/services/countries-service";
import { getRegions, getCities } from "../../api/services/cities-service";
import Spinner from "../../components/spinner/Spinner";
import { Country, State, City } from "country-state-city";
import styles from "./CitiesScreen.style";
import * as SQLite from "expo-sqlite";
//import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import { openGeoHandDatabase } from "../../db/db";
import { FileSystem } from "expo";
import { BottomNavigation } from "react-native-paper";
import CountryMap from "../../features/country-map/CountryMap";
import CitiesDetails from "../../features/cities-details/CitiesDetails";

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

const CitiesScreen = () => {
  const [code, setCode] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [citiesArr, setCitiesArr] = useState([]);
  const [cities, setCities] = useState([]);
  //const [regions,setRegions]=useState([]);
  const { t } = useTranslation();

  const MapRoute = () => <CountryMap />;

  const DetailsRoute = () => <CitiesDetails />;
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "mapa",
      title: t("navigate:map"),
      focusedIcon: "map-marker",
      unfocusedIcon: "map-marker-outline",
    },
    { key: "detalji", title: t("navigate:details"), focusedIcon: "album" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    mapa: MapRoute,
    detalji: DetailsRoute,
  });

  const onChangeSearch = async (query) => {
    //console.log(dbAssetURI)
    setCities([]);
    setCitiesArr([]);
    setSearchQuery(query);

    //   if(query!==""){
    //   const response=await getCountryData(query);
    //   const responseData=await response.json();
    //   if(responseData.status===404){
    //     return;
    //   }

    // try{
    //   setCode(responseData[0].cca2)
    //   const citiesData=City.getCitiesOfState(responseData[0].cca2);
    //   console.log(citiesData)
    //   citiesData.forEach(elem=>{
    //     if(citiesArr.length<=100)
    //     citiesArr.push(elem.name)
    //   })
    //   setCities(citiesArr)
    // }
    // catch(ex){

    //    }
    //   }
    // RNFS.readFile('../../assets/worldcities.csv', 'utf8')
    // .then((data) => {
    //   console.log(data);
    //   parse(data, {columns: true}, (err, records) => {
    //     if (err) {
    //       console.error(err);
    //     } else {
    //       console.log(records);
    //     }
    //   })
    // })
    // .catch((err) => {
    //   console.error(err);
    // });
    // }
    //   readRemoteFile('C:\Users\hp\Desktop\GeoHand\assets\worldcities.csv', {
    //   worker: true,
    //   step: (results) => {
    //     console.log('Row:', results.data)
    //   }
    // })
  };

  const fetchData = async () => {
    const response = await getRegions(code);
    const responseData = await response.json();

    responseData.forEach(async (element) => {
      const resp = await getCities(code, element.region);
      const respData = await resp.json();
      if (respData.length !== 0 && citiesArr <= 10) {
        respData.forEach((element) => {
          console.log(element.city);
          citiesArr.push(element.city);
        });
      }
      setCities(citiesArr);
    });
    //console.log("Regije   "+regions)
  };

  // const fetchCities = async (region) => {
  //   const resp = await getCities(code, region);
  //   const respData = await resp.json();
  //   if (respData.length !== 0)
  //     respData.forEach((element) => {
  //       console.log(element.citcy);
  //       citiesArr.push(element.city);
  //     });
  //   setCities(citiesArr);
  //   //console.log("Cities"+citiesArr)
  // };

  // const fetchCities = async () => {
  //   setCitiesData(openGeoHandDatabase);
  //   console.log(citiesData);
  // };

  // useEffect(()=>{
  //   fetchData();
  // },[code])

  // useEffect(()=>{
  //   setCitiesArr([])
  //   console.log(regions)
  //    regions.forEach(elem=>{
  //     if(citiesArr.length<=10)
  //      fetchCities(elem);
  //   })

  // },[regions])
  //   po
  return (
    // <View style={styles.container}>
    //   <Searchbar
    //     placeholder={t("common:enterCountry")}
    //     onChangeText={onChangeSearch}
    //     value={searchQuery}
    //     style={styles.search}
    //   />
    //   {/* {(searchQuery!=="" && cities.length===0)&&(<Spinner/>)} */}
    //   <ScrollView
    //     contentContainerStyle={styles.content}
    //     showsVerticalScrollIndicator={false}
    //   >
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
    //   </ScrollView>
    // </View>
  );
};

export default CitiesScreen;
