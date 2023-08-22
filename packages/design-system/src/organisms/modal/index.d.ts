import type { ComponentType } from 'react'
import type {
  ModalProps,
  ModalContentProps,
  ModalHeaderProps,
  ModalSubHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalCloseButtonProps,
} from './types'

export const Modal: ComponentType<ModalProps> & {
  Content: ComponentType<ModalContentProps>
  Header: ComponentType<ModalHeaderProps>
  SubHeader: ComponentType<ModalSubHeaderProps>
  Body: ComponentType<ModalBodyProps>
  Footer: ComponentType<ModalFooterProps>
  CloseButton: ComponentType<ModalCloseButtonProps>
}
