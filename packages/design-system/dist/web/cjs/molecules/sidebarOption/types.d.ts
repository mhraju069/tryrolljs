/// <reference types="react" />
import { IconVariant } from '../../atoms';
export interface OptionProps {
    id: string;
    iconVariant?: IconVariant;
    icon?: React.ReactNode;
    title: string;
    onPress: () => void;
}
export interface SidebarOptionProps extends OptionProps {
    nestedOptions?: OptionProps[];
}
