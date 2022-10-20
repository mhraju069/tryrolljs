import { useCallback, useState } from 'react'
import { ModalContext, ModalProps, ModalRenderer } from '../../context'

export const ModalProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [renderer, setRenderer] = useState<ModalRenderer>(() => () => null)
  const [options, setOptions] = useState<ModalProps>({})

  const _setRenderer = useCallback(
    (r: ModalRenderer, opts?: ModalProps) => {
      setRenderer(() => r)
      setOptions(opts || {})
    },
    [setRenderer, setOptions],
  )

  return (
    <ModalContext.Provider
      value={{
        open,
        setOpen,
        renderer,
        setRenderer: _setRenderer,
        props: options,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
