import { useBreakpointValue } from 'native-base'
import { DesktopHeader } from './desktop'
import { MobileHeader } from './mobile'
import { HeaderProps } from './types'

export const HeaderV2 = (props: HeaderProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  if (isMobile) {
    return <MobileHeader {...props} />
  }
  return <DesktopHeader {...props} />
}
