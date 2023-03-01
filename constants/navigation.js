import CitiesScreen from "../screens/CitiesScreen";
import GenerallyScreen from "../screens/Generally/GenerallyScreen";
import LandMarksScreen from "../screens/LandMarksScreen";
import NewsScreen from "../screens/News/NewsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const navigationConfig =[
    {
        name:"Generally",
        component:GenerallyScreen,
        image:'md-information-circle-outline'
    },
    {
        name:"Settings",
        component:SettingsScreen,
        image:"md-settings-outline"
    },
    {
        name:"Landmarks",
        component:LandMarksScreen,
        image:"md-bookmark-outline"
    },
    {
        name:"Cities",
        component:CitiesScreen,
        image:"md-podium-outline"
    },
    {
        name:"News",
        component:NewsScreen,
        image:"md-today-outline"
    },
]

export default navigationConfig;