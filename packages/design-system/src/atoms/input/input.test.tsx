import { fireEvent, render, screen } from '@testing-library/react-native'
import { TryrollTestProvider } from '../../providers'
import { Input } from '.'

describe('Input', () => {
  it('renders editable', async () => {
    const onChangeText = jest.fn()
    const placeholder = 'Foo'
    render(
      <Input
        placeholder={placeholder}
        testID="textInput"
        onChangeText={onChangeText}
      />,
      {
        wrapper: TryrollTestProvider,
      },
    )

    const foundPlaceholder = await screen.findByText(placeholder)
    expect(foundPlaceholder).toBeDefined()

    const input = await screen.findByTestId('textInput')
    expect(input).toBeDefined()

    const text = 'Change is here'
    fireEvent.changeText(input, text)

    expect(onChangeText).toHaveBeenCalledWith(text)
  })

  it('renders disabled', async () => {
    const onChangeText = jest.fn()
    const placeholder = 'Foo'
    render(
      <Input
        placeholder={placeholder}
        disabled
        testID="textInput"
        onChangeText={onChangeText}
      />,
      {
        wrapper: TryrollTestProvider,
      },
    )

    const foundPlaceholder = await screen.findByText(placeholder)
    expect(foundPlaceholder).toBeDefined()

    const input = await screen.findByTestId('textInput')
    expect(input).toBeDefined()

    // RTL triggers onChangeText for non-editable, so we have to check for prop value here
    expect(input.props.editable).toBe(false)
  })

  it('renders non-editable', async () => {
    const onChangeText = jest.fn()
    const placeholder = 'Foo'
    render(
      <Input
        placeholder={placeholder}
        editable={false}
        testID="textInput"
        onChangeText={onChangeText}
      />,
      {
        wrapper: TryrollTestProvider,
      },
    )

    const foundPlaceholder = screen.queryByText(placeholder)
    expect(foundPlaceholder).toBeDefined()

    const input = await screen.findByTestId('textInput')
    expect(input).toBeDefined()

    // RTL triggers onChangeText for non-editable, so we have to check for prop value here
    expect(input.props.editable).toBe(false)
  })
})
