import { useState } from 'react'
import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import { ConnectWeb3OptionsWagmi } from '../../molecules/connectWeb3OptionsWagmi'
import { Web3ProviderWagmi } from '../../providers'
import { CHAIN_ID_MAIN_NET } from '../../web3'
import { ConnectWeb3ButtonWagmi } from '../../molecules/connectWeb3ButtonWagmi'
import { UniswapWidget } from '.'

const storyConfig = {
  title: titleBuilder.organisms('UniswapWidget'),
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
