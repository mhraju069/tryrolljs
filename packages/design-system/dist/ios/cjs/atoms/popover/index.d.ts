import { Placement, ReferenceType } from '@floating-ui/react-dom'
import { ComponentType, ReactNode } from 'react'

export interface PopoverProps {
  open: boolean
  onOpenChange?: (open: boolean) => void
  renderReference: (props: {
    reference: (node: ReferenceType | null) => void
    getReferenceProps: (
      userProps?: React.HTMLProps<Element> | undefined,
    ) => Record<string, unknown>
  }) => ReactNode
  children: ReactNode
  placement?: Placement
  openOnHover?: boolean
  matchReferenceWidth?: boolean
}

export const Popover: ComponentType<PopoverProps>
