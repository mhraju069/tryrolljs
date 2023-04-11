import * as React from 'react';
export type ModalContextValue = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};
export declare const ModalContext: React.Context<ModalContextValue>;
