import { View } from 'react-native'
import { useState } from 'react'
import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { container, padding } from '../../styles'
import { InputV2ActionSuffix } from '../../atoms/inputV2ActionSuffix'
import { InputV2TextSuffix } from '../../atoms/inputV2TextSuffix'
import { useThemeV2 } from '../../hooks'
import { InputPropsV2, InputV2 } from '.'

const storyConfig = {
  title: titleBuilder.molecules('InputV2'),
  component: InputV2,
}

const Template = (props: InputPropsV2) => {
  const [value, setValue] = useState('')
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[container.fullWidth, padding.p20, { maxWidth: 332 }]}>
      <InputV2 {...props} value={value} onChangeText={setValue} />
    </View>
  )
}

export const Default = fromTemplate(Template, {
  label: 'Default',
  placeholder: 'Default input',
  disabled: false,
})

export const MultiLine = fromTemplate(Template, {
  label: 'Multi line',
  placeholder: 'Multi line input',
  multiline: true,
  maxLength: 100,
  numberOfLines: 5,
  counter: true,
  disabled: false,
})

export const WithAction = fromTemplate(Template, {
  label: 'Multi line',
  placeholder: 'this has an action',
  disabled: false,
  suffix: <InputV2ActionSuffix title="MAX" onPress={() => null} />,
})

export const WithData = fromTemplate(Template, {
  label: 'With data',
  placeholder: 'this has data',
  disabled: false,
  suffix: (
    <InputV2TextSuffix title="Lots" description="Total lots to distribute" />
  ),
})

export const WithTooltip = fromTemplate(Template, {
  label: 'With tooltip',
  placeholder: 'this has a tooltip',
  disabled: false,
  tooltip: 'This is a tooltip',
})

export const WithLocked = () => {
  const [disabled, setDisabled] = useState(true)
  const [value, setValue] = useState('')
  const theme = useThemeV2()
  const unlocked = () => setDisabled(false)
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[container.fullWidth, padding.p20, { maxWidth: 332 }]}>
      <InputV2
        label="With locked"
        placeholder="this is locked"
        disabled={disabled}
        value={value}
        onChangeText={setValue}
        suffix={
          disabled && (
            <InputV2ActionSuffix
              color={theme.base.highlight1}
              title="Edit"
              onPress={unlocked}
            />
          )
        }
      />
    </View>
  )
}

export default storyConfig
