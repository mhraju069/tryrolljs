import { IconVariant } from '../../atoms'

export interface OptionProps {
  id: string
  namedIcon?: IconVariant
  icon?: React.ReactNode
  title: string
  onPress: () => void
}

export interface SidebarOptionProps extends OptionProps {
  nestedOptions?: OptionProps[]
}
