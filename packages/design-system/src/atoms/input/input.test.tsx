import { fireEvent, render, screen } from '@testing-library/react-native'
import { TryrollTestProvider } from '../../providers'
import { Input } from '.'

describe('Input', () => {
  it('changes text', async () => {
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

  it("doesn't change disabled", async () => {
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

  it("doesn't change non-editable", async () => {
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

  it("doesn't allow non-numeric for number", async () => {
    const onChangeText = jest.fn()
    const placeholder = 'Foo'
    render(
      <Input
        placeholder={placeholder}
        type="number"
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

    fireEvent.changeText(input, 'abc')
    expect(onChangeText).toHaveBeenCalledWith('')

    fireEvent.changeText(input, 'abc123')
    expect(onChangeText).toHaveBeenCalledWith('123')

    fireEvent.changeText(input, '467')
    expect(onChangeText).toHaveBeenCalledWith('467')
  })
})
