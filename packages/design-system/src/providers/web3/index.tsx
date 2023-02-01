import * as React from 'react'
import { Web3Provider as EthersWeb3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import { AbstractConnector } from '@web3-react/abstract-connector'
import {
  Web3ConnectorProvider,
  Web3ConnectorProviderProps,
} from '../web3Connectors'

const getDefaultLibrary = (provider: any) => new EthersWeb3Provider(provider)

type Props = Web3ConnectorProviderProps & {
  getLibrary?: (
    provider?: any,
    connector?: AbstractConnector | undefined,
  ) => any
}

export const Web3Provider: React.FC<Props> = ({
  children,
  getLibrary,
  fortmaticApiKey,
  portisDappID,
  defaultChainID,
  supportedChainIDs,
  eagerConnect,
}) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary || getDefaultLibrary}>
      <Web3ConnectorProvider
        eagerConnect={eagerConnect}
        fortmaticApiKey={fortmaticApiKey}
        portisDappID={portisDappID}
        defaultChainID={defaultChainID}
        supportedChainIDs={supportedChainIDs}
      >
        {children}
      </Web3ConnectorProvider>
    </Web3ReactProvider>
  )
}
