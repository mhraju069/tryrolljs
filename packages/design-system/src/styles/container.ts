import { makeStyles } from './utils'

export const container = makeStyles({
  shadowXL: {
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },

  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 5,
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  halfWidth: {
    width: '50%',
  },
  fullHeight: {
    height: '100%',
  },
  flex1: {
    flex: 1,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  inputRadius: {
    borderRadius: 3,
  },
  buttonRadius: {
    borderRadius: 3,
  },
  row: {
    flexDirection: 'row',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  positionAbsolute: {
    position: 'absolute',
  },
  borderRadiusSM: {
    borderRadius: 4,
  },
  borderRadius: {
    borderRadius: 8,
  },
  borderRadiusXL: {
    borderRadius: 12,
  },
  borderRadius2XL: {
    borderRadius: 16,
  },
  borderRadius3XL: {
    borderRadius: 24,
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
})
