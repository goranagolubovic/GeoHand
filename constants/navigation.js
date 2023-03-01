import CitiesScreen from "../screens/CitiesScreen";
import GenerallyScreen from "../screens/Generally/GenerallyScreen";
import LandMarksScreen from "../screens/LandMarksScreen";
import NewsScreen from "../screens/News/NewsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DefaultScreen from "../screens/Default/DefaultScreen"
 const navigationConfig =[
    {
        name:"default",
        component:DefaultScreen,
        image:'md-information-circle-outline'
    },
    {
        name:"generally",
        component:GenerallyScreen,
        image:'md-information-circle-outline'
    },
    {
        name:"settings",
        component:SettingsScreen,
        image:"md-settings-outline"
    },
    {
        name:"landmarks",
        component:LandMarksScreen,
        image:"md-bookmark-outline"
    },
    {
        name:"cities",
        component:CitiesScreen,
        image:"md-podium-outline"
    },
    {
        name:"news",
        component:NewsScreen,
        image:"md-today-outline"
    },
]
export default navigationConfig;
