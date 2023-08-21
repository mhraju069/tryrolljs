import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { titleBuilder } from '../../../.storybook/utils'
import { container, margin } from '../../styles'
import { Button } from '../button'
import { Toast, ToastVariant, useToast } from '.'

const storyConfig = {
  title: titleBuilder.atoms('Toast'),
  component: Toast,
}

const useToastButton = (variant: ToastVariant, actionTitle?: string) => {
  const title = variant[0].toUpperCase() + variant.slice(1)
  const toast = useToast()

  return (
    <Button
      style={margin.mr16}
      variant="primary"
      title={actionTitle ?? title}
      onPress={() =>
        toast({
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
  const lightToastButton = useToastButton('light')
  const darkToastButton = useToastButton('dark')
  const warnToastButton = useToastButton('warn')
  const successToastButton = useToastButton('success')
  const errorToastButton = useToastButton('error')
  const darkActionToastButton = useToastButton('dark', 'Action')
  return (
    <View style={container.row}>
      {lightToastButton}
      {darkToastButton}
      {warnToastButton}
      {successToastButton}
      {errorToastButton}
      {darkActionToastButton}
    </View>
  )
}

export default storyConfig
