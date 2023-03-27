import { useMemo } from 'react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { Platform } from 'react-native'
import { SUPPORTED_CHAIN_IDS } from '../../web3'
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
  wallectConnectProjectId,
  alchemyApiKey,
  variant,
  children,
}) => {
  const config = useMemo(() => {
    const chains = getChainsById(supportedChainIds ?? SUPPORTED_CHAIN_IDS)
    if (variant === 'web3Modal') {
      return configureChains(chains, [
        w3mProvider({ projectId: wallectConnectProjectId }),
      ])
    }
    const providers = alchemyApiKey
      ? [alchemyProvider({ apiKey: alchemyApiKey }), publicProvider()]
      : [publicProvider()]
    return configureChains(chains, providers)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const connectors = useMemo(() => {
    if (variant === 'web3Modal') {
      return w3mConnectors({
        projectId: wallectConnectProjectId,
        version: 1,
        chains: config.chains,
      })
    }
    if (variant === 'walletConnect') {
      return [
        new InjectedConnector({ chains: config.chains }),
        new WalletConnectConnector({
          chains: config.chains,
          options: {
            showQrModal: true,
            projectId: wallectConnectProjectId,
          },
        }),
      ]
    }
    return [new InjectedConnector({ chains: config.chains })]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const client = useMemo(() => {
    return createClient({
      autoConnect: true,
      provider: config.provider,
      webSocketProvider: config.webSocketProvider,
      connectors: connectors,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const ethereumClient = new EthereumClient(client, config.chains)

  return (
    <>
      <WagmiConfig client={client}>{children}</WagmiConfig>
      {variant === 'web3Modal' && (
        <Web3Modal
          projectId={wallectConnectProjectId}
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
