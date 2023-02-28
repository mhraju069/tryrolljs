import type { ValueOf } from 'type-fest'
import { SpacingValue, spacingValues } from './spacing'
import { makeStyles } from './utils'

type PaddingPostfix = '' | 't' | 'b' | 'r' | 'l' | 'v' | 'h'
type PaddingPrefix = 'p'
type PaddingKey = `${PaddingPrefix}${PaddingPostfix}${SpacingValue}`

const paddingPostfixes: PaddingPostfix[] = ['', 't', 'b', 'r', 'l', 'v', 'h']
const paddingStylePropByPostfix: Record<PaddingPostfix, string> = {
  '': 'padding',
  t: 'paddingTop',
  b: 'paddingBottom',
  r: 'paddingRight',
  l: 'paddingLeft',
  v: 'paddingVertical',
  h: 'paddingHorizontal',
}
type PaddingProperty = ValueOf<typeof paddingStylePropByPostfix>

const paddingStyles = spacingValues.reduce((acc, value) => {
  paddingPostfixes.forEach((postfix) => {
    const key: PaddingKey = `p${postfix}${value}`
    const property: PaddingProperty = paddingStylePropByPostfix[postfix]

    acc[key] = {
      [property]: value,
    }
  })

  return acc
}, {} as Record<PaddingKey, Record<PaddingProperty, SpacingValue>>)

export const padding = makeStyles(paddingStyles)
