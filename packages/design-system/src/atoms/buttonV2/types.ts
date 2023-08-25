import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native'
import { IconVariant } from '../icon'
import { TypographyVariant } from '../typographyV2'

export type Variant = 'primary' | 'secondary' | 'tertiary' | 'text' | 'icon'
export type Size = 'xsmall' | 'small' | 'medium' | 'large'

export const fontsBasedOnSize: Record<Size, TypographyVariant> = {
  xsmall: 'caption2',
  small: 'buttonMedium',
  medium: 'buttonMedium',
  large: 'buttonLarge',
} as const

export const iconBasedOnSize: Record<Size, number> = {
  xsmall: 16,
  small: 16,
  medium: 20,
  large: 24,
} as const

export interface ButtonV2Props {
  testID?: string
  variant?: Variant
  size?: Size
  title: string
  tooltip?: string
  disabled?: boolean
  loading?: boolean
  active?: boolean
  onPress?: (e?: GestureResponderEvent) => void
  icon?: React.ReactNode
  iconVariant?: IconVariant
  iconColor?: string
  iconBackgroundColor?: string
  style?: StyleProp<ViewStyle>
  textColor?: string
}

type State = 'idle' | 'hover' | 'active' | 'disabled'
export type StyleByStateProps = {
  state: Record<
    State,
    {
      borderWidth: number
      borderColor: string
      backgroundColor: string
      textColor: string
    }
  >
}

export interface SizeProps {
  paddingHorizontal: number
  paddingVertical: number
  textSize: number
  borderRadius: number
}

export type BaseButtonProps = StyleByStateProps & SizeProps & ButtonV2Props
