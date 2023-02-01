import { useState } from 'react'
import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import { ConnectWeb3OptionsWagmi } from '../connectWeb3OptionsWagmi'
import { Web3ProviderWagmi } from '../../providers'
import { CHAIN_ID_MAIN_NET } from '../../web3'
import { ConnectWeb3ButtonWagmi, ConnectWeb3ButtonWagmiProps } from '.'

const storyConfig = {
  title: titleBuilder.molecules('ConnectWeb3ButtonWagmi'),
  component: ConnectWeb3ButtonWagmi,
}

const Template = (props: ConnectWeb3ButtonWagmiProps) => {
  const [showOptions, setShowOptions] = useState(false)
  return (
    <Web3ProviderWagmi
      supportedChainIds={[CHAIN_ID_MAIN_NET]}
      wallectConnectProjectId={process.env.WALLET_CONNECT_PROJECT_ID}
    >
      <ConnectWeb3ButtonWagmi
        {...props}
        onPress={() => {
          props.onPress?.()
          setShowOptions(true)
        }}
      />
      {showOptions && (
        <ConnectWeb3OptionsWagmi onClose={() => setShowOptions(!showOptions)} />
      )}
    </Web3ProviderWagmi>
  )
}

export const Default = fromTemplate(Template, {})
export const Loading = fromTemplate(Template, { activity: true })

export default storyConfig
