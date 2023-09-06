import { useMemo } from 'react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { Platform } from 'react-native'
import { SUPPORTED_CHAIN_IDS } from '../../connectors'
import { Web3ProviderWagmiProps } from './types'
import { getChainsById } from './utils'

const Web3ProviderNativeWagmi: React.FC<
  React.PropsWithChildren<Web3ProviderWagmiProps>
> = ({ children }) => {
  return <>{children}</>
}

const Web3ProviderWebWagmi: React.FC<
  React.PropsWithChildren<Web3ProviderWagmiProps>
> = ({
  supportedChainIds,
  walletConnectProjectId,
  alchemyApiKey,
  variant,
  children,
}) => {
  const { chains, publicClient, webSocketPublicClient } = useMemo(() => {
    const supportedChains = getChainsById(
      supportedChainIds ?? SUPPORTED_CHAIN_IDS,
    )
    if (variant === 'web3Modal') {
      return configureChains(supportedChains, [
        w3mProvider({ projectId: walletConnectProjectId }),
      ])
    }
    const providers = alchemyApiKey
      ? [alchemyProvider({ apiKey: alchemyApiKey }), publicProvider()]
      : [publicProvider()]
    return configureChains(supportedChains, providers)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const connectors = useMemo(() => {
    if (variant === 'web3Modal') {
      return w3mConnectors({
        projectId: walletConnectProjectId,
        chains: chains,
      })
    }
    if (variant === 'walletConnect') {
      return [
        new InjectedConnector({ chains: chains }),
        new WalletConnectConnector({
          chains: chains,
          options: {
            showQrModal: true,
            projectId: walletConnectProjectId,
          },
        }),
      ]
    }
    return [new InjectedConnector({ chains: chains })]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const wagmiConfig = useMemo(() => {
    return createConfig({
      autoConnect: true,
      publicClient,
      webSocketPublicClient,
      connectors,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const ethereumClient = new EthereumClient(wagmiConfig, chains)

  return (
    <>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
      {variant === 'web3Modal' && (
        <Web3Modal
          projectId={walletConnectProjectId}
          ethereumClient={ethereumClient}
        />
      )}
    </>
  )
}

export const Web3ProviderWagmi: React.FC<
  React.PropsWithChildren<Web3ProviderWagmiProps>
> = Platform.select({
  web: Web3ProviderWebWagmi,
  default: Web3ProviderNativeWagmi,
})
