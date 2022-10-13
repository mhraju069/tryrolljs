import { white, dodgerBlue, cyanBlue, grey } from '../../styles'

export const buttonShadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.18,
  shadowRadius: 20,
  elevation: 6,
}

export const buttonGradient = {
  primary: [cyanBlue, dodgerBlue],
  primaryHover: ['#0040D2', '#002579'],
  secondary: [white, white],
  secondaryHover: undefined,
  disabled: [grey, grey],
  disabledHover: undefined,
  minimal: [white, white],
  minimalHover: undefined,
}

export const button = {
  primary: {
    backgroundColor: dodgerBlue,
  },
  primaryHover: {
    backgroundColor: '#002579',
    opacity: 0.8,
  },
  secondary: {
    backgroundColor: white,
    borderWidth: 1,
    borderColor: dodgerBlue,
  },
  secondaryHover: {
    borderColor: '#002579',
  },
  disabled: {},
  disabledHover: {},
  minimal: {
    backgroundColor: 'white',
    borderColor: 'white',
  },
  minimalHover: {},
}

export const buttonText = {
  primary: {
    color: white,
  },
  primaryHover: {
    color: white,
  },
  secondary: {
    color: dodgerBlue,
  },
  secondaryHover: {
    color: '#002579',
  },
  disabled: {
    color: white,
  },
  disabledHover: {
    color: white,
  },
  minimal: {
    color: dodgerBlue,
  },
  minimalHover: {
    color: dodgerBlue,
  },
}
