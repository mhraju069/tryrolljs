interface PaletteBase {
    primary: string;
    secondary: string;
    highlight: string;
    error: string;
    warning: string;
}
interface PaletteBackground extends PaletteBase {
    lowLight: string;
    tertiary: string;
    page: string;
}
export type Theme = {
    background: PaletteBackground;
    text: PaletteBase;
};
export declare const lightTheme: Theme;
export {};
