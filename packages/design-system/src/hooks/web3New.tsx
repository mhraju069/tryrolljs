import {
  useAccount,
  useNetwork,
  useProvider,
  useSigner as useSigner_,
} from 'wagmi'

export const useSigner = () => {
  const { data: signer } = useSigner_()
  return signer
}
export const useLibrary = () => {
  const provider = useProvider()
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
