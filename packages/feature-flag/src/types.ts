export type StaticFeatureFlagValue = boolean | string | number
export type FeatureFlagMap = { [key: string]: StaticFeatureFlagValue }
export type AsyncFeatureFlagValue = () => Promise<StaticFeatureFlagValue>
export type AsyncGroupFeatureFlagValue = () => Promise<FeatureFlagMap>
export type ComputedFeatureFlagValue = (
  state: FeatureFlagMap,
) => StaticFeatureFlagValue

export type StaticFeatureFlag = {
  type: 'static'
  name: string
  value: StaticFeatureFlagValue
}
export type AsyncFeatureFlag = {
  type: 'async'
  name: string
  defaultValue: StaticFeatureFlagValue
  value: AsyncFeatureFlagValue
}
export type AsyncGroupFeatureFlag = {
  type: 'asyncGroup'
  defaultValue: FeatureFlagMap
  value: AsyncGroupFeatureFlagValue
}
export type ComputedFeatureFlag = {
  type: 'computed'
  name: string
  value: ComputedFeatureFlagValue
}

export type FeatureFlag =
  | StaticFeatureFlag
  | AsyncFeatureFlag
  | AsyncGroupFeatureFlag
  | ComputedFeatureFlag
