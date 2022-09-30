import type { FunctionComponent, ReactNode } from 'react'

export type DropdownProps = {
  children: ReactNode
  renderDropdown: () => ReactNode
  open?: boolean
}

export const Dropdown: FunctionComponent<DropdownProps>
