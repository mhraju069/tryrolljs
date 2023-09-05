import { View, StyleSheet } from 'react-native'
import { ButtonV2, TypographyV2 } from '../../atoms'
import { useThemeV2 } from '../../hooks'
import { container, margin, padding } from '../../styles'

export interface JoinBannerProps {
  title: string
  description: string
  action: {
    title: string
    onPress: () => void
  }
}

const MAX_BANNER_WIDTH = 200
const CIRCLE_BACKGROUND_COLOR = '#FFE9DF'
const CIRCLE_SIZE = 80

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'relative',
  },
  circle: {
    borderRadius: CIRCLE_SIZE,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    position: 'absolute',
    bottom: -32,
    right: -10,
    backgroundColor: CIRCLE_BACKGROUND_COLOR,
  },
})

export const JoinBanner: React.FC<JoinBannerProps> = ({
  title,
  description,
  action,
}) => {
  const theme = useThemeV2()
  return (
    <View
      style={[
        styles.container,
        padding.ph16,
        padding.pv16,
        container.borderRadius2XL,
        container.fullWidth,
        container.alignStart,
        {
          backgroundColor: theme.base.highlight2[40],
          maxWidth: MAX_BANNER_WIDTH,
        },
      ]}
    >
      <View style={[styles.circle]} />
      <TypographyV2 variant="caption1" style={[margin.mb4]}>
        {title}
      </TypographyV2>
      <TypographyV2 variant="text4" style={[margin.mb16]}>
        {description}
      </TypographyV2>
      <ButtonV2
        variant="primary"
        size="small"
        title={action.title}
        onPress={action.onPress}
      />
    </View>
  )
}
