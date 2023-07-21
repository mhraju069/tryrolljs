import { render, screen } from '@testing-library/react-native'
import { TryrollTestProvider } from '../../providers'
import { StatusV2, StatusComponentProps } from './index'

const getStyle = (element: any) => {
  if (element.props && element.props.style) {
    return Array.isArray(element.props.style)
      ? Object.assign({}, ...element.props.style)
      : element.props.style
  }
  return {}
}

describe('StatusV2', () => {
  const renderComponent = (props: StatusComponentProps) => {
    return render(
      <TryrollTestProvider>
        <StatusV2 {...props} />
      </TryrollTestProvider>,
    )
  }

  it('renders correctly with custom text color', () => {
    const status = 'error'
    const title = 'Failed'
    const textColor = '#EB5757' // Custom text color

    renderComponent({ status, title, textColor })

    const container = screen.getByTestId('statusContainer')
    const text = screen.getByText(title)

    expect(container).toBeDefined()
    expect(text).toBeDefined()

    // Get the style object of the text component
    const textStyle = getStyle(text)

    // Assert that the text color matches the custom text color
    expect(textStyle.color).toBe(textColor)
  })
})
