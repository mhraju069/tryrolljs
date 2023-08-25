import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { container, margin } from '../../styles'
import { RadioSelect } from '.'

const storyConfig = {
  title: 'Design System/Atoms/RadioSelect',
  component: RadioSelect,
}

export const Default = () => (
  <View style={[container.halfWidth, margin.m20]}>
    <RadioSelect
      value="two"
      options={[
        { name: 'One', value: 'one' },
        { name: 'Two', value: 'two' },
        { name: 'Three', value: 'three', disabled: true },
      ]}
      onChange={action('onChange')}
    />
  </View>
)

export const WithDescriptions = () => (
  <View style={[container.halfWidth, margin.m20]}>
    <RadioSelect
      value="two"
      options={[
        {
          name: 'One',
          value: 'one',
          description: 'Here is the test description',
        },
        {
          name: 'Two',
          value: 'two',
          description: 'Here is the test description',
        },
        {
          name: 'Three',
          value: 'three',
          description: 'Here is the test description',
        },
      ]}
      onChange={action('onChange')}
    />
  </View>
)

export default storyConfig
