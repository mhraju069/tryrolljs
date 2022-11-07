import { useCallback } from 'react'
import { useChainID } from '../../hooks'
import { SUPPORTED_CHAIN_IDS } from '../../web3'
import { Banner, BannerVariant } from '../banner'

type Props = {
  title?: string
  supportedChainIDs?: number[]
  chainID?: number
  validChainID: number
}

const changeNetwork = async (chainID: number) => {
  const { ethereum } = window
  if (ethereum && ethereum.request) {
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainID}` }],
      })
    } catch (err) {
      console.log(err)
    }
  }
}

const isSupportedNetwork = (
  supportedChainIDs: number[],
  chainID: number | undefined,
) =>
  supportedChainIDs.findIndex(
    (supportedChainID) => supportedChainID === chainID,
  ) !== -1

export const InvalidNetworkBanner = ({
  title,
  supportedChainIDs = SUPPORTED_CHAIN_IDS,
  validChainID,
}: Props) => {
  const chainID = useChainID()

  const handleNetworkChange = useCallback(() => {
    changeNetwork(validChainID)
  }, [validChainID])

  if (!chainID || isSupportedNetwork(supportedChainIDs, chainID)) {
    return null
  }

  return (
    <Banner
      title={title ?? 'You are connected to the wrong network.'}
      variant={BannerVariant.WARNING}
      action={{
        title: 'Click here to change network',
        onPress: handleNetworkChange,
      }}
    />
  )
}
