import { View } from 'react-native'
import { ButtonV2, CircleImg } from '../../atoms'
import { TypographyV2 } from '../../atoms/typographyV2'
import {
  useClipboardWithToast,
  useWagmiActiveConnector,
  useWagmiEthAddress,
  useWagmiChainID,
} from '../../hooks'
import { container, margin } from '../../styles'
import { getEtherscanLink, openLink, shortenAddress } from '../../utils'

const AVATAR_SIZE = 40

export const WalletInfo: React.FC = () => {
  const activeConnector = useWagmiActiveConnector()
  const userAddress = useWagmiEthAddress()
  const chainId = useWagmiChainID()
  const shortAddress = userAddress ? shortenAddress(userAddress) : ''
  const clipboardWithToast = useClipboardWithToast()

  const onPressCopyAddress = () => {
    if (!userAddress) return
    clipboardWithToast(userAddress)
  }

  const onPressEtherscanLink = () => {
    if (!userAddress || !chainId) return
    const etherscanLink = getEtherscanLink({
      address: userAddress,
      type: 'address',
      chainId,
    })
    openLink(etherscanLink, true)
  }

  if (!shortAddress) return null

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
          testID="copyIcon"
          iconVariant="copy"
          size="small"
          variant="icon"
          title=""
          onPress={onPressCopyAddress}
        />
      </View>
      <ButtonV2
        testID="etherscanIcon"
        iconVariant="external"
        size="small"
        variant="icon"
        title=""
        onPress={onPressEtherscanLink}
      />
    </View>
  )
}
