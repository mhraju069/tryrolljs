import type { ValueOf } from 'type-fest'
import { makeStyles } from './utils'

type PaddingValue =
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 128
  | 'auto'
type PaddingPostfix = '' | 't' | 'b' | 'r' | 'l' | 'v' | 'h'
type PaddingPrefix = 'p'
type PaddingKey = `${PaddingPrefix}${PaddingPostfix}${PaddingValue}`
type PaddingThemeKey = `${PaddingPrefix}${PaddingValue}`

const paddingValues: PaddingValue[] = [
  4,
  8,
  12,
  16,
  20,
  24,
  32,
  40,
  48,
  56,
  64,
  128,
  'auto',
]
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

const paddingStyles = paddingValues.reduce((acc, value) => {
  paddingPostfixes.forEach((postfix) => {
    const key: PaddingKey = `p${postfix}${value}`
    const property: PaddingProperty = paddingStylePropByPostfix[postfix]

    acc[key] = {
      [property]: value,
    }
  })

  return acc
}, {} as Record<PaddingKey, Record<PaddingProperty, PaddingValue>>)

export const paddingTheme = paddingValues.reduce((acc, value) => {
  acc[`p${value}`] = value
  return acc
}, {} as Record<PaddingThemeKey, PaddingValue>)

export const padding = makeStyles(paddingStyles)
