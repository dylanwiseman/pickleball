import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import * as Font from "expo-font";
import { useState } from "react";
import AppContext from "./components/AppContext";
import {
  Inter_900Black,
  Inter_400Regular,
  Inter_600SemiBold,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/dev";

import Home from "./screens/Home";
import GameDetails from "./screens/GameDetails";
import NewGame from "./screens/NewGame";
import ServeSelection from "./screens/ServeSelection";
import ScoreKeeper from "./screens/ScoreKeeper";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
// import * as dotenv from "dotenv";

export default function App() {
  //   dotenv.config();
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    // if you are getting "network request failed", make sure this ip is accurate, machine's internal IP: "
    uri: "http://192.168.1.73:4000/graphql",
  });
  // useEffect(() => {
  //     async function loadResources() {
  //         await Font.loadAsync({
  //             //prettier-ignore
  //             'Rubik': require('./assets/fonts/Rubik-VariableFont_wght.ttf'),
  //         });
  //     }
  //     loadResources();
  // }, []);
  const [fontsLoaded] = Font.useFonts({
    //prettier-ignore
    Montserrat_900Black,
    Montserrat_900Black_Italic,
    Montserrat_600SemiBold,
    Inter_900Black,
    Inter_400Regular,
    Inter_600SemiBold,
  });
  const [loggedInUser, setLoggedInUser] = useState({});
  const userData = {
    loggedInUser,
    setLoggedInUser,
  };

  // const onLayoutRootView = useCallback(async () => {
  //     if (fontsLoaded) {
  //         //   await SplashScreen.hideAsync();
  //     }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const Stack = createStackNavigator();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };
  return (
    <ApolloProvider client={client}>
      <AppContext.Provider value={userData}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="GameDetails" component={GameDetails} />
            <Stack.Screen name="NewGame" component={NewGame} />
            <Stack.Screen name="ServeSelection" component={ServeSelection} />
            <Stack.Screen name="ScoreKeeper" component={ScoreKeeper} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    </ApolloProvider>
  );
}
