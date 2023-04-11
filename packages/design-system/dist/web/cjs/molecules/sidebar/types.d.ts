/// <reference types="react" />
import { SidebarOptionProps } from '../sidebarOption/types';
export interface SidebarFooterOptionProps {
    title: string;
    link: string;
}
export interface SidebarSection {
    id: string;
    options: SidebarOptionProps[];
}
export interface LogoSidebar {
    desktop: React.ReactNode;
    mobileHeader: React.ReactNode;
    mobileSidebar: React.ReactNode;
}
export interface SidebarProps {
    logo: LogoSidebar;
    header?: React.ReactNode;
    selectedOptionId?: string;
    sections: SidebarSection[];
    withConnectWallet?: boolean;
    footerOptionsOnMobile?: SidebarFooterOptionProps[];
    footerOnDesktop?: React.ReactNode;
}
