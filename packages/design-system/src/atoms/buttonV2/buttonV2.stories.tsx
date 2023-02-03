import { View } from 'react-native'
import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { container, margin } from '../../styles'
import { ButtonV2Props } from './types'
import { ButtonV2 } from '.'

const storyConfig = {
  title: titleBuilder.atoms('ButtonV2'),
  component: ButtonV2,
}

const Template = (props: ButtonV2Props) => (
  <View style={[container.halfWidth, margin.m20]}>
    <ButtonV2 {...props} />
  </View>
)

export const Primary = fromTemplate(Template, {
  variant: 'primary',
  size: 'medium',
  title: 'Click me',
  namedIcon: 'wallet',
  onPress: () => console.log('Primary button clicked'),
})
export const Secondary = fromTemplate(Template, {
  variant: 'secondary',
  size: 'medium',
  title: 'Click me',
  onPress: () => console.log('Primary button clicked'),
})
export const Tertiary = fromTemplate(Template, {
  variant: 'tertiary',
  size: 'medium',
  title: 'Click me',
  onPress: () => console.log('Primary button clicked'),
})
export const Text = fromTemplate(Template, {
  variant: 'text',
  size: 'medium',
  title: 'Click me',
  onPress: () => console.log('Primary button clicked'),
})
export const Icon = fromTemplate(Template, {
  variant: 'icon',
  namedIcon: 'add',
  size: 'medium',
  title: 'Click me',
  onPress: () => console.log('Primary button clicked'),
})

export default storyConfig
