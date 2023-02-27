import { StyleSheet, View } from 'react-native'
import { ButtonV2 } from '../../atoms'
import { container, margin, padding } from '../../styles'
import { isLast } from '../../utils'
import { HeaderProps } from './types'

const styles = StyleSheet.create({
  mainContainer: {},
})

export const DesktopHeader = ({
  logo,
  options,
  withConnectWallet = false,
}: HeaderProps) => {
  return (
    <View
      style={[
        padding.ph40,
        padding.pv24,
        container.row,
        container.alignCenter,
        container.justifySpaceBetween,
        styles.mainContainer,
      ]}
    >
      {logo.desktop}
      <View style={[container.row, container.alignCenter]}>
        {options.map((option, index) => {
          return (
            <View
              style={[
                (!isLast(index, options) || withConnectWallet) && margin.mr24,
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
        {withConnectWallet && (
          <ButtonV2 size="small" variant="tertiary" title="Connect Wallet" />
        )}
      </View>
    </View>
  )
}
