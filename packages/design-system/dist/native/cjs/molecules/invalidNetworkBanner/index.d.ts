/// <reference types="react" />
export type InvalidNetworkBannerProps = {
    title?: string;
    supportedChainIDs?: number[];
    chainID?: number;
};
export declare const InvalidNetworkBanner: ({ title, supportedChainIDs, }: InvalidNetworkBannerProps) => JSX.Element | null;
