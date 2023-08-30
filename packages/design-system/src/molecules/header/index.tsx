import { PropsWithChildren } from 'react'
import { Platform, ScrollView, View } from 'react-native'
import { MobileSidebar } from '../sidebar/mobile'
import { useBreakpointValue } from '../../hooks'
import { container } from '../../styles'
import { DesktopHeader } from './desktop'
import { HeaderProps } from './types'

export const HeaderV2: React.FC<HeaderProps & PropsWithChildren> = ({
  children,
  mobileSidebarHeader,
  ...props
}) => {
  const isMobile = useBreakpointValue({ base: true, xl: false })
  if (isMobile) {
    return (
      <View style={[container.flex1]}>
        <MobileSidebar
          {...props}
          header={mobileSidebarHeader}
          sections={[{ id: 'main', options: props.options }]}
        />
        {Platform.select({
          native: <ScrollView>{children}</ScrollView>,
          web: children,
        })}
      </View>
    )
  }
  return (
    <>
      <DesktopHeader {...props} />
      {children}
    </>
  )
}
