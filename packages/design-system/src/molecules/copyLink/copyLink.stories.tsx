import { titleBuilder } from '../../../.storybook/utils'
import { CopyLink } from '.'

const storyConfig = {
  title: titleBuilder.molecules('CopyLink'),
  component: CopyLink,
}

export const Default = () => {
  return (
    <div style={{ maxWidth: 400 }}>
      <CopyLink url="https://www.google.com/somelonglinkthatisverylong" />
    </div>
  )
}
export default storyConfig
