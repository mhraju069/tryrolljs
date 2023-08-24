import { View } from 'react-native'
import { ButtonV2 } from '../../atoms'
import { container, margin, padding } from '../../styles'
import { isLast } from '../../utils'
import { Web3Button } from '../web3Button'
import { HeaderProps } from './types'

export const DesktopHeader = ({
  logo,
  options,
  suffix,
  withConnectWallet = false,
}: HeaderProps) => {
  const hasMarginRight = !!suffix?.desktop || withConnectWallet
  return (
    <View
      style={[
        padding.ph40,
        padding.pv24,
        container.row,
        container.alignCenter,
        container.justifySpaceBetween,
      ]}
    >
      {logo.desktop}
      <View style={[container.row, container.alignCenter]}>
        {options.map((option, index) => {
          return (
            <View
              style={[
                (!isLast(index, options) || hasMarginRight) && margin.mr24,
              ]}
            >
              <ButtonV2
                size="medium"
                variant="text"
                title={option.title}
                onPress={option.onPress}
              />
            </View>
          )
        })}
        {suffix?.desktop}
        {!suffix?.desktop && withConnectWallet && <Web3Button />}
      </View>
    </View>
  )
}
