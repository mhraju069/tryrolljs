import type { FunctionComponent, ReactNode } from 'react'

export type TooltipVariant = 'light' | 'dark'

export type TooltipProps = {
  children: ReactNode
  title: ReactNode
  open?: boolean
  variant?: TooltipVariant
  renderInPortal?: boolean
  style?: StyleProp<ViewStyle>
  placement?:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'top-start'
    | 'top-end'
    | 'right-start'
    | 'right-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
}

export const Tooltip: FunctionComponent<TooltipProps>
