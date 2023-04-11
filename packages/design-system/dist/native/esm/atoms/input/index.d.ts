import { ReactNode } from 'react';
import { TextInput, TextInputProps } from 'react-native';
export interface InputProps extends TextInputProps {
    right?: ReactNode;
}
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<TextInput>>;
