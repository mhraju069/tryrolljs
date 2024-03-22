import { Chain } from 'wagmi'
import { CHAIN_ID_FORM_TESTNET } from '../../connectors'

const rpcUrl = 'https://form-testnet.alt.technology'
const explorerUrl = 'https://form-testnet-explorer.alt.technology'

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
    public: { http: [rpcUrl] },
    default: { http: [rpcUrl] },
  },
  blockExplorers: {
    etherscan: {
      name: 'FormTestnetExplorer',
      url: explorerUrl,
    },
    default: {
      name: 'FormTestnetExplorer',
      url: explorerUrl,
    },
  },
} as const satisfies Chain
