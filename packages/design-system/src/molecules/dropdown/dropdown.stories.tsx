import { View } from 'react-native'
import { Body } from '../../atoms'
import { Dropdown } from '.'

const storyConfig = {
  title: 'Design System/Molecules/Dropdown',
  component: Dropdown,
}

const renderTrigger = () => (
  <View>
    <Body>Dropdown</Body>
  </View>
)

const renderDropdown = () => (
  <View>
    <Body>Hi there!</Body>
  </View>
)

export const Default = () => {
  return <Dropdown renderDropdown={renderDropdown}>{renderTrigger()}</Dropdown>
}

export default storyConfig
