
import "react-native-gesture-handler"; //this should be the first import in your code
import {StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation/Navigation";

export default function App() {
  return (
 <NavigationContainer>
<Navigation/>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
