import { useBreakpointValue } from 'native-base'
import { View } from 'react-native'
import { container } from '../../styles'
import { DesktopSidebar } from './desktop'
import { MobileSidebar } from './mobile'
import { SidebarProps } from './types'

export const Sidebar: React.FC<SidebarProps> = ({ children, ...props }) => {
  const isMobile = useBreakpointValue({ base: true, xl: false })
  if (isMobile) {
    return (
      <View style={[]}>
        <MobileSidebar {...props} />
        {children}
      </View>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={[container.row, container.flex1]}>
        <DesktopSidebar {...props} />
        {children}
      </View>
    </View>
  )
}
