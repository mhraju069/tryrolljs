import { Radio, IRadioGroupProps } from 'native-base'
import { View } from 'react-native'
import { TypographyV2 } from '../typographyV2'
import { margin } from '../../styles'

export type RadioOption = {
  name: string
  description?: string
  value: string
}

interface RadioSelectProps extends IRadioGroupProps {
  options: RadioOption[]
}

export const RadioSelect = ({ options, ...props }: RadioSelectProps) => {
  return (
    <Radio.Group {...props} colorScheme="black">
      {options.map((option) => (
        <Radio
          key={option.value}
          value={option.value}
          size="sm"
          style={margin.mv8}
          _icon={{ alignSelf: 'flex-start' }}
        >
          <View>
            <TypographyV2 variant="caption2">{option.name}</TypographyV2>
            {option.description && (
              <TypographyV2 variant="text4">{option.description}</TypographyV2>
            )}
          </View>
        </Radio>
      ))}
    </Radio.Group>
  )
}
