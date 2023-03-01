import React from 'react'
import { View,Text} from 'react-native'
import { Searchbar,Card,Title, Paragraph} from 'react-native-paper';
import { getCountryData } from '../../api/services/countries-service';
import Spinner from '../../components/spinner/Spinner';
import { Image } from "react-native"
import * as ScreenOrientation from "expo-screen-orientation";
import { useState,useEffect
 } from "react";
 import {TouchableOpacity} from "react-native";

const DefaultScreen = () => {
  const [orientation, setOrientation] = useState(null);
  useEffect(() => {
    checkOrientation();
    const subscription = ScreenOrientation.addOrientationChangeListener(
      handleOrientationChange
    );
    return () => {
      ScreenOrientation.removeOrientationChangeListeners(subscription);
    };
  }, []);
  const checkOrientation = async () => {
    const orientation = await ScreenOrientation.getOrientationAsync();
    setOrientation(orientation);
  };
  const changeOrientation = async (newOrientation) => {
    //console.log("newOrientation: ", newOrientation);
    await ScreenOrientation.lockAsync(newOrientation);
  };
  const handleOrientationChange = (o) => {
    setOrientation(o.orientationInfo.orientation);
  };
  //console.log(orientation);

  return (
    <View >
     <TouchableOpacity
        style={ { marginTop: 15 }}
        onPress={() =>
          changeOrientation(ScreenOrientation.OrientationLock.PORTRAIT_UP)
        }
      >
        <Text>Tap to Portrait orientation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          changeOrientation(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT)
        }
      >
        <Text >Tap to Landscape orientation</Text>
      </TouchableOpacity>
  </View>
  )
}

export default DefaultScreen;
