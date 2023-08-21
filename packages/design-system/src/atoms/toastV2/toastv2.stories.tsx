import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { titleBuilder } from '../../../.storybook/utils'
import { container, margin } from '../../styles'
import { ButtonV2 } from '../buttonV2'
import { ToastV2, ToastV2Variant, useToastV2 } from '.'

const storyConfig = {
  title: titleBuilder.atoms('ToastV2'),
  component: ToastV2,
}

const useToastButton = (variant: ToastV2Variant, actionTitle?: string) => {
  const toast = useToastV2()
  const title = variant[0].toUpperCase() + variant.slice(1)

  return (
    <ButtonV2
      style={margin.mr16}
      size="medium"
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
  const successToastButton = useToastButton('success')
  const errorToastButton = useToastButton('error')
  const informativeToastButton = useToastButton('informative', 'Action')
  return (
    <View style={container.row}>
      {successToastButton}
      {errorToastButton}
      {informativeToastButton}
    </View>
  )
}

export default storyConfig
