import * as React from 'react'
import { Web3Provider } from '../../providers'

const withWeb3Provider = (component: React.ReactElement) => (
  <Web3Provider fortmaticApiKey="" portisDappID="">
    {component}
  </Web3Provider>
)

export default withWeb3Provider
