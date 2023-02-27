import { GestureResponderEvent } from 'react-native'
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
  variant: Variant
  size: Size
  title: string
  isDisabled?: boolean
  isLoading?: boolean
  onPress?: (e?: GestureResponderEvent) => void
  icon?: React.ReactNode
  iconVariant?: IconVariant
  iconColor?: string
  iconBackgroundColor?: string
}

type States = 'rest' | 'hover' | 'active' | 'disabled'
export type StateVariantProps = {
  borderWidth: number
  borderColor: string
  backgroundColor: string
  textColor: string
}
export type VariantProps = Record<States, StateVariantProps>

export interface SizeProps {
  paddingHorizontal: number
  paddingVertical: number
  textSize: number
  borderRadius: number
}

export type BaseButtonProps = VariantProps & SizeProps & ButtonV2Props
