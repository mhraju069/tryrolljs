import { View } from 'react-native'
import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { Icon } from '../icon'
import { container } from '../../styles'
import { TooltipV2, TooltipV2Props } from '.'

const storyConfig = {
  title: titleBuilder.atoms('TooltipV2'),
  component: TooltipV2,
}

const Template = (props: TooltipV2Props) => (
  <View
    style={[
      container.alignCenter,
      container.justifyCenter,
      container.fullWidth,
      // eslint-disable-next-line react-native/no-inline-styles
      {
        height: 300,
      },
    ]}
  >
    <TooltipV2 {...props}>
      <Icon variant="infoCircle" />
    </TooltipV2>
  </View>
)

export const Default = fromTemplate(Template, {
  title: 'Default',
  placement: 'top',
})

export default storyConfig
