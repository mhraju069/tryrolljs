import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { TypographyV2, TypographyV2Props } from '.'

const storyConfig = {
  title: titleBuilder.atoms('TypographyV2'),
  component: TypographyV2,
}

const Template = (props: TypographyV2Props) => (
  <TypographyV2 {...props}>Hello world</TypographyV2>
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

export default storyConfig
