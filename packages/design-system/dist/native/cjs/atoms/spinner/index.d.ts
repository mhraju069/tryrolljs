/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
export type SpinnerProps = {
    size?: 'sm' | 'lg' | number;
    color?: string;
    style?: StyleProp<ViewStyle>;
};
export declare const Spinner: ({ style, size, color }: SpinnerProps) => JSX.Element;
