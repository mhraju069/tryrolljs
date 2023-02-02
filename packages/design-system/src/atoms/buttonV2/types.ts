import { GestureResponderEvent } from 'react-native'

export type Variant = 'primary' | 'secondary' | 'tertiary' | 'text' | 'icon'
export type Size = 'xsmall' | 'small' | 'medium' | 'large'

export interface ButtonV2Props {
  variant: Variant
  size: Size
  title: string
  isDisabled?: boolean
  isLoading?: boolean
  onPress?: (e?: GestureResponderEvent) => void
  icon?: React.ReactNode
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
