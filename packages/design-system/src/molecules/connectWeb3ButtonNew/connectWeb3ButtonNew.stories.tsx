import { useState } from 'react'
import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import { ConnectWeb3OptionsNew } from '../connectWeb3OptionsNew'
import { Web3ProviderNew } from '../../providers'
import { CHAIN_ID_MAIN_NET } from '../../web3'
import { ConnectWeb3ButtonNew, ConnectWeb3ButtonNewProps } from '.'

const storyConfig = {
  title: titleBuilder.molecules('ConnectWeb3ButtonNew'),
  component: ConnectWeb3ButtonNew,
}

const Template = (props: ConnectWeb3ButtonNewProps) => {
  const [showOptions, setShowOptions] = useState(false)
  return (
    <Web3ProviderNew
      supportedChainIds={[CHAIN_ID_MAIN_NET]}
      wallectConnectProjectId="b49bc876391bc029b19959a66a911b80"
    >
      <ConnectWeb3ButtonNew
        {...props}
        onPress={() => {
          props.onPress?.()
          setShowOptions(true)
        }}
      />
      {showOptions && (
        <ConnectWeb3OptionsNew onClose={() => setShowOptions(!showOptions)} />
      )}
    </Web3ProviderNew>
  )
}

export const Default = fromTemplate(Template, {})
export const Loading = fromTemplate(Template, { activity: true })

export default storyConfig
