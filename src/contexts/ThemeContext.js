import { createContext, useState, useEffect } from "react"

const lightThemeColors = {
    bg_color: '#FFFFFF',
    accent_color: '#29773E',
    font_color: '#000000',
    font_color_med_emphasis: 'rgba(0, 0, 0, 0.70)',
    navbar_bg_color: '#FFFFFF',
    elevation_color: '#DBDEE1',
}

const darkThemeColors = {
    bg_color: '#121212',
    accent_color: '#369457',
    font_color: 'rgba(255, 255, 255, 0.87)',
    font_color_med_emphasis: 'rgba(255, 255, 255, 0.60)',
    navbar_bg_color: '#121212',
    elevation_color: '#1e1e1e',
}

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    useEffect(() => {
        let theme = isDarkTheme ? darkThemeColors : lightThemeColors;
        document.documentElement.style.setProperty("--bg-color", theme.bg_color);
        document.documentElement.style.setProperty("--accent-color", theme.accent_color);
        document.documentElement.style.setProperty("--font-color", theme.font_color);
        document.documentElement.style.setProperty("--font-color-med-emphasis", theme.font_color_med_emphasis);
        document.documentElement.style.setProperty("--navbar-bg-color", theme.navbar_bg_color);
        document.documentElement.style.setProperty("--elevation-color", theme.elevation_color);
    }, [isDarkTheme]);

    return (
        <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
            { props.children }
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;