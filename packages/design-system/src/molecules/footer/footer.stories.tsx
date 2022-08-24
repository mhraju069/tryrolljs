import { titleBuilder } from '../../../.storybook/utils'
import { Footer } from '.'

const storyConfig = {
  title: titleBuilder.molecules('Footer'),
  component: Footer,
}

export const Default = () => <Footer />

export default storyConfig
