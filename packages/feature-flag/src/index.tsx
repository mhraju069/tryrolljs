import {
  useEffect,
  createContext,
  PropsWithChildren,
  useReducer,
  useContext,
  ComponentType,
} from 'react'
import groupBy from 'lodash.groupby'
import {
  StaticFeatureFlagValue,
  FeatureFlagMap,
  StaticFeatureFlag,
  AsyncFeatureFlag,
  AsyncGroupFeatureFlag,
  ComputedFeatureFlag,
  FeatureFlag,
} from './types'
import { reducer } from './store'

const FeatureFlagContext = createContext<{
  flags: FeatureFlagMap
  loading: boolean
}>({ flags: {}, loading: true })

// Using polyfill for Promise.allSettled
const allSettled = <T extends unknown>(promises: Promise<T>[]) =>
  Promise.all(
    promises.map((promise) =>
      promise
        .then((value) => ({ status: 'fulfilled' as const, value }))
        .catch((reason) => ({ status: 'rejected' as const, reason })),
    ),
  )

export const FeatureFlagProvider = ({
  flags,
  children,
}: PropsWithChildren<{ flags: FeatureFlag[] }>) => {
  const groupedFeatureFlags = groupBy(flags, 'type')

  const getStaticFeatureFlags = () => {
    const staticFeatureFlags = (groupedFeatureFlags.static ??
      []) as StaticFeatureFlag[]
    return staticFeatureFlags.reduce((acc, featureFlag) => {
      return { ...acc, [featureFlag.name]: featureFlag.value }
    }, {} as FeatureFlagMap)
  }

  const getDefaultAsyncFeatureFlags = () => {
    const asyncFeatureFlags = (groupedFeatureFlags.async ??
      []) as AsyncFeatureFlag[]
    const asyncGroupFeatureFlags = (groupedFeatureFlags.asyncGroup ??
      []) as AsyncGroupFeatureFlag[]
    const allAsyncFeatureFlags = [
      ...asyncFeatureFlags,
      ...asyncGroupFeatureFlags,
    ]

    return allAsyncFeatureFlags.reduce((acc, featureFlag) => {
      if (featureFlag.type === 'async') {
        return { ...acc, [featureFlag.name]: featureFlag.defaultValue }
      }
      return { ...acc, ...featureFlag.defaultValue }
    }, {} as FeatureFlagMap)
  }

  const getComputedFeatureFlags = (featureFlags: FeatureFlagMap) => {
    const computedFeatureFlags = (groupedFeatureFlags.computed ??
      []) as ComputedFeatureFlag[]
    return computedFeatureFlags.reduce((acc, featureFlag) => {
      return {
        ...acc,
        [featureFlag.name]: featureFlag.value(featureFlags),
      }
    }, {} as FeatureFlagMap)
  }

  const initialFeatureFlags = {
    ...getStaticFeatureFlags(),
    ...getDefaultAsyncFeatureFlags(),
  }
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    flags: {
      ...initialFeatureFlags,
      ...getComputedFeatureFlags(initialFeatureFlags),
    },
  })

  const getAsyncFeatureFlags = async () => {
    const asyncFeatureFlags = (groupedFeatureFlags.async ??
      []) as AsyncFeatureFlag[]
    const asyncGroupFeatureFlags = (groupedFeatureFlags.asyncGroup ??
      []) as AsyncGroupFeatureFlag[]
    const allAsyncFeatureFlags = [
      ...asyncFeatureFlags,
      ...asyncGroupFeatureFlags,
    ]

    const promises = allAsyncFeatureFlags.map((featureFlag) =>
      featureFlag.value(),
    )
    4

    return (
      await allSettled<StaticFeatureFlagValue | FeatureFlagMap>(promises)
    ).reduce((acc, result, index) => {
      if (result.status === 'fulfilled') {
        const correspondingFeatureFlag = allAsyncFeatureFlags[index]

        if (correspondingFeatureFlag.type === 'async') {
          return {
            ...acc,
            [correspondingFeatureFlag.name]:
              result.value as StaticFeatureFlagValue,
          }
        } else {
          return {
            ...acc,
            ...(result.value as FeatureFlagMap),
          }
        }
      }

      return acc
    }, {} as FeatureFlagMap)
  }

  const initialize = async () => {
    dispatch({ type: 'initialize' })

    const featureFlags = {
      ...initialFeatureFlags,
      ...(await getAsyncFeatureFlags()),
    }
    Object.assign(featureFlags, getComputedFeatureFlags(featureFlags))

    dispatch({
      type: 'complete',
      payload: featureFlags,
    })
  }

  useEffect(() => {
    initialize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FeatureFlagContext.Provider value={state}>
      {children}
    </FeatureFlagContext.Provider>
  )
}

export const useFeatureFlag = (name: string) =>
  useContext(FeatureFlagContext).flags[name]

export const useFeatureFlagsLoading = () =>
  useContext(FeatureFlagContext).loading

export type InjectedProps = { flags: FeatureFlagMap }

export const withFeatureFlags =
  <P extends object>(Component: ComponentType<P & InjectedProps>) =>
  (props: P) =>
    (
      <FeatureFlagContext.Consumer>
        {({ flags, loading }) => (
          <Component {...props} flags={flags} flagsLoading={loading} />
        )}
      </FeatureFlagContext.Consumer>
    )
