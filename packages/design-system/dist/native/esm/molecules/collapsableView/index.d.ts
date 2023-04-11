/// <reference types="react" />
type Props = {
    title: string;
    isExpanded: boolean;
    toggle: () => void;
    content: React.ReactElement | string;
};
export declare const CollapsableView: ({ title, content, isExpanded, toggle, }: Props) => JSX.Element;
export {};
