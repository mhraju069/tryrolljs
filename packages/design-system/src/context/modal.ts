import * as React from 'react'

export type ModalContextValue = {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export const ModalContext = React.createContext<ModalContextValue>({
  isOpen: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
})
