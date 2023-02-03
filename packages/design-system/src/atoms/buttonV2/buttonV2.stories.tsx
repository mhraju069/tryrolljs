import { View } from 'react-native'
import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
// import LogoIso from '../../assets/svg/logo-iso.svg'
import { container, margin } from '../../styles'
import { Icon as IconComponent } from '../icon'
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
  icon: <IconComponent variant="wallet" />,
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
  icon: <IconComponent variant="add" />,
  size: 'medium',
  title: 'Click me',
  onPress: () => console.log('Primary button clicked'),
})

export default storyConfig
