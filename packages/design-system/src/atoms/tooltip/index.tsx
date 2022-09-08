import { Tooltip as NBTooltip } from 'native-base'
import { ReactNode } from 'react'
import { charcoalBlack, containers, darkNavy, white } from '../../styles'

export type TooltipVariant = 'light' | 'dark'

export type TooltipProps = {
  children: ReactNode
  title: string
  open?: boolean
  variant?: TooltipVariant
  placement?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right'
    | 'right top'
    | 'right bottom'
    | 'left top'
    | 'left bottom'
}

export const Tooltip: React.FC<TooltipProps> = ({
  variant = 'light',
  open,
  children,
  title,
  placement,
}) => {
  return (
    <NBTooltip
      label={title}
      isOpen={open}
      placement={placement}
      backgroundColor={variant === 'dark' ? darkNavy : white}
      style={[containers.borderRadius]}
      _text={{
        color: variant === 'dark' ? white : charcoalBlack,
      }}
      hasArrow
    >
      {children}
    </NBTooltip>
  )
}
