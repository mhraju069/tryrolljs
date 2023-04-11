import { Web3Provider } from '@ethersproject/providers';
import { Web3Connectors } from '../web3';
export declare const useInactiveListener: (connectors: Web3Connectors | null, onChangeChain?: () => void, onChangeAccount?: () => void) => void;
export declare const useLibrary: () => Web3Provider | undefined;
export declare const useSigner: () => import("@ethersproject/providers").JsonRpcSigner | undefined;
export declare const useEthAddress: () => string | null | undefined;
export declare const useChainID: () => number | undefined;
export declare const useWeb3Conntectors: () => {
    connectors: Web3Connectors;
    setConnectors: (c: Web3Connectors) => void;
    handleConnect: (c: import("@web3-react/abstract-connector").AbstractConnector) => void;
    isActivating: boolean;
    eagerConnect: () => void;
};
