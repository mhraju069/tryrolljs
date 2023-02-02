interface HeaderOption {
  title: string
  onPress: () => void
}

export interface HeaderProps {
  logo: React.ReactNode
  options: HeaderOption[]
  withConnectWallet?: boolean
}
