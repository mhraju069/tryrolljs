import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import { Body } from '../../atoms'
import { useChainID } from '../../hooks'
import { withWeb3Provider } from '../../hoc'
import { CHAIN_ID_MAIN_NET } from '../../web3'
import { InvalidNetworkBanner, InvalidNetworkBannerProps } from '.'

const storyConfig = {
  title: titleBuilder.molecules('InvalidNetworkBanner'),
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
