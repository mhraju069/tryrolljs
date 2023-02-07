import { StyleSheet, View } from 'react-native'
import { useThemeV2 } from '../../hooks'
import { SidebarProps } from './types'

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: '100%',
  },
})

export const DesktopSidebar: React.FC<SidebarProps> = ({}) => {
  const theme = useThemeV2()
  return (
    <View
      style={[styles.container, { backgroundColor: theme.background.white }]}
    />
  )
}
