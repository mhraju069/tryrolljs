import { View } from 'native-base'
import { useCallback } from 'react'
import { Body } from '../../atoms'
import { useTheme, useChainID } from '../../hooks'
import { container, padding } from '../../styles'
import { SUPPORTED_CHAIN_IDS } from '../../web3'

type Props = {
  title?: string
  supportedChainIDs?: number[]
  chainID?: number
  validChainID: number
}

const changeNetwork = async (chainID: number) => {
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
) =>
  supportedChainIDs.findIndex(
    (supportedChainID) => supportedChainID === chainID,
  ) !== -1

export const InvalidNetworkBanner = ({
  title,
  supportedChainIDs = SUPPORTED_CHAIN_IDS,
  validChainID,
}: Props) => {
  const theme = useTheme()
  const chainID = useChainID()

  const handleNetworkChange = useCallback(() => {
    changeNetwork(validChainID)
  }, [validChainID])

  if (!chainID || isSupportedNetwork(supportedChainIDs, chainID)) {
    return null
  }

  return (
    <View
      style={[
        container.row,
        container.justifyCenter,
        padding.p16,
        { backgroundColor: theme.background.error },
      ]}
    >
      <Body weight="bold" color={theme.text.error}>
        {title ? title : 'You are connected to the wrong network.'}
        &nbsp;
      </Body>
      <Body onPress={handleNetworkChange} underline color={theme.text.error}>
        Click here to change network
      </Body>
    </View>
  )
}
