import { StyleSheet, Text, View } from 'react-native';
import React from "react"
import Welcome from './screens/welcome';
import AppLoading from 'expo-app-loading';
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoading] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });
  
  if(!fontsLoading) {
    return <AppLoading />;
  }

  return (
    <Welcome/>
  );
}
