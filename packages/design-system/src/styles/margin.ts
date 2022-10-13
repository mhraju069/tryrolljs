import type { ValueOf } from 'type-fest'
import { makeStyles } from './utils'

type MarginValue = 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64
type MarginPostfix = '' | 't' | 'b' | 'r' | 'l' | 'v' | 'h'
type MarginPrefix = 'm'
type MarginKey = `${MarginPrefix}${MarginPostfix}${MarginValue}`

const marginValues: MarginValue[] = [4, 8, 16, 24, 32, 40, 48, 56, 64]
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

const marginStyles = marginValues.reduce((acc, value) => {
  marginPostfixes.forEach((postfix) => {
    const key: MarginKey = `m${postfix}${value}`
    const property: MarginProperty = marginStylePropByPostfix[postfix]

    acc[key] = {
      [property]: value,
    }
  })

  return acc
}, {} as Record<MarginKey, Record<MarginProperty, number>>)

export const margin = makeStyles(marginStyles)
