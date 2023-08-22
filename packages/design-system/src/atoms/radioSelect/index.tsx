import {
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioIcon,
  CircleIcon,
} from '@gluestack-ui/react'
import { View } from 'react-native'
import { TypographyV2 } from '../typographyV2'
import { margin } from '../../styles'
import { useThemeV2 } from '../../hooks'

export type RadioOption = {
  name: string
  description?: string
  value: string
  disabled?: boolean
}

interface RadioSelectProps {
  value: string
  onChange?: (value: string) => void
  options: RadioOption[]
}

export const RadioSelect = ({ value, options, onChange }: RadioSelectProps) => {
  const theme = useThemeV2()
  return (
    <RadioGroup value={value} onChange={onChange}>
      {options.map((option) => (
        <Radio
          key={option.value}
          value={option.value}
          size="sm"
          isDisabled={option.disabled}
          style={margin.mv4}
        >
          <RadioIndicator borderColor={theme.base.primary['100']}>
            <RadioIcon
              as={CircleIcon}
              strokeWidth={1}
              stroke={theme.base.primary['100']}
              name={option.value}
            />
          </RadioIndicator>

          <View style={margin.ml8}>
            <TypographyV2 variant="caption2">{option.name}</TypographyV2>
            {option.description && (
              <TypographyV2 variant="text4">{option.description}</TypographyV2>
            )}
          </View>
        </Radio>
      ))}
    </RadioGroup>
  )
}
