import "react-native-gesture-handler"; //this should be the first import in your code
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import navigationConfig from "../constants/navigation";

const Navigation = () => {
  const Drawer = createDrawerNavigator();
  const { t } = useTranslation();
  const keys = [
    "default",
    "generally",
    "settings",
    "landmarks",
    "cities",
    "newa",
  ];
  // const [code,setCode]=useState("en");
  // const [navigationConfig,setNavigationConfig]=useState(navigationEn);

  // useEffect(()=>{
  //     t('navigate:navigationConfig', { returnObjects: true }).forEach(element => {
  //         console.log(elem)
  //     });
  // },[])

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: 240,
        },
        headerTintColor: "white",
        headerStyle: {
          height: 80,
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
            drawerIcon: () => <Icon size={25} name={elem.image}></Icon>,
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default Navigation;
