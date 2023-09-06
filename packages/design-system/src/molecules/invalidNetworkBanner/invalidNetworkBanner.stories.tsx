import {
  withWeb3Provider,
  CHAIN_ID_MAIN_NET,
  useChainID,
} from '@roll-network/web3'
import { fromTemplate } from '../../../.storybook/utils'
import { Body } from '../../atoms'
import { InvalidNetworkBanner, InvalidNetworkBannerProps } from '.'

const storyConfig = {
  title: 'Design System/Molecules/InvalidNetworkBanner',
  component: InvalidNetworkBanner,
}

const Template = (props: InvalidNetworkBannerProps) =>
  withWeb3Provider(<Banner {...props} />)

const Banner = (props: InvalidNetworkBannerProps) => {
  const chainID = useChainID()

  if (!chainID) {
    return <Body>Please connect wallet to test this component</Body>
  }

  return <InvalidNetworkBanner chainID={chainID} {...props} />
}

export const Default = fromTemplate(Template, {
  supportedChainIDs: [CHAIN_ID_MAIN_NET],
})
export const CustonTitle = fromTemplate(Template, {
  supportedChainIDs: [CHAIN_ID_MAIN_NET],
  title:
    'Unsupported chain. Please switch to Etheruem Mainnet or Polygon in your wallet.',
})

export default storyConfig
