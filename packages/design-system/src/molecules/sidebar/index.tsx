import { useBreakpointValue } from 'native-base'
import { PropsWithChildren } from 'react'
import { Platform, ScrollView, View } from 'react-native'
import { useThemeV2 } from '../../hooks'
import { container } from '../../styles'
import { DesktopSidebar } from './desktop'
import { MobileSidebar } from './mobile'
import { SidebarProps } from './types'

export const Sidebar: React.FC<SidebarProps & PropsWithChildren> = ({
  children,
  ...props
}) => {
  const isMobile = useBreakpointValue({ base: true, xl: false })
  const theme = useThemeV2()
  const isNative = Platform.OS !== 'web'
  if (isMobile) {
    return (
      <View>
        <MobileSidebar {...props} />
        {isNative ? <ScrollView>{children}</ScrollView> : children}
      </View>
    )
  }
  return (
    <View style={[container.row, { backgroundColor: theme.background.grey }]}>
      <DesktopSidebar {...props} />
      <View style={[container.flex1]}>{children}</View>
    </View>
  )
}
