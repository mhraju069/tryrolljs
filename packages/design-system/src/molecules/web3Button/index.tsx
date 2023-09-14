import { Pressable, View } from 'react-native'
import {
  useWagmiEthAddress,
  shortenAddress,
  useWeb3Modal,
  useDisconnect,
} from '@roll-network/web3'
import {
  ButtonV2,
  CircleImg,
  Icon,
  ButtonV2Props,
  TypographyV2,
} from '../../atoms'
import { WalletInfo } from '../walletInfo'
import { margin } from '../../styles'
import { useThemeV2 } from '../../hooks'

export interface Web3ButtonProps extends Partial<ButtonV2Props> {
  connectedVariant?: 'button' | 'avatar' | 'details'
}

export const Web3Button: React.FC<Web3ButtonProps> = ({
  connectedVariant = 'button',
  ...buttonProps
}) => {
  const { isOpen, open } = useWeb3Modal()
  const userAddress = useWagmiEthAddress()
  const { disconnect } = useDisconnect()
  const theme = useThemeV2()

  const handleConnect = async () => {
    if (isOpen) return
    await open({
      route: userAddress ? 'Account' : 'ConnectWallet',
    })
  }

  const handleDisconnect = () => {
    disconnect()
  }

  const title = userAddress ? shortenAddress(userAddress) : 'Connect Wallet'
  const icon = userAddress ? <CircleImg size={16} /> : <Icon variant="wallet" />

  if (userAddress && connectedVariant === 'avatar') {
    return (
      <Pressable onPress={handleConnect}>
        <CircleImg size={40} />
      </Pressable>
    )
  }

  if (userAddress && connectedVariant === 'details') {
    return (
      <View>
        <TypographyV2 variant="caption2" color={theme.text.black[30]}>
          Account
        </TypographyV2>
        <View style={[margin.mv8]}>
          <WalletInfo />
        </View>
        <TypographyV2
          variant="caption2"
          color={theme.base.danger}
          onPress={handleDisconnect}
        >
          Disconnect
        </TypographyV2>
      </View>
    )
  }

  return (
    <ButtonV2
      size="small"
      variant="tertiary"
      {...buttonProps}
      title={title}
      icon={icon}
      disabled={isOpen}
      onPress={handleConnect}
    />
  )
}
