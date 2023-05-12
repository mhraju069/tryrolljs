export enum Event {
  Unauthorized = 'unauthorized',
}

export interface Request {
  url: string
  method: string
  body?: object
  authorization?: boolean
  headers?: Record<string, unknown>
}

export interface Config {
  baseUrl?: string
  extraHeaders?: Record<string, unknown>
}

export enum BlockState {
  Blocked = 'blocked',
  Idle = 'idle',
}
