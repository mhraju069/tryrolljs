import * as React from 'react';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { Web3ConnectorProviderProps } from '../web3Connectors';
type Props = Web3ConnectorProviderProps & {
    getLibrary?: (provider?: any, connector?: AbstractConnector | undefined) => any;
};
export declare const Web3Provider: ({ children, getLibrary, fortmaticApiKey, portisDappID, defaultChainID, supportedChainIDs, eagerConnect, }: React.PropsWithChildren<Props>) => JSX.Element;
export {};
