import type { RequestTokenResponseData } from '@tryrolljs/api'

export interface Config {
  clientId: string
  issuerUrl: string
  redirectUrl: string
  logoutRedirectUrl: string
  scopes: string[]
}

export interface Storage {
  setItem(key: string, value: string): void | Promise<void>
  getItem(key: string): string | undefined | Promise<string | undefined>
  clear(): void | Promise<void>
}

export type Cache = Partial<{
  oauthConfig: Config
  tokenData: RequestTokenResponseData
  oauthCode?: string
  lastUpdateTimestamp?: number
}>
