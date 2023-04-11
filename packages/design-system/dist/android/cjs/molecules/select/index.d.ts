/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
export type SelectOption = {
    name: string;
    value: string;
};
export interface SelectProps {
    style?: StyleProp<ViewStyle>;
    placeholder?: string;
    options: SelectOption[];
    defaultValue?: string;
    onChange?: (value: string) => void;
}
export declare const Select: ({ style, placeholder, options, defaultValue, onChange, }: SelectProps) => JSX.Element;
