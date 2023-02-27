import { useState } from 'react'
import { View } from 'react-native'
import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import { ConnectWeb3OptionsWagmi } from '../connectWeb3OptionsWagmi'
import { Web3ProviderWagmi } from '../../providers'
import { CHAIN_ID_MAIN_NET } from '../../web3'
import { ConnectWeb3ButtonWagmi } from '../connectWeb3ButtonWagmi'
import { WalletInfo } from '.'

const storyConfig = {
  title: titleBuilder.molecules('WalletInfo'),
  component: WalletInfo,
}

const Template = () => {
  const [showOptions, setShowOptions] = useState(false)
  return (
    <Web3ProviderWagmi
      supportedChainIds={[CHAIN_ID_MAIN_NET]}
      wallectConnectProjectId={process.env.WALLET_CONNECT_PROJECT_ID}
    >
      <ConnectWeb3ButtonWagmi
        onPress={() => {
          setShowOptions(true)
        }}
      />
      <View style={{ maxWidth: 300 }}>
        <WalletInfo />
      </View>
      {showOptions && (
        <ConnectWeb3OptionsWagmi onClose={() => setShowOptions(!showOptions)} />
      )}
    </Web3ProviderWagmi>
  )
}

export const Default = fromTemplate(Template, {})

export default storyConfig
