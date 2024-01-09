import { InjectedConnector } from '@web3-react/injected-connector'
import { PortisConnector } from '@web3-react/portis-connector'
import { FortmaticConnector } from '@web3-react/fortmatic-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

export const CHAIN_ID_MAIN_NET = 1
export const CHAIN_ID_POLYGON = 137
export const CHAIN_ID_GOERLI = 5
export const CHAIN_ID_MUMBAI = 80001
export const CHAIN_ID_HARDHAT = 31337
export const CHAIN_ID_FORM_TESTNET = 132902

export const SUPPORTED_CHAIN_IDS = [
  CHAIN_ID_MAIN_NET,
  CHAIN_ID_POLYGON,
  CHAIN_ID_GOERLI,
  CHAIN_ID_MUMBAI,
  CHAIN_ID_HARDHAT,
  CHAIN_ID_FORM_TESTNET,
]

export class Web3Connectors {
  supportedChainIDs: number[]
  defaultChainID: number

  injected: InjectedConnector // metamask or other browser extension
  walletConnect: WalletConnectConnector
  formatic: FortmaticConnector
  portis: PortisConnector

  constructor(
    fortmaticApiKey: string,
    portisDappID: string,
    defaultChainID: number = CHAIN_ID_MAIN_NET,
    supportedChainIDs: number[] = SUPPORTED_CHAIN_IDS,
  ) {
    this.supportedChainIDs = supportedChainIDs
    this.defaultChainID = defaultChainID

    this.injected = new InjectedConnector({
      supportedChainIds: this.supportedChainIDs,
    })

    this.formatic = new FortmaticConnector({
      apiKey: fortmaticApiKey,
      chainId: this.defaultChainID,
    })

    this.walletConnect = new WalletConnectConnector({
      supportedChainIds: this.supportedChainIDs,
    })

    this.portis = new PortisConnector({
      dAppId: portisDappID,
      networks: [CHAIN_ID_MAIN_NET],
    })
  }
}
