import { titleBuilder } from '../../../.storybook/utils'
import { Header } from '../typography'
import { Anchor } from '.'

const storyConfig = {
  title: titleBuilder.atoms('Anchor'),
  component: Anchor,
}

export const Default = () => <Anchor href="#">Link</Anchor>
export const InheritFontSize = () => (
  <Header>
    <Anchor href="#" fontSize={undefined}>
      Link
    </Anchor>
  </Header>
)

export default storyConfig
