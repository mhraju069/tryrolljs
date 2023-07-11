import { LogoSidebar, SidebarFooterOptionProps } from '../sidebar/types'

interface HeaderOption {
  id: string
  title: string
  onPress: () => void
}

export interface HeaderProps {
  logo: LogoSidebar
  mobileSidebarHeader?: React.ReactNode
  options: HeaderOption[]
  selectedOptionId?: string
  withConnectWallet?: boolean
  footerOptionsOnMobile?: SidebarFooterOptionProps[]
}
