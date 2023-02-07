interface Option {
  title: string
  onPress: () => void
}

interface SidebarOption extends Option {
  nestedOptions?: [Option]
}

export interface SidebarProps {
  logo: React.ReactNode
  options: SidebarOption[]
  withConnectWallet?: boolean
}
