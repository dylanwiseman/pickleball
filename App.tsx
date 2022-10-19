import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import Home from './screens/Home';
import GameDetails from './screens/GameDetails';
import NewGame from './screens/NewGame';
import ServeSelection from './screens/ServeSelection';
import ScoreKeeper from './screens/ScoreKeeper';
import Login from './screens/Login';
import Signup from './screens/Signup';

export default function App() {
    const Stack = createStackNavigator();

    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'white',
        },
    };
    return (
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
                <Stack.Screen
                    name="ServeSelection"
                    component={ServeSelection}
                />
                <Stack.Screen name="ScoreKeeper" component={ScoreKeeper} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
