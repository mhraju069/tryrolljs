import { useState } from 'react'
import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { Input } from '../input'
import { Tooltip, TooltipProps } from '.'

const storyConfig = {
  title: titleBuilder.atoms('Tooltip'),
  component: Tooltip,
}

const Template = (props: TooltipProps) => <Tooltip {...props}>Hover me</Tooltip>

const ControlledTemplate = (props: TooltipProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Tooltip {...props} open={isOpen}>
      <Input onFocus={() => setIsOpen(true)} onBlur={() => setIsOpen(false)} />
    </Tooltip>
  )
}

export const Default = fromTemplate(Template, {
  title: 'Default',
  placement: 'bottom-start',
})
export const Dark = fromTemplate(Template, {
  title:
    'Tiers are membership levels that you can access with lots of tokens. Claim lots below to become a member of this community.',
  variant: 'dark',
  placement: 'bottom-start',
})
export const Controlled = fromTemplate(ControlledTemplate, {
  title: 'The tooltip is controlled by the consumer',
  variant: 'dark',
  placement: 'bottom-start',
})

export default storyConfig
