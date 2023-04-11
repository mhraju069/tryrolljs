import type { ButtonProps } from './types';
type ColorMap = {
    text: string;
    backgroundGradient: [string, string];
    borderColor?: string;
    hover: {
        backgroundGradient: [string, string];
    };
};
export declare const getColors: ({ disabled, variant, inverted, }: Pick<ButtonProps, 'variant' | 'disabled' | 'inverted'>) => ColorMap;
export {};
