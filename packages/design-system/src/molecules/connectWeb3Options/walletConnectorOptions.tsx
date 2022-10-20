import { AbstractConnector } from '@web3-react/abstract-connector'
import MetaMaskLogo from '../../assets/svg/metamaskLogo.svg'
import WalletConnectLogo from '../../assets/svg/walletConnectLogo.svg'
import CoinBaseLogo from '../../assets/svg/coinbaseWalletLogo.svg'
import FortmaticLogo from '../../assets/svg/fortmaticLogo.svg'
import PortisLogo from '../../assets/svg/portisLogo.svg'
import { Web3Connectors } from '../../web3'

export type WalletProvider = {
  title: string
  logo: JSX.Element
}

type WalletProviderOption = {
  provider: WalletProvider
  connector: AbstractConnector
}

export const WalletProviderMetaMask: WalletProvider = {
  title: 'Metamask',
  logo: <MetaMaskLogo />,
}

export const WalletProviderWalletConnect: WalletProvider = {
  title: 'WalletConnect',
  logo: <WalletConnectLogo />,
}

export const WalletProviderCoinBase: WalletProvider = {
  title: 'Coinbase Wallet',
  logo: <CoinBaseLogo />,
}

export const WalletProviderFortmatic: WalletProvider = {
  title: 'Fortmatic',
  logo: <FortmaticLogo />,
}

export const WalletProviderPortis: WalletProvider = {
  title: 'Portis',
  logo: <PortisLogo />,
}

export const buildWalletOptionsWeb = (
  connectors: Web3Connectors,
): WalletProviderOption[] => [
  {
    provider: WalletProviderMetaMask,
    connector: connectors.injected,
  },
  {
    provider: WalletProviderFortmatic,
    connector: connectors.formatic,
  },
  {
    provider: WalletProviderPortis,
    connector: connectors.portis,
  },
]

export const buildWalletOptionsMobile = (
  connectors: Web3Connectors,
): WalletProviderOption[] => [
  {
    provider: WalletProviderFortmatic,
    connector: connectors.formatic,
  },
  {
    provider: WalletProviderPortis,
    connector: connectors.portis,
  },
]
