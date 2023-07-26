import { render, screen } from '@testing-library/react-native'
import { TryrollTestProvider } from '../../providers'
import { QRCodeV2, QRCodeProps } from './index'

describe('QRCodeV2', () => {
  const renderComponent = (props: QRCodeProps) => {
    return render(
      <TryrollTestProvider>
        <QRCodeV2 {...props} />
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
