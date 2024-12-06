import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"
import { useContext } from "react";


interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme
}


export function useTheme(): UseThemeResult{
    const {theme, setTheme} = useContext(ThemeContext)
    if (!theme) {
        throw new Error("useTheme: 'theme' is undefined. Make sure to use ThemeProvider.");
    }
    if (!setTheme) {
        throw new Error("useTheme: 'setTheme' is undefined. Make sure to use ThemeProvider.");
    }
    
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return {theme, toggleTheme}
}