import { Chain } from 'wagmi'
import { hardhat, polygon, polygonMumbai, goerli, mainnet } from '@wagmi/chains'
import {
  CHAIN_ID_GOERLI,
  CHAIN_ID_HARDHAT,
  CHAIN_ID_MAIN_NET,
  CHAIN_ID_MUMBAI,
  CHAIN_ID_POLYGON,
} from '../../web3'

const MAP_CHAINS: Record<number, Chain> = {
  [CHAIN_ID_MAIN_NET]: mainnet,
  [CHAIN_ID_POLYGON]: polygon,
  [CHAIN_ID_GOERLI]: goerli,
  [CHAIN_ID_HARDHAT]: hardhat,
  [CHAIN_ID_MUMBAI]: polygonMumbai,
}

export const getChainsById = (chains: number[]) => {
  const filterdChains: Chain[] = []
  chains.forEach((chain) => {
    const validChain = MAP_CHAINS[chain]
    if (validChain) {
      filterdChains.push(validChain)
    }
  })
  return filterdChains
}
