import { useMemo } from 'react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { Chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { mainnet, goerli, hardhat, polygonMumbai } from 'wagmi/chains'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import {
  CHAIN_ID_GOERLI,
  CHAIN_ID_HARDHAT,
  CHAIN_ID_MAIN_NET,
  CHAIN_ID_MUMBAI,
  SUPPORTED_CHAIN_IDS,
} from '../../web3'

const getChainsById = (chains: number[]) => {
  const filterdChains: Chain[] = []
  chains.forEach((chain) => {
    const validChain = MAP_CHAINS[chain]
    if (validChain) {
      filterdChains.push(validChain)
    }
  })
  return filterdChains
}
const MAP_CHAINS: Record<number, Chain> = {
  [CHAIN_ID_MAIN_NET]: mainnet,
  [CHAIN_ID_GOERLI]: goerli,
  [CHAIN_ID_HARDHAT]: hardhat,
  [CHAIN_ID_MUMBAI]: polygonMumbai,
}

interface Web3ProviderWagmiSharedProps {
  supportedChainIds?: number[]
  alchemyApiKey?: string
}
type Web3ProviderWagmiProps =
  | (Web3ProviderWagmiSharedProps & {
      wallectConnectProjectId: string
      variant: 'walletConnect' | 'web3Modal'
    })
  | (Web3ProviderWagmiSharedProps & {
      wallectConnectProjectId?: string
      variant: 'injected'
    })

export const Web3ProviderWagmi = ({
  supportedChainIds,
  wallectConnectProjectId,
  alchemyApiKey,
  variant,
  children,
}: React.PropsWithChildren<Web3ProviderWagmiProps>) => {
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
