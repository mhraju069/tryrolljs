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
  const isMobile = useBreakpointValue({ base: true, md: false })
  const isNative = Platform.OS !== 'web'
  if (isMobile) {
    return (
      <View>
        <MobileSidebar {...props} options={[props.options]} />
        {isNative ? <ScrollView>{children}</ScrollView> : children}
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
