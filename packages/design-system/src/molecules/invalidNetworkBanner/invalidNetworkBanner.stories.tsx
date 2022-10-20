import { titleBuilder } from '../../../.storybook/utils'
import { Body } from '../../atoms'
import { useChainID } from '../../hooks'
import { withWeb3Provider } from '../../hoc'
import { CHAIN_ID_MAIN_NET } from '../../web3'
import { InvalidNetworkBanner } from '.'

const storyConfig = {
  title: titleBuilder.molecules('InvalidNetworkBanner'),
  component: InvalidNetworkBanner,
}

export const Default = () => withWeb3Provider(<Banner />)

const Banner = () => {
  const chainID = useChainID()

  if (!chainID) {
    return <Body>Please connect wallet to test this component</Body>
  }

  return (
    <InvalidNetworkBanner
      supportedChainIDs={[CHAIN_ID_MAIN_NET]}
      validChainID={CHAIN_ID_MAIN_NET}
      chainID={10}
    />
  )
}

export default storyConfig
