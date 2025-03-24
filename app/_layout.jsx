 
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
 import { useEffect } from "react";
import "react-native-reanimated";
// import { AuthProvider } from "../context/AuthContext";

// import { useColorScheme } from "@/hooks/useColorScheme";
import { Platform } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    montserrat: require("../assets/fonts/montserrat/Montserrat-Regular.ttf"),
    montserratMeduim: require("../assets/fonts/montserrat/Montserrat-Medium.ttf"),
    SofiaProMedium: require("../assets/fonts/sofia/Sofia Pro Medium Az.otf"),
    SofiaProBold: require("../assets/fonts/sofia/Sofia Pro Black Az.otf"),
    Alata: require("../assets/fonts/Alata/Alata-Regular.ttf"),
    Sora: require("../assets/fonts/sora/Sora-Regular.ttf"),
    Sofia: require("../assets/fonts/sofia/Sofia Pro Regular Az.otf"),
  });

  useEffect(() => {
    if (Platform.OS === "ios") {
      // Skip font loading for iOS
      SplashScreen.hideAsync();
    } else if (fontsLoaded) {
      // Hide the splash screen once fonts are loaded
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Return null if fonts are loading and the platform is not iOS
  if (!fontsLoaded && Platform.OS !== "ios") {
    return null;
  }

  return (
       <Stack screenOptions={{ headerShown: false }}>
        {/* Other Screens */}
        <Stack.Screen name="index" />
        <Stack.Screen name="(routes)/welcomeScreen/index" />
        <Stack.Screen
          name="(tabs)/home.tsx"
          options={{
            headerShown: false,
          }}
        />
        {/* Add the Confirmation screen here */}

        {/* <Stack.Screen name="(routes)/successfull-transfer" />
        <Stack.Screen name="(routes)/TrfConfirm" /> */}
 
       </Stack>
   );
}
