import type { ViewProps, PressableProps } from 'react-native'
import type { ReactNode } from 'react'
import type { ModalProps } from '../modal/types'

export interface ModalV2Props extends ModalProps {}

export interface ModalContentProps extends ViewProps {
  children: ReactNode
}
export interface ModalHeaderProps extends ViewProps {
  children: ReactNode
}
export interface ModalBodyProps extends ViewProps {
  children: ReactNode
}
export interface ModalFooterProps extends ViewProps {
  children: ReactNode
}
export interface ModalCloseButtonProps extends PressableProps {}
