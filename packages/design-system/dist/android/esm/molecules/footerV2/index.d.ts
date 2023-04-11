/// <reference types="react" />
interface FooterOptionProps {
    title: string;
    isLast?: boolean;
    link: string;
}
interface FooterV2Props {
    social?: Omit<FooterOptionProps, 'isLast'>[];
    navigation: Omit<FooterOptionProps, 'isLast'>[];
}
export declare const FooterV2: ({ social, navigation, }: FooterV2Props) => JSX.Element;
export {};
