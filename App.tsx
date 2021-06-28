import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'

import Background from "./src/components/Background";

import Routes from "./src/routes/app.routes";
import AppProvider from "./src/context";

export default function App(): ReactElement {
  const [loaded] = useFonts({Inter_400Regular, Inter_500Medium, Rajdhani_500Medium, Rajdhani_700Bold})

  if (!loaded) {
    return <AppLoading/>
  }

  return (
      <NavigationContainer>
        <AppProvider>
          <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
          <Background>
            <Routes/>
          </Background>
        </AppProvider>
      </NavigationContainer>
  );
}
