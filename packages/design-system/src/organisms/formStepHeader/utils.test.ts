import { makeScrollToIndexFailedHandler } from './utils'
jest.useFakeTimers()
// Test for makeScrollToIndexFailedHandler
describe('makeScrollToIndexFailedHandler', () => {
  it('should call scrollToIndex on the listRef', () => {
    const scrollToIndex = jest.fn()
    const listRef = { current: { scrollToIndex } }
    const handler = makeScrollToIndexFailedHandler(listRef)
    handler({ index: 2, highestMeasuredFrameIndex: 1 })
    jest.runAllTimers()
    expect(scrollToIndex).toHaveBeenCalledWith({ index: 2 })
  })
  it('should retry 3 times', () => {
    const scrollToIndex = jest.fn()
    const listRef = { current: { scrollToIndex } }
    const handler = makeScrollToIndexFailedHandler(listRef)
    handler({ index: 2, highestMeasuredFrameIndex: 1 })
    jest.runAllTimers()
    handler({ index: 2, highestMeasuredFrameIndex: 1 })
    jest.runAllTimers()
    handler({ index: 2, highestMeasuredFrameIndex: 1 })
    jest.runAllTimers()
    handler({ index: 2, highestMeasuredFrameIndex: 1 })
    jest.runAllTimers()
    expect(scrollToIndex).toHaveBeenCalledTimes(3)
  })
  it('should retry after a timeout', () => {
    const scrollToIndex = jest.fn()
    const listRef = { current: { scrollToIndex } }
    const handler = makeScrollToIndexFailedHandler(listRef)
    handler({ index: 2, highestMeasuredFrameIndex: 1 })
    handler({ index: 2, highestMeasuredFrameIndex: 1 })
    jest.runAllTimers()
    handler({ index: 2, highestMeasuredFrameIndex: 1 })
    jest.runAllTimers()
    expect(scrollToIndex).toHaveBeenCalledTimes(2)
  })
})
