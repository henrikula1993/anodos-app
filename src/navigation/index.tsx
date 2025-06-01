import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import HomeScreen from '../screens/home/HomeScreen';
import CoinDetails from '../screens/details/CoinDetails';
import { useThemeContext } from '../context/ThemeContext';
import { StatusBar } from 'react-native';

type Coin = {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
    market_cap?: number;
    total_volume?: number;
    circulating_supply?: number;
    total_supply?: number | null;
};

export type RootStackParamList = {
    Home: undefined;
    CoinDetails: { coin: Coin };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {

    const { isDarkTheme } = useThemeContext();

    return (
        <>
            <StatusBar
                barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
                backgroundColor={isDarkTheme ? '#111' : '#fff'}
            />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: isDarkTheme ? "#111" : "#fff"
                        },
                        headerTintColor: isDarkTheme ? "#fff" : "#222"
                    }}
                >
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            animation: 'fade_from_bottom'
                        }}
                    />
                    <Stack.Screen
                        name="CoinDetails"
                        component={CoinDetails}
                        options={{
                            animation: 'fade_from_bottom'
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );

}