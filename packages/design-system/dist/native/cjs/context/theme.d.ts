/// <reference types="react" />
import { Theme } from '../styles';
type ThemeContextValue = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
export declare const ThemeContext: import("react").Context<ThemeContextValue>;
export {};
