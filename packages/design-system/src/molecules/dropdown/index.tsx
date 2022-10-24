import { ReactNode, useState } from 'react'
import { Pressable, View } from 'native-base'
import { Popover } from '../../atoms'

export type DropdownProps = {
  children: ReactNode
  renderDropdown: () => ReactNode
  open?: boolean
}

export const Dropdown = ({ children, open, renderDropdown }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(open)

  return (
    <Popover
      open={!!(isOpen || open)}
      onOpenChange={setIsOpen}
      renderReference={({ reference, getReferenceProps }) => (
        <Pressable {...getReferenceProps()}>
          <View ref={reference}>{children}</View>
        </Pressable>
      )}
    >
      {renderDropdown()}
    </Popover>
  )
}
