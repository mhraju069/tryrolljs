import { render, screen } from '@testing-library/react-native'
import { TryrollTestProvider } from '../../providers'
import { QRCode, QRCodeProps } from './index'

describe('QRCode', () => {
  const renderComponent = (props: QRCodeProps) => {
    return render(
      <TryrollTestProvider>
        <QRCode {...props} />
      </TryrollTestProvider>,
    )
  }
  it('renders without errors', () => {
    const value = 'https://tryroll.com/'
    const size = 200

    renderComponent({ value, size })
    const qrCodeComponent = screen.getByTestId('qrCodeContainer')
    expect(qrCodeComponent).toBeDefined()
  })
})
