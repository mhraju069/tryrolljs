import Color from 'color'
import { white, dodgerBlue, cyanBlue, grey, lightGray } from '../../styles'
import type { ButtonProps } from './types'

type ColorMap = {
  text: string
  backgroundGradient: [string, string]
  borderColor?: string
  hover: {
    backgroundGradient: [string, string]
  }
}

const getHoverColor = (color: string) => Color(color).darken(0.05).hex()

const colorMapByVariant: Record<ButtonProps['variant'], ColorMap> = {
  primary: {
    text: white,
    backgroundGradient: [cyanBlue, dodgerBlue],
    borderColor: undefined,
    hover: {
      backgroundGradient: [getHoverColor(cyanBlue), getHoverColor(dodgerBlue)],
    },
  },
  secondary: {
    text: grey,
    backgroundGradient: [white, white],
    borderColor: lightGray,
    hover: {
      backgroundGradient: [getHoverColor(white), getHoverColor(white)],
    },
  },
}

const disabledColors: ColorMap = {
  text: white,
  backgroundGradient: [grey, grey],
  borderColor: undefined,
  hover: {
    backgroundGradient: [grey, grey],
  },
}

const invertColors = (colorMap: ColorMap): ColorMap => {
  return {
    text: colorMap.backgroundGradient[1],
    backgroundGradient: [colorMap.text, colorMap.text],
    borderColor: colorMap.borderColor
      ? undefined
      : colorMap.backgroundGradient[1],
    hover: {
      backgroundGradient: [
        getHoverColor(colorMap.text),
        getHoverColor(colorMap.text),
      ],
    },
  }
}

export const getColors = ({
  disabled,
  variant,
  inverted,
}: Pick<ButtonProps, 'variant' | 'disabled' | 'inverted'>) => {
  if (disabled) {
    return disabledColors
  }

  if (inverted) {
    return invertColors(colorMapByVariant[variant])
  }

  return colorMapByVariant[variant]
}
