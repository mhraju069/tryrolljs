import * as React from 'react';
import { GestureResponderEvent, StyleProp, TextStyle } from 'react-native';
type Weights = {
    bold: FontFamily;
    semiBold: FontFamily;
    regular: FontFamily;
};
type FontFamily = {
    fontFamily: string;
};
export declare const truncateMaxChars: (str: string, maxlimit?: number) => string;
type TypographyProps = {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    weight?: keyof Weights;
    color?: string;
    numberOfLines?: number;
    onPress?: (event: GestureResponderEvent) => void;
    underline?: boolean;
};
export type TypographyBaseProps = TypographyProps & {
    fontSize?: number;
};
export declare const TypographyBase: React.ForwardRefExoticComponent<TypographyProps & {
    fontSize?: number | undefined;
} & React.RefAttributes<unknown>>;
export declare const SubCaption: ({ ...props }: TypographyProps) => JSX.Element;
export declare const Caption: ({ ...props }: TypographyProps) => JSX.Element;
export declare const Body: React.ForwardRefExoticComponent<TypographyProps & React.RefAttributes<unknown>>;
export declare const SubHeader: ({ ...props }: TypographyProps) => JSX.Element;
export declare const Header: ({ ...props }: TypographyProps) => JSX.Element;
export declare const LargeHeader: ({ ...props }: TypographyProps) => JSX.Element;
export declare const Title: ({ ...props }: TypographyProps) => JSX.Element;
export declare const LargeTitle: ({ ...props }: TypographyProps) => JSX.Element;
export {};
