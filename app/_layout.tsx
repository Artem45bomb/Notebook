import {DarkTheme, DefaultTheme, NavigationContainerRef, ThemeProvider} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect, useRef} from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import {Provider} from "react-redux";
import {store} from "@/store/store";
import {NavigationContainer} from '@react-navigation/native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }


  return (
        <Provider store={store}>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack screenOptions={{headerShown:false}} >
              <Stack.Screen name="(tabs)/(base)" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)/(new)" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)/(set)" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)/(auth)" options={{ headerShown: false }} />
            </Stack>
          </ThemeProvider>
        </Provider>
  );
}
