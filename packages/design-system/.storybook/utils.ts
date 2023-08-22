import { FunctionComponent } from 'react'

export const fromTemplate = <P>(
  component: FunctionComponent<P>,
  args: Partial<P> = {},
) => Object.assign(component.bind({}), { args })
