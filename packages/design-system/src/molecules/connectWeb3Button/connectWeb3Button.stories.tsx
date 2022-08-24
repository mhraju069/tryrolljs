import { useState } from 'react'
import { titleBuilder } from '../../../.storybook/utils'
import { withThemeProvider } from '../../providers/theme/withProvider'
import { ConnectWeb3Options } from '../connectWeb3Options'
import { withWeb3Provider } from '../../providers/web3'
import { useWeb3ConnectorsCtx } from '../../providers/web3Connectors'
import { ConnectWeb3Button } from '.'

const conf = {
  title: titleBuilder.molecules('ConnectWeb3Button'),
  component: ConnectWeb3Button,
}

export const Default = () => {
  return withWeb3Provider(withThemeProvider(<StoryComponent />))
}

const StoryComponent = () => {
  const [showOptions, setShowOptions] = useState(false)
  const { isActivating } = useWeb3ConnectorsCtx()
  return (
    <div>
      <ConnectWeb3Button
        activity={isActivating}
        onPress={() => setShowOptions(true)}
      />
      {showOptions && (
        <ConnectWeb3Options onClose={() => setShowOptions(!showOptions)} />
      )}
    </div>
  )
}

export default conf
