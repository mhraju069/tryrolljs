import * as React from 'react'

export type ModalProps = {
  style?: React.CSSProperties
}

export type ModalRenderer = () => React.ReactElement | null

export type ModalContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  renderer: ModalRenderer
  props: ModalProps
  setRenderer: (renderer: ModalRenderer, opts?: ModalProps) => void
}

export const ModalContext = React.createContext<ModalContextValue>({
  open: false,
  props: {},
  setOpen: () => null,
  renderer: () => null,
  setRenderer: () => null,
})
