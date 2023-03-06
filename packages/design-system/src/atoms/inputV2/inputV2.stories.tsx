import { View } from 'react-native'
import { useState } from 'react'
import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { container, padding } from '../../styles'
import { InputPropsV2, InputV2 } from '.'

const storyConfig = {
  title: titleBuilder.atoms('InputV2'),
  component: InputV2,
}

const Template = (props: InputPropsV2) => {
  const [value, setValue] = useState('')
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[container.fullWidth, padding.p20, { maxWidth: 332 }]}>
      <InputV2 value={value} onChangeText={setValue} {...props} />
    </View>
  )
}

export const Default = fromTemplate(Template, {
  label: 'Default',
  placeholder: 'Default input',
  editable: true,
})

export const MultiLine = fromTemplate(Template, {
  label: 'Multi line',
  placeholder: 'Multi line input',
  multiline: true,
  maxLength: 100,
  numberOfLines: 5,
  withCount: true,
  editable: true,
})

export const WithAction = fromTemplate(Template, {
  label: 'Multi line',
  placeholder: 'this has an action',
  editable: true,
  action: {
    title: 'MAX',
    onPress: () => null,
  },
})

export const WithData = fromTemplate(Template, {
  label: 'With data',
  placeholder: 'this has data',
  editable: true,
  data: {
    title: 'Lots',
    description: 'Total lots to distribute',
  },
})

export const WithLocked = fromTemplate(Template, {
  label: 'With locked',
  placeholder: 'this is locked',
  editable: true,
  unlockedTitle: 'Edit',
})

export default storyConfig
