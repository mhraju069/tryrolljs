/// <reference types="react" />
export type BannerProps = {
    title: string;
    variant?: 'default' | 'warning';
    action?: {
        title: string;
        onPress: () => void;
    };
};
export declare const Banner: ({ title, action, variant }: BannerProps) => JSX.Element;
