import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native'
import { zeroAddress } from 'viem'
import { TryrollTestProvider } from '../../providers'
import { TokenSelectV2 } from '.'

const options = [
  { name: 'Ether', symbol: 'ETH', value: 'eth', address: '0x00' },
  { name: 'Wrapped Ether', symbol: 'WETH', value: 'weth', address: '0x01' },
  { name: 'USD Coin', symbol: 'USDC', value: 'usdc', address: '0x02' },
]
const onChange = jest.fn()
const onClose = jest.fn()
const onSearchContract = jest.fn()
const onSearchSymbol = jest.fn()
const label = 'Search name or paste contract address'
const placeholder = 'Select a token'

describe('TokenSelect', () => {
  beforeEach(() => {
    render(
      <TokenSelectV2
        options={options}
        onChange={onChange}
        onClose={onClose}
        label={label}
        placeholder={placeholder}
        onSearchContract={onSearchContract}
        onSearchSymbol={onSearchSymbol}
      />,
      {
        wrapper: TryrollTestProvider,
      },
    )
  })

  it('Opens modal on input press', async () => {
    const selectInput = await screen.findByTestId('tokenSelectInput')
    expect(selectInput).toBeDefined()
    fireEvent.press(selectInput)
    const searchInput = await screen.findByTestId('tokenSelectSearchInput')
    expect(searchInput).toBeDefined()
  })

  it('Close modal on close button press', async () => {
    const selectInput = await screen.findByTestId('tokenSelectInput')
    expect(selectInput).toBeDefined()
    fireEvent.press(selectInput)
    const closeButton = await screen.findByTestId('tokenSelectCloseButton')
    fireEvent.press(closeButton)
    expect(onClose).toHaveBeenCalled()
  })

  it('picks tokens', async () => {
    const selectInput = await screen.findByTestId('tokenSelectInput')
    expect(selectInput).toBeDefined()

    fireEvent.press(selectInput)

    const searchInput = await screen.findByTestId('tokenSelectSearchInput')
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

  it('filters by symbol', async () => {
    const searchInput = await screen.findByTestId('tokenSelectSearchInput')
    expect(searchInput).toBeDefined()

    options.forEach((option) => {
      expect(
        screen.getByTestId(`tokenSelectOption__${option.value}`),
      ).toBeDefined()
    })

    fireEvent.changeText(searchInput, 'usdc')
    expect(screen.queryByTestId('tokenSelectOption__eth')).toBeNull()
    expect(screen.queryByTestId('tokenSelectOption__weth')).toBeNull()
    expect(screen.queryByTestId('tokenSelectOption__usdc')).toBeDefined()
  })

  it('filters by name', async () => {
    const searchInput = await screen.findByTestId('tokenSelectSearchInput')
    expect(searchInput).toBeDefined()

    options.forEach((option) => {
      expect(
        screen.getByTestId(`tokenSelectOption__${option.value}`),
      ).toBeDefined()
    })

    fireEvent.changeText(searchInput, 'USD Coin')
    expect(screen.queryByTestId('tokenSelectOption__eth')).toBeNull()
    expect(screen.queryByTestId('tokenSelectOption__weth')).toBeNull()
    expect(screen.queryByTestId('tokenSelectOption__usdc')).toBeDefined()
  })

  it('Shows no found message', async () => {
    const searchInput = await screen.findByTestId('tokenSelectSearchInput')
    fireEvent.changeText(searchInput, 'no coin')
    const notFoundText = await screen.findByTestId('notFoundText')
    expect(notFoundText).toBeDefined()
  })

  it('shows label and placeholder', async () => {
    const placeHolderText = await screen.findByText(placeholder)
    const labelText = await screen.findByText(label)
    expect(placeHolderText).toBeDefined()
    expect(labelText).toBeDefined()
  })

  it('calls onSearchContract when search input is a valid contract address', async () => {
    const searchInput = await screen.findByTestId('tokenSelectSearchInput')
    expect(searchInput).toBeDefined()

    fireEvent.changeText(searchInput, zeroAddress)
    await waitFor(() =>
      expect(onSearchContract).toHaveBeenCalledWith(zeroAddress),
    )
  })

  it('calls onSearchSymbol when search is valid', async () => {
    const searchInput = await screen.findByTestId('tokenSelectSearchInput')
    expect(searchInput).toBeDefined()

    fireEvent.changeText(searchInput, 'MYT')
    await waitFor(() => expect(onSearchSymbol).toHaveBeenCalledWith('MYT'))
  })
})
