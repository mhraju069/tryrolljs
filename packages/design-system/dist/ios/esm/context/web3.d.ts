/// <reference types="react" />
import { AbstractConnector } from '@web3-react/abstract-connector';
import { Web3Connectors } from '../web3';
type Web3ConnectorsContextValue = {
    connectors: Web3Connectors;
    setConnectors: (c: Web3Connectors) => void;
    handleConnect: (c: AbstractConnector) => void;
    isActivating: boolean;
    eagerConnect: () => void;
};
export declare const Web3ConnectorsContext: import("react").Context<Web3ConnectorsContextValue>;
export {};
