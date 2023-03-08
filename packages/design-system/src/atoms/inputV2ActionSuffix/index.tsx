import { useThemeV2 } from '../../hooks'
import { TypographyV2 } from '../typographyV2'

interface InputV2ActionSuffixProps {
  title: string
  onPress: () => void
  disabled?: boolean
  color?: string
}

export const InputV2ActionSuffix: React.FC<InputV2ActionSuffixProps> = ({
  title,
  onPress,
  color,
  disabled = false,
}) => {
  const theme = useThemeV2()
  const getColor = () => {
    if (color) {
      return color
    }
    return disabled ? theme.text.black[40] : theme.text.black[100]
  }
  return (
    <TypographyV2 onPress={onPress} variant="caption1" color={getColor()}>
      {title}
    </TypographyV2>
  )
}
