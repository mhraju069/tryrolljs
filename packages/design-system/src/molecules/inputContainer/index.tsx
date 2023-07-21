import { View } from 'react-native'
import { Icon, TooltipV2, TypographyV2 } from '../../atoms'
import { container, margin } from '../../styles'
import { useThemeV2 } from '../../hooks'

export interface InputContainerProps {
  label?: string
  error?: string
  info?: string
  tooltip?: string
  children: React.ReactNode
}

export const InputContainer = ({
  label,
  error,
  info,
  tooltip,
  children,
}: InputContainerProps) => {
  const theme = useThemeV2()
  return (
    <View testID="inputContainer">
      {label && (
        <View style={[margin.mb8, container.row, container.alignCenter]}>
          <TypographyV2 variant="caption1" color={theme.text.black[100]}>
            {label}
          </TypographyV2>
          {tooltip && (
            <TooltipV2 title={tooltip} placement="bottom">
              <View style={[margin.ml8]} testID="infoIcon">
                <Icon
                  variant="infoCircle"
                  width={16}
                  height={16}
                  color={theme.text.black[100]}
                />
              </View>
            </TooltipV2>
          )}
        </View>
      )}
      {children}
      {(error || info) && (
        <TypographyV2
          variant="caption2"
          color={error ? theme.base.danger : theme.text.black[40]}
          style={[margin.mt8]}
        >
          {error || info}
        </TypographyV2>
      )}
    </View>
  )
}
