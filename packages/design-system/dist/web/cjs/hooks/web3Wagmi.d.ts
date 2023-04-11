export declare const useSigner: () => import("@wagmi/core").FetchSignerResult<import("ethers").Signer> | undefined;
export declare const useLibrary: () => import("@wagmi/core/dist/index-35b6525c").P;
export declare const useWebSocketProvider: () => import("@wagmi/core").GetWebSocketProviderResult<import("@wagmi/core/dist/index-35b6525c").W>;
export declare const useEthAddress: () => `0x${string}` | undefined;
export declare const useChainID: () => number | undefined;
export declare const useWeb3Conntectors: () => {
    isActivating: boolean;
};
