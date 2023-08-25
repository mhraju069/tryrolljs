import { Pressable } from '@gluestack-ui/react'
import { PropsWithChildren, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { container, makeStyles, padding, text } from '../../styles'
import { Body } from '../typography'
import type { ButtonProps } from './types'
import { getColors } from './styles'

const styles = makeStyles({
  container: {
    borderRadius: 50,
    maxWidth: 600,
    minWidth: 100,
    height: 48,
  },
})

export const Button = ({
  title,
  children,
  onPress,
  style,
  touchableOpacityStyle,
  variant = 'primary',
  inverted,
  disabled,
}: PropsWithChildren<ButtonProps>) => {
  const [isHover, setIsHover] = useState(false)

  const colors = getColors({ disabled, variant, inverted })

  return (
    <LinearGradient
      style={[
        styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          borderWidth: colors.borderColor ? 1 : 0,
          borderColor: colors.borderColor,
        },
        style,
      ]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      colors={
        isHover ? colors.hover.backgroundGradient : colors.backgroundGradient
      }
    >
      <Pressable
        style={[
          container.fullHeight,
          padding.ph24,
          container.fullWidth,
          container.center,
          touchableOpacityStyle,
        ]}
        onPress={onPress}
        disabled={disabled}
        onHoverIn={() => setIsHover(true)}
        onHoverOut={() => setIsHover(false)}
      >
        {title ? (
          <Body weight="bold" style={[text.center]} color={colors.text}>
            {title}
          </Body>
        ) : (
          children
        )}
      </Pressable>
    </LinearGradient>
  )
}
