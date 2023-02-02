import { useBreakpointValue } from 'native-base'
import { DesktopHeader } from './desktop'
import { MobileHeader } from './mobile'
import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = (props) => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  if (isMobile) {
    return <MobileHeader {...props} />
  }
  return <DesktopHeader {...props} />
}
