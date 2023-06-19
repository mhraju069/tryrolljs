import { useThemeV2 } from '../../hooks'
import { Tooltip, TooltipProps } from '../tooltip'
import { TypographyV2 } from '../typographyV2'

export interface TooltipV2Props
  extends Omit<TooltipProps, 'title' | 'variant'> {
  title: string
  visible?: boolean
}

export const TooltipV2: React.FC<TooltipV2Props> = ({
  children,
  title,
  ...props
}) => {
  const theme = useThemeV2()
  return (
    <Tooltip
      {...props}
      style={{
        backgroundColor: theme.text.black[100],
      }}
      title={
        <TypographyV2 variant="text4" color={theme.text.white[100]}>
          {title}
        </TypographyV2>
      }
    >
      {children}
    </Tooltip>
  )
}
