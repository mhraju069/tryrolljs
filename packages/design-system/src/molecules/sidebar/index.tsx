import { Platform } from 'react-native'
import { useBreakpointValue } from '../../hooks'
import { DesktopSidebar } from './desktop'
import { MobileSidebar } from './mobile'
import { SidebarProps } from './types'

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const isMobile = useBreakpointValue({ base: true, xl: false })
  return (
    <>
      {Platform.select({
        native: <MobileSidebar {...props} />,
        web: (
          <>
            {isMobile ? (
              <MobileSidebar {...props} />
            ) : (
              <DesktopSidebar {...props} />
            )}
          </>
        ),
      })}
    </>
  )
}

export * from './types'
