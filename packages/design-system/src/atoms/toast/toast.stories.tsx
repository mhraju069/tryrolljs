import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { titleBuilder } from '../../../.storybook/utils'
import { containers, margins } from '../../styles'
import { Button } from '../button'
import { Toast } from '.'

const storyConfig = {
  title: titleBuilder.atoms('Toast'),
  component: Toast,
}

export const Default = () => {
  return (
    <View style={containers.row}>
      <Button
        style={margins.mr16}
        type="primary"
        title="Light toast"
        onPress={() =>
          Toast.show({
            title: 'Light',
            description: 'Operation finished with some status',
          })
        }
      />
      <Button
        style={margins.mr16}
        type="primary"
        title="Dark toast"
        onPress={() =>
          Toast.show({
            title: 'Dark',
            description: 'Operation finished with some status',
            variant: 'dark',
          })
        }
      />
      <Button
        style={margins.mr16}
        type="primary"
        title="Action toast"
        onPress={() =>
          Toast.show({
            title: 'Dark',
            description: 'Operation finished with some status',
            variant: 'dark',
            action: {
              title: 'View more',
              onPress: action('action.onPress'),
            },
          })
        }
      />
      <Button
        style={margins.mr16}
        type="primary"
        title="Success toast"
        onPress={() =>
          Toast.show({
            title: 'Success',
            description: 'Operation finished with success status',
            variant: 'success',
          })
        }
      />
      <Button
        type="primary"
        title="Error toast"
        onPress={() =>
          Toast.show({
            title: 'Error',
            description: 'Operation finished with error status',
            variant: 'error',
          })
        }
      />
    </View>
  )
}

export default storyConfig
