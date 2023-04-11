import { Pressable, StyleSheet, View } from 'react-native'
import { Icon, TypographyV2 } from '../../atoms'
import { useThemeV2 } from '../../hooks'
import { container, margin, padding } from '../../styles'

const FEATURE_CARD_MAX_WIDTH = 320
const FEATURE_CARD_MIN_HEIGHT = 192
const FEATURE_CARD_BORDER_RADIUS = 16

const styles = StyleSheet.create({
  container: {
    maxWidth: FEATURE_CARD_MAX_WIDTH,
    minHeight: FEATURE_CARD_MIN_HEIGHT,
    borderRadius: FEATURE_CARD_BORDER_RADIUS,
  },
})

export interface FeatureCardProps {
  title: string
  description: string
  image: React.ReactNode
  onPress?: () => void
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  onPress,
}) => {
  const theme = useThemeV2()
  return (
    <View
      style={[
        padding.pt24,
        padding.ph24,
        padding.pb16,
        styles.container,
        { backgroundColor: theme.background.white },
      ]}
    >
      <View style={[margin.mb16]}>{image}</View>
      <TypographyV2 variant="sub3" color={theme.text.black[100]}>
        {title}
      </TypographyV2>
      <View style={[container.flex1]}>
        <TypographyV2 variant="text4" color={theme.text.black[80]}>
          {description}
        </TypographyV2>
      </View>
      <Pressable onPress={onPress} testID="cta">
        <Icon variant="arrowRight2" />
      </Pressable>
    </View>
  )
}
