import { StyleProp, ViewStyle, View } from 'react-native'
import {
  AbstractConnector,
  useWagmiEthAddress,
  shortenAddress,
} from '@roll-network/web3'
import { Body, Button, Spinner } from '../../atoms'
import { useTheme } from '../../hooks'
import { container, padding } from '../../styles'
import { Dropdown } from '../dropdown'
import { AccountDropdownWagmi } from '../accountDropdownWagmi'

export type HandleWeb3ConnectWagmi = (c: AbstractConnector) => void

export type ConnectWeb3ButtonWagmiProps = {
  variant?: 'walletConnect'
  buttonStyle?: StyleProp<ViewStyle>
  onPress: () => void
  activity?: boolean
}

export const ConnectWeb3ButtonWagmi = ({
  buttonStyle,
  onPress,
  activity,
}: ConnectWeb3ButtonWagmiProps) => {
  const address = useWagmiEthAddress()
  const theme = useTheme()
  if (activity) {
    return (
      <View
        style={[
          container.alignCenter,
          container.justifyCenter,
          container.fullHeight,
          padding.p4,
        ]}
      >
        <Spinner />
      </View>
    )
  }

  if (address) {
    return (
      <Dropdown
        renderDropdown={() => (
          <AccountDropdownWagmi onSwitchAccounts={onPress} />
        )}
      >
        <View
          style={[
            container.row,
            padding.p8,
            container.borderRadius,
            { backgroundColor: theme.background.page },
          ]}
        >
          <Body>{shortenAddress(address)}</Body>
        </View>
      </Dropdown>
    )
  }
  return (
    <Button
      style={buttonStyle}
      variant="primary"
      title="Connect Wallet"
      onPress={onPress}
    />
  )
}
