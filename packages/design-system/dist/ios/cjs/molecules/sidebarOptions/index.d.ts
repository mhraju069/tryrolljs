/// <reference types="react" />
import { SidebarProps } from '../sidebar/types';
type SidebarOptionsProps = Pick<SidebarProps, 'selectedOptionId' | 'sections'>;
export declare const SidebarOptions: React.FC<SidebarOptionsProps>;
export {};
