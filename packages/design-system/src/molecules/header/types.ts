import { LogoSidebar, SidebarFooterOptionProps } from '../sidebar/types'

interface HeaderOption {
  id: string
  title: string
  onPress: () => void
}

export interface HeaderProps {
  logo: LogoSidebar
  options: HeaderOption[]
  selectedOptionId?: string
  withConnectWallet?: boolean
  footerOptionsOnMobile?: SidebarFooterOptionProps[]
}
