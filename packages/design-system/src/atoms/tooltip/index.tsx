import { Tooltip as NBTooltip } from 'native-base'
import { ReactNode } from 'react'
import { charcoalBlack, containers, darkNavy, white } from '../../styles'

export enum TooltipVariant {
  Light = 'light',
  Dark = 'dark',
}

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
  variant = TooltipVariant.Light,
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
      backgroundColor={variant === TooltipVariant.Dark ? darkNavy : white}
      style={[containers.borderRadius]}
      _text={{
        color: variant === TooltipVariant.Dark ? white : charcoalBlack,
      }}
      hasArrow
    >
      {children}
    </NBTooltip>
  )
}
