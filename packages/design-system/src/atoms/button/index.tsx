import { Pressable } from 'native-base'
import { useState } from 'react'
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { container, makeStyles, padding, text } from '../../styles'
import { Body } from '../typography'
import { button, buttonGradient, buttonText } from './styles'

export type ButtonType = 'primary' | 'secondary' | 'minimal' | 'disabled'

export type ButtonProps = {
  style?: StyleProp<ViewStyle>
  touchableOpacityStyle?: StyleProp<ViewStyle>
  type: ButtonType
  title?: string
  onPress?: (e?: GestureResponderEvent) => void
  isHovering?: boolean | undefined
}

const styles = makeStyles({
  container: {
    borderRadius: 50,
    maxWidth: 600,
    minWidth: 100,
    height: 48,
  },
})

const getHoverStyles = (type: ButtonType) => {
  return {
    container: button[`${type}Hover`],
    text: buttonText[`${type}Hover`],
  }
}

const getBaseStyles = (type: ButtonType) => {
  return {
    container: button[type],
    text: buttonText[type],
  }
}

export const Button: React.FC<ButtonProps> = ({
  title,
  children,
  onPress,
  style,
  touchableOpacityStyle,
  type,
}) => {
  const [isHover, setIsHover] = useState(false)

  const baseGradient = buttonGradient[type]
  const baseStyles = getBaseStyles(type)

  const hoverGradient = buttonGradient[`${type}Hover`]
  const hoverStyles = getHoverStyles(type)

  const gradient = (isHover ? hoverGradient : baseGradient) ?? []

  return (
    <LinearGradient
      style={[
        styles.container,
        baseStyles.container,
        isHover && hoverStyles.container,
        style,
      ]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      colors={gradient}
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
        disabled={type === 'disabled'}
        onHoverIn={() => setIsHover(true)}
        onHoverOut={() => setIsHover(false)}
      >
        {title ? (
          <Body
            weight="bold"
            style={[baseStyles.text, isHover && hoverStyles.text, text.center]}
            color={baseStyles.text.color}
          >
            {title}
          </Body>
        ) : (
          children
        )}
      </Pressable>
    </LinearGradient>
  )
}
