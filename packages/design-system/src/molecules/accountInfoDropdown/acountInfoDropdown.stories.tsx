import { action } from '@storybook/addon-actions'
import { View } from 'react-native'
import { fromTemplate } from '../../../.storybook/utils'
import { CircleImg } from '../../atoms'
import { container } from '../../styles'
import { AccountInfoDropdown, AccountInfoDropdownProps } from '.'

export default {
  title: 'Design System/Molecules/AccountInfoDropdown',
  component: AccountInfoDropdown,
}

const Template = (props: AccountInfoDropdownProps) => (
  <View style={[container.alignEnd]}>
    <AccountInfoDropdown {...props}>
      <CircleImg size={50} />
    </AccountInfoDropdown>
  </View>
)

export const Default = fromTemplate(Template, {
  avatar: 'https://i.pravatar.cc/300',
  name: 'John Doe',
  username: '@johndoe',
  options: [
    {
      id: '1',
      iconVariant: 'book',
      label: 'Profile',
      onPress: action('action.onPress profile'),
    },
    {
      id: '2',
      iconVariant: 'coin',
      label: 'Settings',
      onPress: action('action.onPress settings'),
    },
    {
      id: '3',
      iconVariant: 'logout',
      label: 'Logout',
      color: 'red',
      onPress: action('action.onPress logout'),
    },
  ],
})
