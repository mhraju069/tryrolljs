type PaletteBaseOpacity = 10 | 20 | 40 | 60 | 80 | 100;
interface PaletteBase {
    primary: Record<PaletteBaseOpacity, string>;
    highlight1: string;
    highlight2: Record<PaletteBaseOpacity, string>;
    sucess: string;
    danger: string;
    warning: string;
    transparent: string;
}
interface PaletteText {
    black: Record<30 | 40 | 80 | 100, string>;
    white: Record<40 | 80 | 100, string>;
}
interface PaletteBackground {
    white: string;
    grey: string;
    silver: string;
}
export type Theme = {
    base: PaletteBase;
    text: PaletteText;
    background: PaletteBackground;
};
export declare const lightTheme: Theme;
export {};
