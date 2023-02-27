import { useClipboard } from 'native-base'
import { useCallback } from 'react'
import { View } from 'react-native'
import { ButtonV2, CircleImg, Toast } from '../../atoms'
import { TypographyV2 } from '../../atoms/typographyV2'
import {
  useActiveConnector,
  useChainID,
  useEthAddress,
} from '../../hooks/web3Wagmi'
import { container, margin } from '../../styles'
import { getEtherscanLink, openLink, shortenAddress } from '../../utils'

const AVATAR_SIZE = 40

export const WalletInfo: React.FC = () => {
  const activeConnector = useActiveConnector()
  const userAddress = useEthAddress()
  const chainId = useChainID()
  const shortAddress = shortenAddress(userAddress || '')
  const { onCopy } = useClipboard()

  const handleCopy = useCallback(async () => {
    await onCopy(userAddress || '')
    Toast.show({
      title: 'Copied to clipboard',
      variant: 'success',
    })
  }, [userAddress, onCopy])

  const handleRedirect = useCallback(() => {
    if (!chainId || !userAddress) return
    const link = getEtherscanLink({
      chainId,
      address: userAddress,
      type: 'address',
    })
    openLink(link, true)
  }, [chainId, userAddress])

  return (
    <View style={[container.row, container.alignCenter]}>
      <CircleImg size={AVATAR_SIZE} />
      <View style={[margin.mr40, margin.ml16]}>
        <TypographyV2 variant="caption2">{shortAddress}</TypographyV2>
        {activeConnector?.name && (
          <TypographyV2 variant="text4">{activeConnector.name}</TypographyV2>
        )}
      </View>
      <View style={[margin.mr8]}>
        <ButtonV2
          namedIcon="copy"
          size="small"
          variant="icon"
          title=""
          onPress={handleCopy}
        />
      </View>
      <ButtonV2
        namedIcon="external"
        size="small"
        variant="icon"
        title=""
        onPress={handleRedirect}
      />
    </View>
  )
}
