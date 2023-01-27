import {
  CHAIN_ID_GOERLI,
  CHAIN_ID_MAIN_NET,
  CHAIN_ID_MUMBAI,
  CHAIN_ID_POLYGON,
} from '../web3'
import { getEtherscanLink } from './web3'

describe('Get etherscan links', () => {
  it('Returns correct url for Mainnet', () => {
    const chainId = CHAIN_ID_MAIN_NET
    const address = '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1'
    const etherscanLink = getEtherscanLink({
      chainId,
      address,
      type: 'address',
    })
    expect(etherscanLink).toEqual(
      'https://etherscan.io/address/0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    )
  })
  it('Returns correct url for Polygon', () => {
    const chainId = CHAIN_ID_POLYGON
    const address = '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1'
    const etherscanLink = getEtherscanLink({
      chainId,
      address,
      type: 'address',
    })
    expect(etherscanLink).toEqual(
      'https://polygonscan.com/address/0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    )
  })
  it('Returns correct url for Mumbai', () => {
    const chainId = CHAIN_ID_MUMBAI
    const address = '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1'
    const etherscanLink = getEtherscanLink({
      chainId,
      address,
      type: 'token',
    })
    expect(etherscanLink).toEqual(
      'https://mumbai.polygonscan.com/token/0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    )
  })
  it('Returns correct url for Goerli', () => {
    const chainId = CHAIN_ID_GOERLI
    const address = '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1'
    const etherscanLink = getEtherscanLink({
      chainId,
      address,
      type: 'tx',
    })
    expect(etherscanLink).toEqual(
      'https://goerli.etherscan.io/tx/0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    )
  })
})
