import 'mock-match-media/jest-setup'

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')

global.navigator = {
  userAgent: 'node.js',
}
