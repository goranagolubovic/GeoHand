import "react-native-gesture-handler"; //this should be the first import in your code
import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation/Navigation";
import "./constants/IMLocalize";
import { QueryClient, QueryClientProvider } from "react-query";
import PictureNumberProvider from "./contexts/picture-number-context/PictureNumberProvider";
import CacheProvider from "./contexts/cache-context/CacheProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <PictureNumberProvider>
      <CacheProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </CacheProvider>
    </PictureNumberProvider>
  );
}
