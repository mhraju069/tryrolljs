import { fireEvent, render, screen } from '@testing-library/react-native'
import { TryrollTestProvider } from '../../providers'
import { TokenSelect } from '.'

describe('TokenSelect', () => {
  it('picks tokens', async () => {
    const onChange = jest.fn()
    const options = [
      { name: 'Ether', symbol: 'ETH', value: 'eth', address: '0x00' },
      { name: 'Wrapped Ether', symbol: 'WETH', value: 'weth', address: '0x01' },
      { name: 'USD Coin', symbol: 'USDC', value: 'usdc', address: '0x02' },
    ]
    render(<TokenSelect options={options} onChange={onChange} />, {
      wrapper: TryrollTestProvider,
    })

    const selectInput = await screen.findByTestId('tokenSelectInput')
    expect(selectInput).toBeDefined()

    fireEvent.press(selectInput)

    const searchInput = await screen.findByTestId('tokenSelectSearchInput')
    expect(searchInput).toBeDefined()
    options.forEach((option) => {
      expect(
        screen.getByTestId(`tokenSelectOption__${option.value}`),
      ).toBeDefined()
    })

    fireEvent.changeText(searchInput, 'eth')
    expect(screen.queryByTestId('tokenSelectOption__usdc')).toBeNull()

    fireEvent.press(screen.getByTestId('tokenSelectOption__eth'))

    expect(
      await (
        await screen.findByTestId('tokenSelectInput')
      ).props.value,
    ).toBe('Ether')
    expect(onChange).toHaveBeenCalledWith('eth')
  })

  it('filters by address', async () => {
    const onChange = jest.fn()
    const options = [
      { name: 'Ether', symbol: 'ETH', value: 'eth', address: '0x00' },
      { name: 'Wrapped Ether', symbol: 'WETH', value: 'weth', address: '0x01' },
      { name: 'USD Coin', symbol: 'USDC', value: 'usdc', address: '0x02' },
    ]
    render(<TokenSelect options={options} onChange={onChange} />, {
      wrapper: TryrollTestProvider,
    })

    const selectInput = await screen.findByTestId('tokenSelectInput')
    expect(selectInput).toBeDefined()

    fireEvent.press(selectInput)

    const searchInput = await screen.findByTestId('tokenSelectSearchInput')
    expect(searchInput).toBeDefined()
    options.forEach((option) => {
      expect(
        screen.getByTestId(`tokenSelectOption__${option.value}`),
      ).toBeDefined()
    })

    fireEvent.changeText(searchInput, '0x02')
    expect(screen.queryByTestId('tokenSelectOption__eth')).toBeNull()
    expect(screen.queryByTestId('tokenSelectOption__weth')).toBeNull()
    expect(screen.queryByTestId('tokenSelectOption__usdc')).toBeDefined()
  })
})
