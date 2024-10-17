import { View } from 'react-native'
import {
  TryrollProvider,
  TypographyV2,
  Web3Button,
} from '@roll-network/design-system'
import {
  CHAIN_ID_MAIN_NET,
  Web3ProviderWagmi,
  useWagmiEthAddress,
} from '@roll-network/web3'

function App() {
  return (
    <Web3ProviderWagmi
      variant="web3Modal"
      supportedChainIds={[CHAIN_ID_MAIN_NET]}
      walletConnectProjectId={
        import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID as string
      }
    >
      <TryrollProvider>
        <Entrypoint />
      </TryrollProvider>
    </Web3ProviderWagmi>
  )
}

const Entrypoint = () => {
  const address = useWagmiEthAddress()
  return (
    <View>
      <TypographyV2 variant="text3">Connected address: {address}</TypographyV2>
      <Web3Button />
    </View>
  )
}

export default App
