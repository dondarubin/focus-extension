import { useCallback, useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
    toggleTheme: (theme) => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const {
        theme,
        setTheme
    } = useContext(ThemeContext);

    const toggleTheme = useCallback((theme) => {
        setTheme?.(theme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme, setTheme]);

    return {
        theme: theme || Theme.BLUE,
        toggleTheme
    };
}