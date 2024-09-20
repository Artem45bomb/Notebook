import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
    NavigationContainerRef,
    ThemeProvider
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useRef} from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import {HeaderNew} from "@/components/HeaderNew";


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
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
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack screenOptions={{headerShown:false}}>
                <Stack.Screen name="notes/index" options={{headerShown:false}}/>
                <Stack.Screen name="refactor/[id]" options={{headerShown:false}}/>
            </Stack>
        </ThemeProvider>
    );
}
