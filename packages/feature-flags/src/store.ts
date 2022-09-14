import { FeatureFlagMap } from './types'

export type Action =
  | {
      type: 'initialize'
    }
  | {
      type: 'complete'
      payload: FeatureFlagMap
    }

export interface State {
  loading: boolean
  flags: FeatureFlagMap
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'initialize':
      return { ...state, loading: true }
    case 'complete':
      return { ...state, loading: false, flags: action.payload }
    default:
      throw new Error()
  }
}
