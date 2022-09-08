import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { titleBuilder } from '../../../.storybook/utils'
import { containers, margins } from '../../styles'
import { Button } from '../button'
import { Toast, ToastVariant } from '.'

const storyConfig = {
  title: titleBuilder.atoms('Toast'),
  component: Toast,
}

const renderShowToastButton = (variant: ToastVariant, actionTitle?: string) => {
  const title = variant[0].toUpperCase() + variant.slice(1)

  return (
    <Button
      style={margins.mr16}
      type="primary"
      title={actionTitle ?? title}
      onPress={() =>
        Toast.show({
          title,
          description: `Example ${variant} toast`,
          action: actionTitle
            ? { title: actionTitle, onPress: action('action.onPress') }
            : undefined,
          variant,
        })
      }
    />
  )
}

export const Default = () => {
  return (
    <View style={containers.row}>
      {renderShowToastButton('light')}
      {renderShowToastButton('dark')}
      {renderShowToastButton('warn')}
      {renderShowToastButton('success')}
      {renderShowToastButton('error')}
      {renderShowToastButton('dark', 'Action')}
    </View>
  )
}

export default storyConfig
