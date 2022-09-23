import { FC, Fragment } from 'react'

export interface ConditionalWrapperProps {
  condition: boolean
  wrapper: (children: React.ReactNode) => JSX.Element
}

export const ConditionalWrapper: FC<ConditionalWrapperProps> = ({
  condition,
  wrapper,
  children,
}) => (condition ? wrapper(children) : <Fragment>{children}</Fragment>)
