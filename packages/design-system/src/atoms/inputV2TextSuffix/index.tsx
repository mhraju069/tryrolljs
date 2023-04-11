import { View } from 'react-native'
import { useThemeV2 } from '../../hooks'
import { container } from '../../styles'
import { TypographyV2 } from '../typographyV2'

interface InputV2TextSuffixProps {
  title: string
  description: string
}

export const InputV2TextSuffix: React.FC<InputV2TextSuffixProps> = ({
  title,
  description,
}) => {
  const theme = useThemeV2()
  return (
    <View style={[container.alignEnd]}>
      <TypographyV2 variant="caption1" color={theme.text.black[100]}>
        {title}
      </TypographyV2>
      <TypographyV2 variant="caption2" color={theme.text.black[40]}>
        {description}
      </TypographyV2>
    </View>
  )
}
