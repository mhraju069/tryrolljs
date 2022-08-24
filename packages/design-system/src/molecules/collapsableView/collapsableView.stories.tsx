import { useState } from 'react'
import { titleBuilder } from '../../../.storybook/utils'
import { SubHeader } from '../../atoms'
import { margins } from '../../styles'
import { CollapsableView } from '.'

const storyConfig = {
  title: titleBuilder.molecules('CollapsableView'),
  component: CollapsableView,
}

export const Collapsable = () => {
  const [isExpanded, setIsExpanded] = useState(true)
  const toggle = () => setIsExpanded(!isExpanded)

  return (
    <div className="w-5/6">
      <CollapsableView
        title="What is Roll Staking?"
        content={
          <>
            <SubHeader>
              Roll Staking is an easy way for anyone to stake the tokens they
              hold or create staking opportunities for others. Creators who have
              their own social tokens can use Roll Staking to create liquidity
              mining campaigns, and people who hold social tokens can decide to
              stake their tokens and receive rewards for doing so.
            </SubHeader>
            <SubHeader style={[margins.mv24]}>
              Roll Staking is a web3 feature that supports any and all ERC20
              tokens, regardless of whether they were minted on Roll or not.
            </SubHeader>
            <SubHeader>
              As a creator, you can use our staking product to create a campaign
              and incentivize your community to provide liquidity for your token
              in any token pair you’d like. You do by rewarding them with tokens
              proportional to the size and the duration of the liquidity they
              provide.
            </SubHeader>
            <SubHeader style={[margins.mv24]}>
              As a token holder, when you stake your tokens, you’re essentially
              locking them in a smart contract in exchange for a percentage
              return based on how many tokens you’ve staked and for how long.
            </SubHeader>
          </>
        }
        isExpanded={isExpanded}
        toggle={toggle}
      />
    </div>
  )
}

export default storyConfig
