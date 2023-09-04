import { SwapWidget, SwapWidgetProps } from '@uniswap/widgets'
import { useWagmiEthersSigner } from '../../hooks'

// Default token list from Uniswap
const UNISWAP_TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'

const DEFAULT_INPUT_TOKEN_ADDRESS = 'NATIVE' // It's a magic keyword to use the native token of the chain you're connected to (ex. Ethereum -> ETH)

export const UniswapWidget = (props: SwapWidgetProps) => {
  const web3Provider = useWagmiEthersSigner()
  return (
    <SwapWidget
      provider={web3Provider?.provider}
      tokenList={UNISWAP_TOKEN_LIST}
      defaultInputTokenAddress={DEFAULT_INPUT_TOKEN_ADDRESS}
      {...props}
    />
  )
}
