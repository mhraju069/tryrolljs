import { useState } from 'react'
import { LayoutChangeEvent } from 'react-native'

export const useAndroidFloatingXY = () => {
  const [androidXY, setAndroidXY] = useState([0, 0])
  const androidOnLayout = (event: LayoutChangeEvent) => {
    const { layout } = event.nativeEvent
    setAndroidXY([layout.x, layout.y + layout.height])
  }
  return { xy: androidXY, onLayout: androidOnLayout }
}
