import { TypographyBase, TypographyBaseProps } from '..'
import { useTheme } from '../..'

export type AnchorProps = {
  children: string
  href: string
  target?: string
}

export const Anchor = ({
  children,
  href,
  fontSize,
  target = '_blank',
}: AnchorProps & Pick<TypographyBaseProps, 'fontSize'>) => {
  const theme = useTheme()

  return (
    <a href={href} target={target}>
      <TypographyBase color={theme.text.highlight} fontSize={fontSize}>
        {children}
      </TypographyBase>
    </a>
  )
}
