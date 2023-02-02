import { Pressable, View } from 'react-native'
import Menu from '../../assets/svg/menu.svg'
import { ButtonV2 } from '../../atoms/buttonV2'
import { useThemeV2 } from '../../hooks'
import { container, margin, padding } from '../../styles'
import { HeaderProps } from './types'

export const MobileHeader: React.FC<HeaderProps> = ({
  logo,
  withConnectWallet = false,
}) => {
  const theme = useThemeV2()
  return (
    <View
      style={[
        container.row,
        container.alignCenter,
        container.justifySpaceBetween,
        padding.pv8,
        padding.ph20,
        { backgroundColor: theme.background.white },
      ]}
    >
      {logo}
      <View style={[container.row, container.alignCenter]}>
        {withConnectWallet && (
          <ButtonV2 size="small" variant="tertiary" title="Connect" />
        )}
        <Pressable style={[margin.ml16]}>
          <Menu />
        </Pressable>
      </View>
    </View>
  )
}
