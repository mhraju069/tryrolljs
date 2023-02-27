import type { ValueOf } from 'type-fest'
import { SpacingValue, spacingValues } from './spacing'
import { makeStyles } from './utils'

type MarginPostfix = '' | 't' | 'b' | 'r' | 'l' | 'v' | 'h'
type MarginPrefix = 'm'
type MarginKey = `${MarginPrefix}${MarginPostfix}${SpacingValue}`

const marginPostfixes: MarginPostfix[] = ['', 't', 'b', 'r', 'l', 'v', 'h']
const marginStylePropByPostfix: Record<MarginPostfix, string> = {
  '': 'margin',
  t: 'marginTop',
  b: 'marginBottom',
  r: 'marginRight',
  l: 'marginLeft',
  v: 'marginVertical',
  h: 'marginHorizontal',
}
type MarginProperty = ValueOf<typeof marginStylePropByPostfix>

const marginStyles = spacingValues.reduce((acc, value) => {
  marginPostfixes.forEach((postfix) => {
    const key: MarginKey = `m${postfix}${value}`
    const property: MarginProperty = marginStylePropByPostfix[postfix]

    acc[key] = {
      [property]: value,
    }
  })

  return acc
}, {} as Record<MarginKey, Record<MarginProperty, SpacingValue>>)

export const margin = makeStyles(marginStyles)
