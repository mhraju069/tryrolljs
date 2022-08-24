import { useCallback, useState } from 'react'
import { ModalCtx, ModalOpts, ModalRenderer } from '../../context/modal'

export const ModalProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [renderer, setRenderer] = useState<ModalRenderer>(() => () => null)
  const [options, setOptions] = useState<ModalOpts>({})

  const _setRenderer = useCallback(
    (r: ModalRenderer, opts?: ModalOpts) => {
      setRenderer(() => r)
      setOptions(opts || {})
    },
    [setRenderer, setOptions],
  )

  return (
    <ModalCtx.Provider
      value={{
        open,
        setOpen,
        renderer,
        setRenderer: _setRenderer,
        opts: options,
      }}
    >
      {children}
    </ModalCtx.Provider>
  )
}
