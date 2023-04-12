import {
  useAccount,
  useNetwork,
  useProvider,
  useSigner as useSigner_,
  useWebSocketProvider as useWebSocketProvider_,
} from 'wagmi'

export const useSigner = () => {
  const { data: signer } = useSigner_()
  return signer
}
export const useLibrary = () => {
  const chainId = useChainID()
  const provider = useProvider({ chainId })
  return provider
}

export const useWebSocketProvider = () => {
  const chainId = useChainID()
  const provider = useWebSocketProvider_({ chainId })
  return provider
}

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
