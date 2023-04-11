/// <reference types="react" />
export interface JoinBannerProps {
    title: string;
    description: string;
    action: {
        title: string;
        onPress: () => void;
    };
}
export declare const JoinBanner: React.FC<JoinBannerProps>;
