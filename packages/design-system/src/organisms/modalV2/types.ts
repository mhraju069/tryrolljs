import type { ViewProps, PressableProps } from 'react-native'
import type { ReactNode } from 'react'
import type { InterfaceModalProps } from '@gluestack-ui/modal/lib/typescript/types'

export interface ModalV2Props extends InterfaceModalProps {
  children: ReactNode
  testID?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'full'
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
