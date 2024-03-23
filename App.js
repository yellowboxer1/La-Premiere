import React, { useState, useEffect } from "react";
import { AppRegistry, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Main from "./screens/Main";
import Onboarding from "./components/Onboarding";
import SplashLaPremiere from "./components/SplashLaPremiere";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [fontsLoaded] = useFonts({
    "NotoSans-Light": require("./assets/fonts/NotoSans-Light.ttf"),
    "NotoSans-Regular": require("./assets/fonts/NotoSans-Regular.ttf"),
    "NotoSans-Medium": require("./assets/fonts/NotoSans-Medium.ttf"),
    "NotoSans-SemiBold": require("./assets/fonts/NotoSans-SemiBold.ttf"),
    "NotoSans-Bold": require("./assets/fonts/NotoSans-Bold.ttf"),
    "NotoSans-ExtraBold": require("./assets/fonts/NotoSans-ExtraBold.ttf"),
    "NunitoSans12pt-ExtraBold": require("./assets/fonts/NunitoSans12pt-ExtraBold.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  
  });

  useEffect(() => {
    //handler to get device Height
    setHeight(Dimensions.get('window').height);
    //handler to get device Width
    setWidth(Dimensions.get('window').width);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const onboardingShownPreviously = false; // Modify this logic accordingly
    if (onboardingShownPreviously) {
      setShowOnboarding(false);
    }
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator
          initialRouteName={showOnboarding ? "Onboarding" : "Main"}
          screenOptions={{ headerShown: false }}
        >
          {showOnboarding && (
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
          )}
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <SplashLaPremiere />
      )}
    </NavigationContainer>
  );
};

AppRegistry.registerComponent("PL", () => App);

export default App;
