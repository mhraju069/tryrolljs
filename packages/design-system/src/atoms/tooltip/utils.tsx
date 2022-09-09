import { ReactNode } from 'react'
import { Body } from '../typography'

export const asTextNode = (node: ReactNode, color?: string) =>
  typeof node === 'string' ? <Body color={color}>{node}</Body> : node
