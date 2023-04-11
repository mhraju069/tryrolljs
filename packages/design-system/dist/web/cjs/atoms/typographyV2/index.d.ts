import { PropsWithChildren } from 'react';
import { GestureResponderEvent, StyleProp, TextStyle } from 'react-native';
export type TypographyVariant = 'caption2' | 'caption1' | 'text4' | 'text3' | 'text2' | 'text1' | 'buttonText' | 'buttonMedium' | 'buttonLarge' | 'sub3' | 'sub2' | 'sub1' | 'h3' | 'h2' | 'h1';
export interface TypographyV2Props {
    variant: TypographyVariant;
    style?: StyleProp<TextStyle>;
    color?: string;
    underline?: boolean;
    numberOfLines?: number;
    onPress?: (event: GestureResponderEvent) => void;
}
export declare const TypographyV2: ({ children, variant, style, color, numberOfLines, underline, onPress, }: PropsWithChildren<TypographyV2Props>) => JSX.Element;
