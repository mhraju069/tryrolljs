interface Web3ProviderWagmiSharedProps {
  supportedChainIds?: number[]
  alchemyApiKey?: string
}
export type Web3ProviderWagmiProps =
  | (Web3ProviderWagmiSharedProps & {
      walletConnectProjectId: string
      variant: 'walletConnect' | 'web3Modal'
    })
  | (Web3ProviderWagmiSharedProps & {
      walletConnectProjectId?: string
      variant: 'injected'
    })
