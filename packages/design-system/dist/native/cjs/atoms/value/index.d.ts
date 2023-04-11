/// <reference types="react" />
import { StyleProp, TextStyle } from 'react-native';
export declare const DEFAULT_MAX_DIGITS = 4;
export type ValueProps = {
    displayValue: string;
    decimals: number;
    maxDigits?: number;
    style?: StyleProp<TextStyle>;
    renderValue?: (displayVal: string) => React.ReactElement;
};
export declare const Value: ({ displayValue, maxDigits, style, renderValue, }: ValueProps) => JSX.Element;
