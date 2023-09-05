import { useChainID, SUPPORTED_CHAIN_IDS } from '@roll-network/web3'
import { Banner } from '../banner'

export type InvalidNetworkBannerProps = {
  title?: string
  supportedChainIDs?: number[]
  chainID?: number
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
}: InvalidNetworkBannerProps) => {
  const chainID = useChainID()

  if (!chainID || isSupportedNetwork(supportedChainIDs, chainID)) {
    return null
  }

  return (
    <Banner
      title={title ?? 'You are connected to the wrong network.'}
      variant="warning"
    />
  )
}
