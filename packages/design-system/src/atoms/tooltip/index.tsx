import MuiTooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'

export type ToolTipProps = {
  children: React.ReactElement
  title: string | JSX.Element
  open?: boolean
  isMembership?: boolean
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
}

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))
const MembershipTooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} arrow />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#293354',
    color: 'white',
    fontWeight: 600,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1);',
    maxWidth: 320,
    padding: 16,
    fontSize: 16,
    borderRadius: 16,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#293354',
  },
}))

export const ToolTip: React.FC<ToolTipProps> = ({
  children,
  isMembership = false,
  ...props
}) => {
  if (isMembership) {
    return <MembershipTooltip {...props}>{children}</MembershipTooltip>
  }
  return <LightTooltip {...props}>{children}</LightTooltip>
}
