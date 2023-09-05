import { fireEvent, render, screen } from '@testing-library/react-native'
import { TryrollTestProvider } from '../../providers'
import { CHAIN_ID_MAIN_NET } from '../../web3'
import * as utils from '../../utils'
import { TokenCard } from '.'

const TOKEN_ADDRESS = '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1'
const TOKEN_NAME = 'Wagmi'
const TOKEN_SYMBOL = 'WAGMI'

jest.mock('../../utils', () => ({
  ...jest.requireActual('../../utils'),
  openLink: jest.fn(),
}))

const copy = jest.fn()
jest.mock('../../atoms', () => ({
  ...jest.requireActual('../../atoms'),
  useClipboardWithToast: () => copy,
}))

describe('TokenCard', () => {
  beforeEach(() => {
    render(
      <TokenCard
        logo={TOKEN_ADDRESS}
        address="0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1"
        name={TOKEN_NAME}
        symbol={TOKEN_SYMBOL}
        chainId={CHAIN_ID_MAIN_NET}
      />,
      {
        wrapper: TryrollTestProvider,
      },
    )
  })
  it('renders short address', async () => {
    const shortAddress = utils.shortenAddress(TOKEN_ADDRESS)
    const address = await screen.findByText(shortAddress)
    expect(address).toBeDefined()
  })
  it('renders name', async () => {
    const name = await screen.findByText(TOKEN_NAME)
    expect(name).toBeDefined()
  })
  it('renders symbol', async () => {
    const symbolCopy = `$ ${TOKEN_SYMBOL}`
    const symbol = await screen.findByText(symbolCopy)
    expect(symbol).toBeDefined()
  })
  it('renders etherscan link if there is an address', async () => {
    const etherscanLink = await screen.findByText('Etherscan')
    expect(etherscanLink).toBeDefined()
  })
  it('renders draft link if there is no address', async () => {
    render(
      <TokenCard
        logo={TOKEN_ADDRESS}
        name={TOKEN_NAME}
        symbol={TOKEN_SYMBOL}
        chainId={CHAIN_ID_MAIN_NET}
      />,
      {
        wrapper: TryrollTestProvider,
      },
    )
    const draftLink = await screen.findByText('Draft')
    expect(draftLink).toBeDefined()
  })
  it('opens etherscan link if there is an address', async () => {
    const openLink = jest.spyOn(utils, 'openLink')
    const etherscanLink = await screen.findByText('Etherscan')
    fireEvent.press(etherscanLink)
    expect(openLink).toHaveBeenCalled()
  })
  it('copies address to clipboard if there is an address', async () => {
    const copyIcon = await screen.findByTestId('copyIcon')
    expect(copyIcon).toBeDefined()
    fireEvent.press(copyIcon)
    expect(copy).toHaveBeenCalled()
  })
})
