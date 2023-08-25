import { ReactNode, useCallback, useState } from 'react'
import { Pressable } from '@gluestack-ui/react'
import { View, StyleProp, ViewStyle } from 'react-native'
import { Popover, PopoverProps } from '../../atoms'

export type DropdownProps = {
  children: ReactNode
  renderDropdown: () => ReactNode
  open?: boolean
  style?: StyleProp<ViewStyle>
}

export const Dropdown = ({
  children,
  open,
  renderDropdown,
  style,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(open)

  const renderReference: PopoverProps['renderReference'] = useCallback(
    ({ reference, getReferenceProps }) => (
      <Pressable {...getReferenceProps()}>
        {/* @ts-ignore */}
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
      style={style}
    >
      {renderDropdown()}
    </Popover>
  )
}
