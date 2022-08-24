import { white, dodgerBlue, cyanBlue, grey } from '../../styles/colors'

export const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.18,
  shadowRadius: 20,

  elevation: 6,
}

const whiteBackgroundGradient = {
  gradientColors: [white, white],
}

// container styles by type
export const typeContainerStyles = {
  primary: {
    backgroundColor: dodgerBlue,
    gradientColors: [cyanBlue, dodgerBlue],
  },
  primary_hover: {
    backgroundColor: '#002579',
    opacity: 0.8,
    gradientColors: ['#0040D2', '#002579'],
  },
  secondary: {
    backgroundColor: white,
    borderWidth: 1,
    borderColor: dodgerBlue,
    ...whiteBackgroundGradient,
  },
  secondary_hover: {
    borderColor: '#002579',
  },
  disabled: {
    gradientColors: [grey, grey],
  },
  minimal: {
    backgroundColor: 'white',
    borderColor: 'white',
    ...whiteBackgroundGradient,
  },
  'danger-minimal': {
    backgroundColor: 'white',
    borderColor: 'white',
    ...whiteBackgroundGradient,
  },
}

// text style by type
export const typeTextStyles = {
  primary: {
    color: white,
  },
  secondary: {
    color: dodgerBlue,
  },
  secondary_hover: {
    color: '#002579',
  },
  disabled: {
    color: white,
  },
  minimal: {
    color: dodgerBlue,
  },
  'danger-minimal': {
    color: 'red',
  },
}
