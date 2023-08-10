import { action } from '@storybook/addon-actions'
import { ScrollView, View } from 'native-base'
import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { ButtonV2, TypographyV2 } from '../../atoms'
import { useModal } from '../../hooks'
import { ConfirmationModalContentV2 } from '../confirmationModalContentV2'
import { ModalV2, ModalV2Props } from './index'

const storyConfig = {
  title: titleBuilder.organisms('ModalV2'),
  component: ModalV2,
  layout: 'fullscreen',
}

const Template = ({ size, children }: ModalV2Props) => {
  const { toggle, isOpen, close } = useModal()

  return (
    <ScrollView scrollEnabled={false}>
      <View />
      <ButtonV2 onPress={toggle} title="Toggle" />
      <View style={{ height: 1000 }} />
      <ModalV2 isOpen={isOpen} onClose={close} size={size}>
        {children}
      </ModalV2>
    </ScrollView>
  )
}

export const Default = fromTemplate(Template, {
  children: (
    <ModalV2.Content>
      <ModalV2.Header>Header</ModalV2.Header>
      <ModalV2.Body>
        <TypographyV2 variant="text3">Hi there! 👋</TypographyV2>
      </ModalV2.Body>
    </ModalV2.Content>
  ),
})

export const Confirmation = fromTemplate(Template, {
  size: 'xl',
  children: (
    <ConfirmationModalContentV2
      title="Claim reward"
      confirmAction={{
        title: 'Confirm',
        onPress: action('confirmAction.onPress'),
      }}
      cancelAction={{
        title: 'Cancel',
        onPress: action('cancelAction.onPress'),
      }}
    >
      <TypographyV2 variant="text3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolor
      </TypographyV2>
    </ConfirmationModalContentV2>
  ),
})

export default storyConfig
