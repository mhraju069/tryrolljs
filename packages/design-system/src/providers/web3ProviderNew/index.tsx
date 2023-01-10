import { useMemo } from 'react'
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

interface Web3ProviderNewProps {
  supportedChainIds?: number[]
  wallectConnectProjectId?: string
  alchemyApiKey?: string
}

export const Web3ProviderNew: React.FC<Web3ProviderNewProps> = ({
  supportedChainIds,
  wallectConnectProjectId,
  alchemyApiKey,
  children,
}) => {
  const config = useMemo(() => {
    const chains = getChainsById(supportedChainIds ?? SUPPORTED_CHAIN_IDS)
    const providers = alchemyApiKey
      ? [alchemyProvider({ apiKey: alchemyApiKey }), publicProvider()]
      : [publicProvider()]
    return configureChains(chains, providers)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const connectors = useMemo(() => {
    if (wallectConnectProjectId) {
      return [
        new InjectedConnector({ chains: config.chains }),
        new WalletConnectConnector({
          chains: config.chains,
          options: {
            qrcode: true,
            version: '2',
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

  return <WagmiConfig client={client}>{children}</WagmiConfig>
}
