/// <reference types="react" />
import { Theme } from '../styles/themeV2';
type ThemeContextValue = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
export declare const ThemeContextV2: import("react").Context<ThemeContextValue>;
export {};
