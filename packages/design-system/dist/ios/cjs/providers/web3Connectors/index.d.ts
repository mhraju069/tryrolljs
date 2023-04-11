/// <reference types="react" />
export type Web3ConnectorProviderProps = {
    fortmaticApiKey: string;
    portisDappID: string;
    defaultChainID?: number;
    supportedChainIDs?: number[];
    eagerConnect?: boolean;
};
export declare const Web3ConnectorProvider: ({ children, fortmaticApiKey, portisDappID, defaultChainID, supportedChainIDs, eagerConnect, }: React.PropsWithChildren<Web3ConnectorProviderProps>) => JSX.Element;
