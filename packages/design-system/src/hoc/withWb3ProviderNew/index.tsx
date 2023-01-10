import * as React from 'react'
import { Web3ProviderNew } from '../../providers'

const withWeb3ProviderNew = (component: React.ReactElement) => (
  <Web3ProviderNew>{component}</Web3ProviderNew>
)

export default withWeb3ProviderNew
