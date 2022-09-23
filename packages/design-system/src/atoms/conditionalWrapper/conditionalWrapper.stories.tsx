import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { Body } from '../typography'
import { Tooltip } from '../tooltip'
import { ConditionalWrapper, ConditionalWrapperProps } from '.'

const storyConfig = {
  title: titleBuilder.atoms('ConditionalWrapper'),
  component: ConditionalWrapper,
}

const Template = (props: ConditionalWrapperProps) => (
  // eslint-disable-next-line react-native/no-inline-styles
  <div style={{ width: 'fit-content' }}>
    <ConditionalWrapper {...props}>
      <Body>Hover Me</Body>
    </ConditionalWrapper>
  </div>
)

export const WithWrapper = fromTemplate(Template, {
  wrapper: (children) => <Tooltip title="Hello world">{children}</Tooltip>,
  condition: true,
})

export const WithOutWrapper = fromTemplate(Template, {
  wrapper: (children) => <Tooltip title="Hello world">{children}</Tooltip>,
  condition: false,
})

export default storyConfig
