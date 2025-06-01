import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useThemeContext } from '../../context/ThemeContext';

const Loader = () => {

    const { isDarkTheme } = useThemeContext();

    return (
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: isDarkTheme ? "#111" : "#fff" }}>
            <ActivityIndicator size="large" color={isDarkTheme ? "#fff" : "#111"} />
        </View>
    );

};

export default Loader;