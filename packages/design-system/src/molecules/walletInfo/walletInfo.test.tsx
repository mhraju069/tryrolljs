import { fireEvent, render, screen } from '@testing-library/react-native'
import { TryrollTestProvider } from '../../providers'
import { CHAIN_ID_MAIN_NET } from '../../web3'
import * as utils from '../../utils'
import { WalletInfo } from '.'

const TOKEN_ADDRESS = '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1'

jest.mock('../../utils', () => ({
  ...jest.requireActual('../../utils'),
  openLink: jest.fn(),
}))

const copy = jest.fn()
jest.mock('../../hooks', () => ({
  ...jest.requireActual('../../hooks'),
  useClipboardWithToast: () => copy,
}))

// Mock the web3 provider
jest.mock('../../hooks/web3Wagmi', () => ({
  ...jest.requireActual('../../hooks/web3Wagmi'),
  useActiveConnector: () => ({
    name: 'MetaMask',
  }),
  useEthAddress: () => TOKEN_ADDRESS,
  useChainID: () => CHAIN_ID_MAIN_NET,
}))

describe('WalletInfo', () => {
  beforeEach(() => {
    render(<WalletInfo />, {
      wrapper: TryrollTestProvider,
    })
  })
  it('renders short address', async () => {
    const shortAddress = utils.shortenAddress(TOKEN_ADDRESS)
    const address = await screen.findByText(shortAddress)
    expect(address).toBeDefined()
  })
  it('render connector name', async () => {
    const connectorName = await screen.findByText('MetaMask')
    expect(connectorName).toBeDefined()
  })
  it('opens etherscan link if there is an address', async () => {
    const openLink = jest.spyOn(utils, 'openLink')
    const etherscanLink = await screen.findByTestId('etherscanIcon')
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
