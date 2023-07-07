import * as React from 'react'
import {
  type WalletClient,
  useAccount,
  useNetwork,
  useWalletClient,
} from 'wagmi'

import { providers } from 'ethers'

export const useEthAddress = () => {
  const { address } = useAccount()
  return address
}

export const useChainID = () => {
  const { chain } = useNetwork()
  return chain?.id
}

export const useWeb3Conntectors = () => {
  const { isConnecting } = useAccount()
  return {
    isActivating: isConnecting,
  }
}

export const useActiveConnector = () => {
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
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: walletClient } = useWalletClient({ chainId })
  return React.useMemo(
    () => (walletClient ? walletClientToSigner(walletClient) : undefined),
    [walletClient],
  )
}
