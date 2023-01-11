import { SwapWidget, SwapWidgetProps } from '@uniswap/widgets'
import { useWebSocketProvider } from '../../hooks/web3New'
import '@uniswap/widgets/fonts.css'

// Default token list from Uniswap
const UNISWAP_TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'

// Use the native token of the connected chain as the default input token
const NATIVE = 'NATIVE' // Special address for native token

export const UniswapWidget: React.FC<SwapWidgetProps> = (props) => {
  const web3Provider = useWebSocketProvider()

  return (
    <SwapWidget
      provider={web3Provider}
      tokenList={UNISWAP_TOKEN_LIST}
      defaultInputTokenAddress={NATIVE}
      {...props}
    />
  )
}
