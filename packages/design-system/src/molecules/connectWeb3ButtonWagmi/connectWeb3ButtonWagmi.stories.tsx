import { useState } from 'react'
import { ConnectWeb3OptionsWagmi } from '../connectWeb3OptionsWagmi'
import { Web3ProviderWagmi } from '../../providers'
import { CHAIN_ID_MAIN_NET } from '../../web3'
import { ConnectWeb3ButtonWagmi, ConnectWeb3ButtonWagmiProps } from '.'

const storyConfig = {
  title: 'Design System/Molecules/ConnectWeb3ButtonWagmi',
  component: ConnectWeb3ButtonWagmi,
}

export const Default = (props: ConnectWeb3ButtonWagmiProps) => {
  const [showOptions, setShowOptions] = useState(false)
  return (
    <Web3ProviderWagmi
      variant="walletConnect"
      supportedChainIds={[CHAIN_ID_MAIN_NET]}
      walletConnectProjectId={process.env.WALLET_CONNECT_PROJECT_ID as string}
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

export default storyConfig
