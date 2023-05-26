import { useBreakpointValue } from 'native-base'
import { PropsWithChildren } from 'react'
import { Platform, ScrollView, View } from 'react-native'
import { MobileSidebar } from '../sidebar/mobile'
import { DesktopHeader } from './desktop'
import { HeaderProps } from './types'

export const HeaderV2: React.FC<HeaderProps & PropsWithChildren> = ({
  children,
  ...props
}) => {
  const isMobile = useBreakpointValue({ base: true, xl: false })
  if (isMobile) {
    return (
      <View>
        <MobileSidebar
          {...props}
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
