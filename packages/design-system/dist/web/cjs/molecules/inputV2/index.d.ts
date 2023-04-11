/// <reference types="react" />
import { TextInput, TextInputProps } from 'react-native';
export interface InputPropsV2 extends TextInputProps {
    value: string;
    onChangeText: (text: string) => void;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    error?: string;
    label?: string;
    counter?: boolean;
    info?: string;
    disabled?: boolean;
}
export declare const InputV2: import("react").ForwardRefExoticComponent<InputPropsV2 & import("react").RefAttributes<TextInput>>;
