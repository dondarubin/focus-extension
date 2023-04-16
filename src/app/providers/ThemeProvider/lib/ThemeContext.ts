import { createContext } from 'react';

export enum Theme {
    BLUE = 'blue',
    ORANGE = 'orange',
    CORAL = 'coral',
    DARKBLUE = 'darkblue',
    PEACH = 'peach',
    AQUA = 'aqua',
    PURPLE = 'purple',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
