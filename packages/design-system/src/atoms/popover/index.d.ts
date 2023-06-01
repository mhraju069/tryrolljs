import { Placement, ReferenceType } from '@floating-ui/react-dom'
import { ComponentType, ReactNode } from 'react'

export interface PopoverProps {
  open: boolean
  onOpenChange?: (open: boolean) => void
  selectedValue: string
  renderReference: (props: {
    reference: (node: ReferenceType | null) => void
    getReferenceProps: (
      userProps?: React.HTMLProps<Element> | undefined,
    ) => Record<string, unknown>
    selectedValue: string
    onOpenChange?: (value: boolean) => void
    open: boolean
  }) => ReactNode
  children: ReactNode
  placement?: Placement
  openOnHover?: boolean
  matchReferenceWidth?: boolean
  style?: StyleProp<ViewStyle>
}

export const Popover: ComponentType<PopoverProps>
