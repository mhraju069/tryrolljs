import { useCallback, useState } from 'react'
import { LayoutChangeEvent, Platform } from 'react-native'

interface Args {
  x: number | null
  y: number | null
}

// Android has some issue while calculating the layout using `.measure`
// This hook is providing an onLayout handler to fix it
export const useFloatingLayoutAndroidHandler = ({ x, y }: Args) => {
  const [xy, setXY] = useState([0, 0])
  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { layout } = event.nativeEvent
    setXY([layout.x, layout.y + layout.height])
  }, [])

  return Platform.select({
    android: { xy, onLayout },
    default: { xy: [x ?? 0, y ?? 0], onLayout: undefined },
  })
}
