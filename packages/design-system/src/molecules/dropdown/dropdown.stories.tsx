import { View } from 'react-native'
import { titleBuilder } from '../../../.storybook/utils'
import { Body } from '../../atoms'
import { Dropdown } from '.'

const storyConfig = {
  title: titleBuilder.molecules('Dropdown'),
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
