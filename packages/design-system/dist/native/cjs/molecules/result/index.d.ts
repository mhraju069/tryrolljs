/// <reference types="react" />
import { GestureResponderEvent } from 'react-native';
type Action = {
    onPress: (e?: GestureResponderEvent) => void;
    title: string;
};
export type ResultVariant = 'success' | 'error' | 'warn';
export interface ResultProps {
    title?: string;
    description?: string;
    actions?: [] | [Action] | [Action, Action];
    layout?: 'horizontal' | 'vertical';
    variant?: ResultVariant;
}
export declare const TEXT_COLOR_MAP: {
    success: string;
    error: string;
    warn: string;
};
export declare const Result: ({ title, description, actions, layout, variant, }: ResultProps) => JSX.Element;
export default Result;
