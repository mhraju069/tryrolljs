import { ReactNode } from 'react'
import { ButtonV2 } from '../../atoms'
import { margin } from '../../styles'
import { ModalV2 } from '../modalV2'

export type Action = {
  title: string
  onPress: () => void
}

export interface ConfirmationModalContentV2Props {
  title: string
  confirmAction: Action
  cancelAction: Action
  children: ReactNode
}

export const ConfirmationModalContentV2 = ({
  title,
  confirmAction,
  cancelAction,
  children,
}: ConfirmationModalContentV2Props) => {
  return (
    <>
      <ModalV2.Content>
        <ModalV2.CloseButton onPress={cancelAction.onPress} />

        <ModalV2.Header>{title}</ModalV2.Header>
        <ModalV2.Body>{children}</ModalV2.Body>
        <ModalV2.Footer>
          <ButtonV2
            title={cancelAction.title}
            variant="secondary"
            onPress={cancelAction.onPress}
            style={margin.mr16}
          />
          <ButtonV2
            title={confirmAction.title}
            variant="primary"
            onPress={confirmAction.onPress}
          />
        </ModalV2.Footer>
      </ModalV2.Content>
    </>
  )
}
