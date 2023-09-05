import * as React from 'react'
import {
  type WalletClient,
  useAccount,
  useNetwork,
  useWalletClient,
  usePublicClient,
  type PublicClient,
} from 'wagmi'
import { providers } from 'ethers'
import { HttpTransport } from 'viem'

export const useWagmiEthAddress = () => {
  const { address } = useAccount()
  return address
}

export const useWagmiChainID = () => {
  const { chain } = useNetwork()
  return chain?.id
}

export const useWagmiWeb3Conntectors = () => {
  const { isConnecting } = useAccount()
  return {
    isActivating: isConnecting,
  }
}

export const useWagmiActiveConnector = () => {
  const { connector } = useAccount()
  return connector
}

function walletClientToSigner(walletClient: WalletClient) {
  const { account, chain, transport } = walletClient
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  const provider = new providers.Web3Provider(transport, network)
  const signer = provider.getSigner(account.address)
  return signer
}

/** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useWagmiEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: walletClient } = useWalletClient({ chainId })
  return React.useMemo(
    () => (walletClient ? walletClientToSigner(walletClient) : undefined),
    [walletClient],
  )
}

export function publicClientToProvider(publicClient: PublicClient) {
  const { chain, transport } = publicClient
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  if (transport.type === 'fallback') {
    return new providers.FallbackProvider(
      (transport.transports as ReturnType<HttpTransport>[]).map(
        ({ value }) => new providers.JsonRpcProvider(value?.url, network),
      ),
    )
  }
  return new providers.JsonRpcProvider(transport.url, network)
}

/** Hook to convert a viem Public Client to an ethers.js Provider. */
export function useWagmiEthersProvider({ chainId }: { chainId?: number } = {}) {
  const publicClient = usePublicClient({ chainId })
  return React.useMemo(
    () => publicClientToProvider(publicClient),
    [publicClient],
  )
}
