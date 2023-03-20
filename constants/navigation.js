import CitiesScreen from "../screens/Cities/CitiesScreen";
import GenerallyScreen from "../screens/Generally/GenerallyScreen";
import LandMarksScreen from "../screens/LandMarks/LandMarksScreen";
import NewsScreen from "../screens/News/NewsScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";

const navigationConfig = [
  {
    name: "settings",
    component: SettingsScreen,
    image: "md-settings-outline",
  },
  {
    name: "generally",
    component: GenerallyScreen,
    image: "md-information-circle-outline",
  },

  {
    name: "landmarks",
    component: LandMarksScreen,
    image: "md-bookmark-outline",
  },
  {
    name: "cities",
    component: CitiesScreen,
    image: "md-podium-outline",
  },
  {
    name: "news",
    component: NewsScreen,
    image: "md-today-outline",
  },
];
export default navigationConfig;
