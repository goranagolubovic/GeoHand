import "react-native-gesture-handler"; //this should be the first import in your code
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import navigationConfig from "../constants/navigation";
import { Dimensions } from "react-native";
import { useOrientation } from "../hooks/use-orientation";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const Drawer = createDrawerNavigator();
  const { t } = useTranslation();
  const isPortrait = useOrientation();

  useEffect(() => {
    isPortrait
      ? setWidth(Dimensions.get("window").width * 0.6)
      : setWidth(Dimensions.get("window").height * 0.6);
    isPortrait
      ? setHeight(Dimensions.get("window").height * 0.12)
      : setHeight(Dimensions.get("window").width * 0.12);
  }, [isPortrait]);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width,
        },
        headerTintColor: "white",
        headerStyle: {
          height: height,
          backgroundColor: "#144e5a",
        },

        headerTitleStyle: {
          color: "white",
        },
        drawerActiveBackgroundColor: "#ffe2c8",
        drawerActiveTintColor: "black",
      }}
    >
      {navigationConfig.map((elem) => (
        <Drawer.Screen
          name={t("navigate:" + elem.name)}
          key={elem.name}
          component={elem.component}
          options={{
            //change the configuration of our screen
            drawerIcon: () => (
              <Icon size={width * 0.09} name={elem.image}></Icon>
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default Navigation;
