import { fireEvent, render, screen } from '@testing-library/react-native'
import { CHAIN_ID_MAIN_NET, shortenAddress } from '@roll-network/web3'
import { TryrollTestProvider } from '../../providers'
import * as utils from '../../utils'
import { WalletInfo } from '.'

const TOKEN_ADDRESS = '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1'

jest.mock('../../utils', () => ({
  ...jest.requireActual('../../utils'),
  openLink: jest.fn(),
}))

// Mock the web3 provider
jest.mock('@roll-network/web3', () => ({
  ...jest.requireActual('@roll-network/web3'),
  useWagmiActiveConnector: () => ({
    name: 'MetaMask',
  }),
  useWagmiEthAddress: () => TOKEN_ADDRESS,
  useWagmiChainID: () => CHAIN_ID_MAIN_NET,
}))

describe('WalletInfo', () => {
  beforeEach(() => {
    render(<WalletInfo />, {
      wrapper: TryrollTestProvider,
    })
  })
  it('renders short address', async () => {
    const shortAddress = shortenAddress(TOKEN_ADDRESS)
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
})
