export interface Request {
  url: string
  method: string
  body?: object
  authorization?: boolean
  headers?: Record<string, unknown>
}

export interface Config {
  baseUrl?: string
  headers?: Record<string, unknown>
}

export enum BlockState {
  Blocked = 'blocked',
  Idle = 'idle',
}

export interface RequestManagerState {
  isRefreshScheduled: boolean
  isRefreshInProgress: boolean
}
