import { useCallback, useState, useRef } from 'react'
import { Platform } from 'react-native'

const useScrollBlock = () => {
  const scroll = useRef(false)

  const blockScroll = () => {
    if (typeof document === 'undefined') return

    const html = document.documentElement
    const { body } = document

    if (!body || !body.style || scroll.current) return

    const scrollBarWidth = window.innerWidth - html.clientWidth
    const bodyPaddingRight =
      parseInt(
        window.getComputedStyle(body).getPropertyValue('padding-right'),
      ) || 0

    /**
     * 1. Fixes a bug in iOS and desktop Safari whereby setting
     *    `overflow: hidden` on the html/body does not prevent scrolling.
     * 2. Fixes a bug in desktop Safari where `overflowY` does not prevent
     *    scroll if an `overflow-x` style is also applied to the body.
     */
    html.style.position = 'relative' /* [1] */
    body.style.position = 'relative' /* [1] */
    html.style.overflow = 'hidden' /* [2] */
    body.style.overflow = 'hidden' /* [2] */
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`

    scroll.current = true
  }

  const allowScroll = () => {
    if (typeof document === 'undefined') return

    const html = document.documentElement
    const { body } = document

    if (!body || !body.style || !scroll.current) return

    html.style.position = ''
    html.style.overflow = ''
    body.style.position = ''
    body.style.overflow = ''
    body.style.paddingRight = ''

    scroll.current = false
  }

  return [blockScroll, allowScroll]
}

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [blockScroll, allowScroll] = useScrollBlock()
  const [position, setPosition] = useState({ left: 0, top: 0})

  const open = useCallback(
    (left, top) => {
      if (Platform.OS === 'web') {
        blockScroll()
      }
      setIsOpen(true)
      setPosition({ left, top })
    },
    [blockScroll],
  )
  const close = useCallback(() => {
    if (Platform.OS === 'web') {
      allowScroll()
    }
    setIsOpen(false)
  }, [allowScroll])

  const toggle = useCallback(
    (left, top) => {
      if (isOpen) return close()
      return open(left, top)
    },
    [isOpen, open, close],
  )

  return {
    isOpen,
    open,
    close,
    toggle,
    position,
  }
}
