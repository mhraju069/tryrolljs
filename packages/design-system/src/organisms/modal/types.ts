import type { ViewProps, PressableProps } from 'react-native'
import type { ReactNode } from 'react'

export interface ModalProps extends ViewProps {
  isOpen?: boolean
  children: ReactNode
  testID?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'full'
  onClose?: () => void
  avoidKeyboard?: boolean
}

export interface ModalContentProps extends ViewProps {
  children: ReactNode
}
export interface ModalHeaderProps extends ViewProps {
  children: ReactNode
}
export interface ModalSubHeaderProps extends ViewProps {
  children: string
}
export interface ModalBodyProps extends ViewProps {
  children: ReactNode
}
export interface ModalFooterProps extends ViewProps {
  children: ReactNode
}
export interface ModalCloseButtonProps extends PressableProps {}
