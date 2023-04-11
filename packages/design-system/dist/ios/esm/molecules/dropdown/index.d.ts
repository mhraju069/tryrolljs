import { ReactNode } from 'react';
export type DropdownProps = {
    children: ReactNode;
    renderDropdown: () => ReactNode;
    open?: boolean;
};
export declare const Dropdown: ({ children, open, renderDropdown }: DropdownProps) => JSX.Element;
