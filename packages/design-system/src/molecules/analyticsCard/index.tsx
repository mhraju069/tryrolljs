import { StyleProp, View, ViewStyle } from 'react-native'
import { Icon, IconVariant, TypographyV2 } from '../../atoms'
import { useThemeV2 } from '../../hooks'
import { container, makeStyles, margin, padding } from '../../styles'

const ANALYTICS_CARD_MAX_WIDTH = 254
const ANALYTICS_CARD_MIN_HEIGHT = 125
const ANALYTICS_CARD_BORDER_RADIUS = 16

const styles = makeStyles({
  container: {
    maxWidth: ANALYTICS_CARD_MAX_WIDTH,
    minHeight: ANALYTICS_CARD_MIN_HEIGHT,
    borderRadius: ANALYTICS_CARD_BORDER_RADIUS,
  },
  iconContainer: {
    borderRadius: 24,
  },
})

export interface AnalyticsCardProps {
  title: string
  iconVariant: IconVariant
  value: string
  change: number
  changeHint: string
  style?: StyleProp<ViewStyle>
}

export const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  title,
  iconVariant,
  value,
  change,
  changeHint,
  style,
}) => {
  const theme = useThemeV2()
  const isSuccessful = change >= 0
  return (
    <View
      style={[
        padding.pv16,
        padding.ph24,
        styles.container,
        { backgroundColor: theme.background.white },
        style,
      ]}
    >
      <View style={[container.row, container.alignCenter]}>
        <View
          style={[
            styles.iconContainer,
            padding.p4,
            margin.mr8,
            { backgroundColor: theme.base.highlight2[20] },
          ]}
        >
          <Icon variant={iconVariant} color={theme.text.black[100]} />
        </View>
        <TypographyV2 variant="caption2">{title}</TypographyV2>
      </View>
      <TypographyV2
        style={margin.mt12}
        variant="sub2"
        color={theme.text.black[100]}
      >
        {value}
      </TypographyV2>
      <View style={[container.row, margin.mt12, container.alignCenter]}>
        <View style={[container.row, margin.mr16, container.alignCenter]}>
          <Icon
            variant={isSuccessful ? 'arrowUp' : 'arrowDown'}
            color={isSuccessful ? theme.base.success : theme.base.danger}
          />
          <TypographyV2
            variant="text4"
            color={isSuccessful ? theme.base.success : theme.base.danger}
          >
            {change}%
          </TypographyV2>
        </View>

        <TypographyV2 variant="text4" color={theme.text.black[30]}>
          {changeHint}
        </TypographyV2>
      </View>
    </View>
  )
}
