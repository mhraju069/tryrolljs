/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
export type TokenSelectOption = {
    name: string;
    symbol: string;
    logo?: string;
    value: string;
    address: string;
};
export interface TokenSelectProps {
    options: TokenSelectOption[];
    placeholder?: string;
    searchPlaceholder?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    notFoundText?: string;
    style?: StyleProp<ViewStyle>;
}
export declare const TokenSelect: ({ defaultValue, options, placeholder, searchPlaceholder, notFoundText, onChange, style, }: TokenSelectProps) => JSX.Element;
