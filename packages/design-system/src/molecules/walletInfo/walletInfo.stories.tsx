import { useState } from 'react'
import { View } from 'react-native'
import { fromTemplate } from '../../../.storybook/utils'
import { ConnectWeb3OptionsWagmi } from '../connectWeb3OptionsWagmi'
import { Web3ProviderWagmi } from '../../providers'
import { Web3Button } from '../web3Button'
import { WalletInfo } from '.'

const storyConfig = {
  title: 'Design System/Molecules/WalletInfo',
  component: WalletInfo,
}

const Template = () => {
  const [showOptions, setShowOptions] = useState(false)
  return (
    <Web3ProviderWagmi
      variant="web3Modal"
      walletConnectProjectId={process.env.WALLET_CONNECT_PROJECT_ID as string}
    >
      <Web3Button connectedVariant="button" />
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
