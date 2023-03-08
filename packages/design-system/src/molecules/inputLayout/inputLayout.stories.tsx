import { useState } from 'react'
import { View } from 'react-native'
import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { padding } from '../../styles'
import { InputLayoutProps, InputLayout } from '.'

const storyConfig = {
  title: titleBuilder.molecules('InputLayout'),
  component: InputLayout,
}

const Template = (props: InputLayoutProps) => {
  const [value, setValue] = useState('')
  return (
    <View style={[padding.p20]}>
      <InputLayout {...props} value={value} onChangeText={setValue} />
    </View>
  )
}

export const Default = fromTemplate(Template, {
  title: 'Total token supply',
  description:
    'This is the total amount of tokens to be created. You can’t change the total supply once the token is created. Recommended supply: 10 million.',
  label: 'Max supply',
  placeholder: 'this is the place holder',
})

export default storyConfig
