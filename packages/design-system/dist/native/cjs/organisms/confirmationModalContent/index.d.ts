import { ReactNode } from 'react';
export type ConfirmationModalAction = {
    title: string;
    onPress: () => void;
};
export interface ConfirmationModalContentProps {
    title: string;
    description?: string;
    confirmAction: ConfirmationModalAction;
    cancelAction: ConfirmationModalAction;
    children: ReactNode;
}
export declare const ConfirmationModalContent: ({ title, description, confirmAction, cancelAction, children, }: ConfirmationModalContentProps) => JSX.Element;
