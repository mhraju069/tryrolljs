/// <reference types="react" />
import { GestureResponderEvent, ViewStyle } from 'react-native';
export type ToastVariant = 'success' | 'error' | 'light' | 'dark' | 'warn';
export interface ToastProps {
    title?: string;
    description?: string;
    onClose?: (e: GestureResponderEvent) => void;
    action?: {
        title: string;
        onPress: (e: GestureResponderEvent) => void;
    };
    variant?: ToastVariant;
    style?: ViewStyle;
}
export declare const TOAST_COLOR_MAP: {
    light: {
        backgroundColor: string;
        color: string;
        secondaryBackgroundColor: string;
        borderColor: string;
    };
    dark: {
        backgroundColor: string;
        color: string;
        secondaryBackgroundColor: string;
        borderColor: string;
    };
    success: {
        backgroundColor: string;
        color: string;
        secondaryBackgroundColor: string;
        borderColor: string;
    };
    error: {
        backgroundColor: string;
        color: string;
        secondaryBackgroundColor: string;
        borderColor: string;
    };
    warn: {
        backgroundColor: string;
        color: string;
        secondaryBackgroundColor: string;
        borderColor: string;
    };
};
export declare const Toast: {
    ({ title, description, action, onClose, variant, style, }: ToastProps): JSX.Element;
    show: ({ title, description, onClose, action, variant, duration, }: ToastProps & {
        duration?: number | null | undefined;
    }) => void;
};
