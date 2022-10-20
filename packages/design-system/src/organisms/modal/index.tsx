import Modal from 'react-modal'
import { useModal } from '../../hooks'

export const ModalManager = () => {
  const modal = useModal()

  return (
    <Modal
      onRequestClose={() => modal.setOpen(false)}
      isOpen={modal.open}
      style={{
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          overflow: 'visible',
          display: 'flex',
          borderWidth: 0,
          top: undefined,
          left: undefined,
          bottom: undefined,
          right: undefined,
          padding: 16,
          ...modal.props.style,
        },
      }}
    >
      {modal.renderer()}
    </Modal>
  )
}
