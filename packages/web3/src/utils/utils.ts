import { getAddress } from 'viem'
import {
  CHAIN_ID_FORM,
  CHAIN_ID_FORM_TESTNET,
  CHAIN_ID_GOERLI,
  CHAIN_ID_MAIN_NET,
  CHAIN_ID_MUMBAI,
  CHAIN_ID_POLYGON,
  CHAIN_ID_SEPOLIA,
} from '../connectors'

export function shortenAddress(address: string, digits: number = 4) {
  if (!isAddress(address)) {
    return 'Invalid address'
  }
  return `${address.substring(0, digits + 2)}...${address.substring(
    42 - digits,
  )}`
}

export function isAddress(value: string) {
  try {
    return getAddress(value.toLowerCase())
  } catch {
    return false
  }
}

/**
 * @deprecated Use getEtherscanLink instead.
 */
export const etherscanAccountUrl = (address: string) =>
  `https://etherscan.io/address/${address}`

const ETHERSCAN_DATA: Record<number, { domain: string; prefix?: string }> = {
  [CHAIN_ID_MAIN_NET]: {
    domain: 'etherscan.io',
  },
  [CHAIN_ID_SEPOLIA]: {
    domain: 'etherscan.io',
    prefix: 'sepolia.',
  },
  [CHAIN_ID_GOERLI]: {
    domain: 'etherscan.io',
    prefix: 'goerli.',
  },
  [CHAIN_ID_POLYGON]: {
    domain: 'polygonscan.com',
  },
  [CHAIN_ID_MUMBAI]: {
    domain: 'polygonscan.com',
    prefix: 'mumbai.',
  },
  [CHAIN_ID_FORM_TESTNET]: {
    domain: 'form.network',
    prefix: 'testnet-explorer.',
  },
  [CHAIN_ID_FORM]: {
    domain: 'form.network',
    prefix: 'explorer.',
  },
}

export const getEtherscanLink = ({
  chainId,
  address,
  type,
}: {
  chainId: number
  address: string
  type: 'address' | 'token' | 'tx'
}) => {
  const { prefix = '', domain } =
    ETHERSCAN_DATA[chainId] || ETHERSCAN_DATA[CHAIN_ID_MAIN_NET]
  return `https://${prefix}${domain}/${type}/${address}`
}
