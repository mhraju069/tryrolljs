import { utils as etherUtils } from 'ethers'

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
    return etherUtils.getAddress(value.toLowerCase())
  } catch {
    return false
  }
}

export const etherscanAccountUrl = (address: string) =>
  `https://etherscan.io/address/${address}`
