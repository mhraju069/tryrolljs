import { action } from '@storybook/addon-actions'
import { Pressable } from 'react-native'
import { fromTemplate } from '../../../.storybook/utils'
import { TypographyV2, TypographyV2Props } from '.'

const storyConfig = {
  title: 'Design System/Atoms/TypographyV2',
  component: TypographyV2,
}

const DEFAULT_CHILDREN = 'Hello world'

const Template = (props: TypographyV2Props) => (
  <TypographyV2 {...props}>{props.children ?? DEFAULT_CHILDREN}</TypographyV2>
)

export const Caption2 = fromTemplate(Template, {
  variant: 'caption2',
})
export const Caption1 = fromTemplate(Template, {
  variant: 'caption1',
})
export const Text4 = fromTemplate(Template, {
  variant: 'text4',
})
export const Text3 = fromTemplate(Template, {
  variant: 'text3',
})
export const Text2 = fromTemplate(Template, {
  variant: 'text2',
})
export const Text1 = fromTemplate(Template, {
  variant: 'text1',
})
export const Sub3 = fromTemplate(Template, {
  variant: 'sub3',
})
export const Sub2 = fromTemplate(Template, {
  variant: 'sub2',
})
export const Sub1 = fromTemplate(Template, {
  variant: 'sub1',
})
export const H3 = fromTemplate(Template, {
  variant: 'h3',
})
export const H2 = fromTemplate(Template, {
  variant: 'h2',
})
export const H1 = fromTemplate(Template, {
  variant: 'h1',
})
export const NestedText = fromTemplate(Template, {
  variant: 'text2',
  children: (
    <>
      TypographyV2 can render nested texts inside like{' '}
      <TypographyV2 variant="caption1">Caption1</TypographyV2> or{' '}
      <Pressable onPress={action('onPress')}>
        <TypographyV2 variant="caption1">Pressable Caption1</TypographyV2>
      </Pressable>
      . But be aware, that nested texts should be of Text or TypographyV2 types.
    </>
  ),
})

export default storyConfig
