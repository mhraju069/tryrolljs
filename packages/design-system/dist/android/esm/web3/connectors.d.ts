import { InjectedConnector } from '@web3-react/injected-connector';
import { PortisConnector } from '@web3-react/portis-connector';
import { FortmaticConnector } from '@web3-react/fortmatic-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
export declare const CHAIN_ID_MAIN_NET = 1;
export declare const CHAIN_ID_POLYGON = 137;
export declare const CHAIN_ID_ROPSTEN = 3;
export declare const CHAIN_ID_GOERLI = 5;
export declare const CHAIN_ID_MUMBAI = 80001;
export declare const CHAIN_ID_HARDHAT = 31337;
export declare const SUPPORTED_CHAIN_IDS: number[];
export declare class Web3Connectors {
    supportedChainIDs: number[];
    defaultChainID: number;
    injected: InjectedConnector;
    walletConnect: WalletConnectConnector;
    formatic: FortmaticConnector;
    portis: PortisConnector;
    constructor(fortmaticApiKey: string, portisDappID: string, defaultChainID?: number, supportedChainIDs?: number[]);
}
