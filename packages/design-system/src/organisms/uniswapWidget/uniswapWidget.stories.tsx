import { useState } from 'react'
import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import { ConnectWeb3OptionsNew } from '../../molecules/connectWeb3OptionsNew'
import { Web3ProviderNew } from '../../providers'
import { CHAIN_ID_MAIN_NET } from '../../web3'
import { ConnectWeb3ButtonNew } from '../../molecules/connectWeb3ButtonNew'
import { UniswapWidget } from '.'

const storyConfig = {
  title: titleBuilder.organisms('UniswapWidget'),
  component: UniswapWidget,
}

const Template = () => {
  const [showOptions, setShowOptions] = useState(false)
  return (
    <Web3ProviderNew
      supportedChainIds={[CHAIN_ID_MAIN_NET]}
      wallectConnectProjectId="b49bc876391bc029b19959a66a911b80"
    >
      <ConnectWeb3ButtonNew
        onPress={() => {
          setShowOptions(true)
        }}
      />
      {showOptions && (
        <ConnectWeb3OptionsNew onClose={() => setShowOptions(!showOptions)} />
      )}
      <UniswapWidget
        jsonRpcUrlMap={{
          [CHAIN_ID_MAIN_NET]:
            'https://c411178e57bb4a98859e1a424d0840a5.eth.rpc.rivet.cloud',
        }}
      />
    </Web3ProviderNew>
  )
}

export const Default = fromTemplate(Template, {})

export default storyConfig
