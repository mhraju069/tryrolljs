import { ReactNode } from 'react'
import { Button } from '../../atoms'
import { margin } from '../../styles'
import { Modal } from '../modal'

export type ConfirmationModalAction = {
  title: string
  onPress: () => void
}

export interface ConfirmationModalContentProps {
  title: string
  description?: string
  confirmAction: ConfirmationModalAction
  cancelAction: ConfirmationModalAction
  children: ReactNode
}

export const ConfirmationModalContent = ({
  title,
  description = '',
  confirmAction,
  cancelAction,
  children,
}: ConfirmationModalContentProps) => {
  return (
    <>
      <Modal.Content>
        <Modal.CloseButton onPress={cancelAction.onPress} />

        <Modal.Header>{title}</Modal.Header>
        <Modal.SubHeader>{description}</Modal.SubHeader>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button
            title={cancelAction.title}
            variant="secondary"
            onPress={cancelAction.onPress}
            style={margin.mr16}
          />
          <Button
            title={confirmAction.title}
            variant="primary"
            onPress={confirmAction.onPress}
          />
        </Modal.Footer>
      </Modal.Content>
    </>
  )
}
