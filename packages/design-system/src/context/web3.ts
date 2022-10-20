import { createContext } from 'react'
import { AbstractConnector } from '@web3-react/abstract-connector'
import { Web3Connectors } from '../web3'

type Web3ConnectorsContextValue = {
  connectors: Web3Connectors
  setConnectors: (c: Web3Connectors) => void
  handleConnect: (c: AbstractConnector) => void
  isActivating: boolean
  eagerConnect: () => void
}

export const Web3ConnectorsContext = createContext<Web3ConnectorsContextValue>({
  connectors: new Web3Connectors('', ''),
  setConnectors: () => null,
  handleConnect: (_: AbstractConnector) => null,
  isActivating: false,
  eagerConnect: () => null,
})
