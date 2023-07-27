import { render, screen } from '@testing-library/react-native'
import { TryrollTestProvider } from '../../providers'
import { QR_Code, QRCodeProps } from './index'

describe('QRCode', () => {
  const renderComponent = (props: QRCodeProps) => {
    return render(
      <TryrollTestProvider>
        <QR_Code {...props} />
      </TryrollTestProvider>,
    )
  }
  it('renders without errors', () => {
    const value = 'https://tryroll.com/'
    const size = 200

    renderComponent({ value, size })

    // Check if the component renders
    const qrCodeComponent = screen.getByTestId('qrCodeContainer')
    expect(qrCodeComponent).toBeDefined()
  })
})
