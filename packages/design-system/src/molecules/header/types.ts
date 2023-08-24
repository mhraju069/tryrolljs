import {
  LogoSidebar,
  SuffixSidebar,
  SidebarFooterOptionProps,
} from '../sidebar/types'

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
  suffix?: SuffixSidebar
  footerOptionsOnMobile?: SidebarFooterOptionProps[]
  /**
   * @deprecated Use Suffix props instead
   */
  withConnectWallet?: boolean
}
