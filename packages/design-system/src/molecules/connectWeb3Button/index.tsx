import { AbstractConnector } from '@web3-react/abstract-connector'
import { StyleProp, ViewStyle } from 'react-native'
import { useState } from 'react'
import { Body, Button } from '../..'
import { Spinner } from '../../atoms'
import { shortenAddress } from '../../utils/web3'
import { useEthAddress } from '../../hooks/web3'
import { Dropdown } from '../dropdown'
import { AccountDropdown } from '../accountDropdown'

export type HandleWeb3Connect = (c: AbstractConnector) => void

type Props = {
  buttonStyle?: StyleProp<ViewStyle> // TODO define type properly
  onPress: () => void
  activity?: boolean
}

export const ConnectWeb3Button = ({
  buttonStyle,
  onPress,
  activity,
}: Props) => {
  const address = useEthAddress()
  const [mouseInA, setMouseInA] = useState(false)
  const [mouseInB, setMouseInB] = useState(false)

  if (activity) {
    return (
      <div className="flex items-center h-full w-28 p-2">
        <Spinner />
      </div>
    )
  }

  if (address) {
    return (
      <Dropdown
        alignLeft
        onMouseEnter={() => setMouseInB(true)}
        onMouseLeave={() => setMouseInB(false)}
        open={mouseInA || mouseInB}
        renderDropdown={() => (
          <AccountDropdown
            onSwitchAccounts={() => {
              setMouseInB(false)
              onPress()
            }}
          />
        )}
      >
        <div
          onMouseEnter={() => setMouseInA(true)}
          onMouseLeave={() => setMouseInA(false)}
          className="flex h-8 self-center items-center bg-gray-200 p-2 rounded-lg"
        >
          <Body>{shortenAddress(address)}</Body>
        </div>
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
