import { useState } from 'react'
import { Web3ProviderWagmi, CHAIN_ID_MAIN_NET } from '@roll-network/web3'
import { fromTemplate } from '../../../.storybook/utils'
import {
  ConnectWeb3ButtonWagmi,
  ConnectWeb3OptionsWagmi,
} from '../../molecules'
import { UniswapWidget } from './index'

const storyConfig = {
  title: 'Design System/Organisms/UniswapWidget',
  component: UniswapWidget,
}

const Template = () => {
  const [showOptions, setShowOptions] = useState(false)
  return (
    <Web3ProviderWagmi
      variant="web3Modal"
      supportedChainIds={[CHAIN_ID_MAIN_NET]}
      walletConnectProjectId={process.env.WALLET_CONNECT_PROJECT_ID as string}
    >
      <ConnectWeb3ButtonWagmi
        onPress={() => {
          setShowOptions(true)
        }}
      />
      {showOptions && (
        <ConnectWeb3OptionsWagmi onClose={() => setShowOptions(!showOptions)} />
      )}
      <UniswapWidget
        jsonRpcUrlMap={{
          [CHAIN_ID_MAIN_NET]: process.env.MAINNET_JSON_RPC_URL ?? '',
        }}
      />
    </Web3ProviderWagmi>
  )
}

export const Default = fromTemplate(Template, {})

export default storyConfig
