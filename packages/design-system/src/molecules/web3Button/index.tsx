import { Pressable } from 'react-native'
import {
  useWagmiEthAddress,
  shortenAddress,
  useWeb3Modal,
} from '@roll-network/web3'
import { ButtonV2, CircleImg, Icon, ButtonV2Props } from '../../atoms'

export interface Web3ButtonProps extends Partial<ButtonV2Props> {
  connectedVariant?: 'button' | 'avatar' | 'details'
}

export const Web3Button: React.FC<Web3ButtonProps> = ({
  connectedVariant = 'button',
  ...buttonProps
}) => {
  const { isOpen, open } = useWeb3Modal()
  const userAddress = useWagmiEthAddress()

  const handleConnect = async () => {
    if (isOpen) return
    await open({
      route: userAddress ? 'Account' : 'ConnectWallet',
    })
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

  // TODO: add details variant once we have the component ready
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
