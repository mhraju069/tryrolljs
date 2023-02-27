import { SidebarOptionProps } from '../sidebarOption/types'

export interface SidebarFooterOptionProps {
  title: string
  link: string
}
export interface LogoSidebar {
  desktop: React.ReactNode
  mobileHeader: React.ReactNode
  mobileSidebar: React.ReactNode
}
export interface SidebarProps {
  logo: LogoSidebar
  header?: React.ReactNode
  selectedOptionId?: string
  options: SidebarOptionProps[][]
  withConnectWallet?: boolean
  footerOptionsOnMobile?: SidebarFooterOptionProps[]
  footerOnDesktop?: React.ReactNode
}
