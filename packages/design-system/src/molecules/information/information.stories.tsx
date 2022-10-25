import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { Caption } from '../../atoms'
import { Information, InformationProps } from '.'

const storyConfig = {
  title: titleBuilder.molecules('Information'),
  component: Information,
}

const Template = (props: InformationProps) => <Information {...props} />

export const Default = fromTemplate(Template, {
  children: [
    <Information.Item
      key="creatorWallet"
      label="Creator Wallet (90%)"
      value={
        <Caption>
          0x0e22f790d11cf748CF2e3Bd29E69a0efa928Ca2f - Roll wallet
        </Caption>
      }
    />,
    <Information.Item
      key="referralWallet"
      label="Referral Wallet (9%)"
      value={
        <Caption>
          0x7302395Da810aB151913A0563Bd519b11ec3caC0 - External wallet
        </Caption>
      }
    />,
    <Information.Item
      key="rollWallet"
      label="Roll Wallet (1%)"
      value={
        <Caption>
          0xAe4B45B64B16F772165E997181b35441c1C62CB7 - Roll wallet
        </Caption>
      }
    />,
  ],
})

export default storyConfig
