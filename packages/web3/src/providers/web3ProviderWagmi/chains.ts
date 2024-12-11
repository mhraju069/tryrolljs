import { Chain } from 'wagmi'
import { CHAIN_ID_FORM_TESTNET } from '../../connectors'

const testnetRpcUrl = 'https://sepolia-rpc.form.network/http'
const testnetExplorerUrl = 'https://sepolia-explorer.form.network/'

export const formTestnet = {
  id: CHAIN_ID_FORM_TESTNET,
  name: 'Form Testnet',
  network: 'form-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: [testnetRpcUrl] },
    default: { http: [testnetRpcUrl] },
  },
  blockExplorers: {
    etherscan: {
      name: 'FormTestnetExplorer',
      url: testnetExplorerUrl,
    },
    default: {
      name: 'FormTestnetExplorer',
      url: testnetExplorerUrl,
    },
  },
} as const satisfies Chain

const rpcUrl = 'https://rpc.form.network/http'
const explorerUrl = 'https://explorer.form.network/'

export const form = {
  id: 478,
  name: 'Form',
  network: 'form',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: [rpcUrl] },
    default: { http: [rpcUrl] },
  },
  blockExplorers: {
    etherscan: {
      name: 'FormExplorer',
      url: explorerUrl,
    },
    default: {
      name: 'FormExplorer',
      url: explorerUrl,
    },
  },
} as const satisfies Chain
