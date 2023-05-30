import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { titleBuilder } from '../../../.storybook/utils'
import { container, margin } from '../../styles'
import { ButtonV2 } from '../buttonV2'
import { ToastV2, ToastV2Variant } from '.'

const storyConfig = {
  title: titleBuilder.atoms('ToastV2'),
  component: ToastV2,
}

const renderShowToastButton = (
  variant: ToastV2Variant,
  actionTitle?: string,
) => {
  const title = variant[0].toUpperCase() + variant.slice(1)

  return (
    <ButtonV2
      style={margin.mr16}
      size="medium"
      variant="primary"
      title={actionTitle ?? title}
      onPress={() =>
        ToastV2.show({
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
    <View style={container.row}>
      {renderShowToastButton('success')}
      {renderShowToastButton('error')}
      {renderShowToastButton('informative', 'Action')}
    </View>
  )
}

export default storyConfig
