import { action } from '@storybook/addon-actions'
import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import AvatarPicker from './avatarPicker'
import { AvatarPickerProps } from './types'

const storyConfig = {
  title: titleBuilder.organisms('AvatarPicker'),
  component: AvatarPicker,
}

const Template = (props: AvatarPickerProps) => <AvatarPicker {...props} />

export const Default = fromTemplate(Template, {
  onAvatarChange: action('onAvatarChange'),
  maxImageSize: 1000 * 1000,
})

export default storyConfig
