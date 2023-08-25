import { Header } from '../typography'
import { Anchor } from '.'

const storyConfig = {
  title: 'Design System/Atoms/Anchor',
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
