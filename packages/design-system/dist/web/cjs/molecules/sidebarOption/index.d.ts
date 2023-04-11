/// <reference types="react" />
import { SidebarOptionProps, OptionProps } from './types';
export declare const SidebarOption: React.FC<SidebarOptionProps & {
    selectedOptionId?: string;
}>;
export declare const NestedSidebarOption: React.FC<OptionProps & {
    isSelected: boolean;
}>;
