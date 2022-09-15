import { waitFor, renderHook } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import { FeatureFlag } from './types'
import { useFeatureFlag, FeatureFlagProvider } from './index'

const getWrapper =
  (flags: FeatureFlag[]) =>
  ({ children }: PropsWithChildren<{}>) =>
    <FeatureFlagProvider flags={flags}>{children}</FeatureFlagProvider>

describe('useFeatureFlag', () => {
  it('uses static feature flag correctly', () => {
    const { result } = renderHook(() => useFeatureFlag('useFeatureX'), {
      wrapper: getWrapper([
        {
          type: 'static',
          name: 'useFeatureX',
          value: true,
        },
      ]),
    })

    expect(result.current).toBe(true)
  })

  it('uses simple computed feature flag correctly', () => {
    const { result } = renderHook(() => useFeatureFlag('useFeatureXY'), {
      wrapper: getWrapper([
        {
          type: 'static',
          name: 'useFeatureX',
          value: true,
        },
        {
          type: 'static',
          name: 'useFeatureY',
          value: false,
        },
        {
          type: 'computed',
          name: 'useFeatureXY',
          value: (flags) => flags.useFeatureX || flags.useFeatureY,
        },
      ]),
    })

    expect(result.current).toBe(true)
  })

  it('uses complex computed feature flag correctly', () => {
    const { result } = renderHook(() => useFeatureFlag('flagXYZ'), {
      wrapper: getWrapper([
        {
          type: 'static',
          name: 'flagX',
          value: 'What',
        },
        {
          type: 'static',
          name: 'flagY',
          value: ' is your name',
        },
        {
          type: 'static',
          name: 'flagZ',
          value: '???',
        },
        {
          type: 'computed',
          name: 'flagXYZ',
          value: (flags) => [flags.flagX, flags.flagY, flags.flagZ].join(''),
        },
      ]),
    })

    expect(result.current).toBe('What is your name???')
  })

  it('uses async feature flag correctly', async () => {
    const { result } = renderHook(() => useFeatureFlag('useFeatureX'), {
      wrapper: getWrapper([
        {
          type: 'async',
          name: 'useFeatureX',
          value: () => Promise.resolve(true),
          defaultValue: false,
        },
      ]),
    })

    expect(result.current).toBe(false)

    await waitFor(() => {
      expect(result.current).toBe(true)
    })
  })

  it('uses async group feature flag correctly', async () => {
    const { result } = renderHook(
      () => useFeatureFlag('externalFeatureFlagX'),
      {
        wrapper: getWrapper([
          {
            type: 'asyncGroup',
            value: () =>
              Promise.resolve({
                externalFeatureFlagX: 'bar',
              }),
            defaultValue: {
              externalFeatureFlagX: 'foo',
            },
          },
        ]),
      },
    )

    expect(result.current).toBe('foo')

    await waitFor(() => {
      expect(result.current).toBe('bar')
    })
  })

  it('uses async group with computed feature flag correctly', async () => {
    const { result } = renderHook(
      () => useFeatureFlag('computedFromExternal'),
      {
        wrapper: getWrapper([
          {
            type: 'asyncGroup',
            value: () =>
              Promise.resolve({
                externalFeatureFlagX: 'foo',
                externalFeatureFlagY: 'bar',
              }),
            defaultValue: {
              externalFeatureFlagX: 'hello',
              externalFeatureFlagY: 'world',
            },
          },
          {
            type: 'computed',
            name: 'computedFromExternal',
            value: (flags) =>
              [flags.externalFeatureFlagX, flags.externalFeatureFlagY].join(
                ' ',
              ),
          },
        ]),
      },
    )

    expect(result.current).toBe('hello world')

    await waitFor(() => {
      expect(result.current).toBe('foo bar')
    })
  })
})
