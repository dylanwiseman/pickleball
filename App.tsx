import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import Home from './screens/Home';
import GameDetails from './screens/GameDetails';
import NewGame from './screens/NewGame';

export default function App() {
    const Stack = createStackNavigator();

    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'transparent',
        },
    };
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="GameDetails" component={GameDetails} />
                <Stack.Screen name="NewGame" component={NewGame} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
