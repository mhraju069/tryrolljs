import { AbstractConnector } from '@web3-react/abstract-connector'
import { StyleProp, ViewStyle } from 'react-native'
import { View } from 'native-base'
import { Body, Button, Spinner } from '../../atoms'
import { useTheme } from '../../hooks'
import { shortenAddress } from '../../utils/web3'
import { useEthAddress } from '../../hooks/web3'
import { containers, padding } from '../../styles'
import { Dropdown } from '../dropdown'
import { AccountDropdown } from '../accountDropdown'

export type HandleWeb3Connect = (c: AbstractConnector) => void

export type ConnectWeb3ButtonProps = {
  buttonStyle?: StyleProp<ViewStyle> // TODO define type properly
  onPress: () => void
  activity?: boolean
}

export const ConnectWeb3Button = ({
  buttonStyle,
  onPress,
  activity,
}: ConnectWeb3ButtonProps) => {
  const address = useEthAddress()
  const theme = useTheme()

  if (activity) {
    return (
      <View
        style={[
          containers.alignCenter,
          containers.justifyCenter,
          containers.fullHeight,
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
          <AccountDropdown
            onSwitchAccounts={() => {
              onPress()
            }}
          />
        )}
      >
        <View
          style={[
            containers.row,
            padding.p8,
            containers.borderRadius,
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
      type="primary"
      title="Connect Wallet"
      onPress={onPress}
    />
  )
}
