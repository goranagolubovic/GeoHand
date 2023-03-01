import "react-native-gesture-handler"; //this should be the first import in your code
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/Ionicons';
import navigationConfig from '../constants/navigation';

const Navigation = () => {
    const Drawer = createDrawerNavigator();
  return (
       
      <Drawer.Navigator    screenOptions={{
      drawerStyle: {
        width: 240
      },
      headerTintColor: "white",
      headerStyle: {
        height: 80,
        backgroundColor: "#144e5a"
      },

      headerTitleStyle: {
        color:"white"
      },
      drawerActiveBackgroundColor : "#ffe2c8",
      drawerActiveTintColor: "black"}}>
         { 
            navigationConfig.map(elem=>(  <Drawer.Screen name={elem.name} key={elem.name} component={elem.component}   options={{ //change the configuration of our screen
                drawerIcon: () => <Icon
                size={25}
                name={elem.image}></Icon>
              }}/>))
        }
</Drawer.Navigator>
    
  )
}

export default Navigation
