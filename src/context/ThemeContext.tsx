import React, { createContext, useState, ReactNode, useContext } from 'react';
import { MD3DarkTheme, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';

type ThemeContextType = {
    toggleTheme: () => void;
    isDarkTheme: boolean;
};

const ThemeContext = createContext<ThemeContextType>({
    toggleTheme: () => { },
    isDarkTheme: false,
});

export const useThemeContext = () => useContext(ThemeContext);

type Props = {
    children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

    return (
        <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
            <PaperProvider theme={isDarkTheme ? MD3DarkTheme : MD3LightTheme}>
                {children}
            </PaperProvider>
        </ThemeContext.Provider>
    );

};