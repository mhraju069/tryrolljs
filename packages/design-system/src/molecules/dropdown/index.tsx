import { ReactNode, useCallback, useState } from 'react'
import { Pressable, View } from 'native-base'
import { Popover, PopoverProps } from '../../atoms'

export type DropdownProps = {
  children: ReactNode
  renderDropdown: () => ReactNode
  open?: boolean
}

export const Dropdown = ({ children, open, renderDropdown }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(open)

  const renderReference: PopoverProps['renderReference'] = useCallback(
    ({ reference, getReferenceProps }) => (
      <Pressable {...getReferenceProps()}>
        <View ref={reference}>{children}</View>
      </Pressable>
    ),
    [children],
  )

  return (
    <Popover
      open={!!(isOpen || open)}
      onOpenChange={setIsOpen}
      renderReference={renderReference}
    >
      {renderDropdown()}
    </Popover>
  )
}
