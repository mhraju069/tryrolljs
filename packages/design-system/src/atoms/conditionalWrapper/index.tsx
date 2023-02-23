import { Fragment, PropsWithChildren } from 'react'

export interface ConditionalWrapperProps {
  condition: boolean
  wrapper: (children: React.ReactNode) => JSX.Element
}

export const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: PropsWithChildren<ConditionalWrapperProps>) =>
  condition ? wrapper(children) : <Fragment>{children}</Fragment>
