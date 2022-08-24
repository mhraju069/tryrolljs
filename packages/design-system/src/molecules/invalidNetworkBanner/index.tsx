import { Body, useTheme } from '../..'
import { useChainID } from '../../hooks/web3'
import { SUPPORTED_CHAIN_IDS } from '../../web3Connectors'

type Props = {
  title?: string
  supportedChainIDs?: number[]
  chainID?: number
  validChainID: number
}

const handleChangeNetwork = async (chainID: number) => {
  // @ts-ignore
  const { ethereum } = window
  if (ethereum && ethereum.request) {
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainID}` }],
      })
    } catch (err) {
      console.log(err)
    }
  }
}

const isSupportedNetwork = (
  supportedChainIDs: number[],
  chainID: number | undefined,
) => supportedChainIDs.findIndex((val) => val === chainID) !== -1

export const InvalidNetworkBanner = ({
  title,
  supportedChainIDs = SUPPORTED_CHAIN_IDS,
  validChainID,
}: Props) => {
  const theme = useTheme()
  const chainID = useChainID()

  // only render element if connected to a network && network is invalid
  if (!chainID || isSupportedNetwork(supportedChainIDs, chainID)) return null

  return (
    <div
      className="flex justify-center p-6"
      style={{ backgroundColor: theme.background.error }}
    >
      <Body weight="bold" color={theme.text.error}>
        {title ? `${title} ` : 'You are connected to the wrong network. '}
      </Body>
      <Body
        onPress={() => handleChangeNetwork(validChainID)}
        underline
        color={theme.text.error}
      >
        Click here to change network
      </Body>
    </div>
  )
}
