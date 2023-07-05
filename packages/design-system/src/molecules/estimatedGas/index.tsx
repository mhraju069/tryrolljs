import { StyleProp, View, ViewStyle } from 'react-native'
import { container, margin, spacing } from '../../styles'
import { useThemeV2 } from '../../hooks'
import { CircleImg, TypographyV2, Icon } from '../../atoms'

export interface EstimatedGasProps {
  label: string
  gas: string
  style?: StyleProp<ViewStyle>
  logo?: string
  symbol?: string
}

export const EstimatedGas: React.FC<EstimatedGasProps> = ({
  label,
  gas,
  style,
  logo,
  symbol,
}) => {
  const theme = useThemeV2()

  return (
    <View style={style}>
      <View style={[container.row, container.alignCenter, margin.mb4]}>
        <Icon
          variant="gasStation"
          color={theme.base.highlight1}
          width={spacing[16]}
        />
        <TypographyV2
          style={margin.ml8}
          variant="text3"
          color={theme.base.highlight1}
        >
          {label}
        </TypographyV2>
      </View>
      <View style={[container.row, container.alignCenter]}>
        <TypographyV2 variant="text3" color={theme.text.black[100]}>
          {gas}
        </TypographyV2>
        <CircleImg style={margin.mh4} uri={logo} size={16} />
        <TypographyV2 variant="text3" color={theme.text.black[100]}>
          {symbol}
        </TypographyV2>
      </View>
    </View>
  )
}
