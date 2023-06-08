import {
  Token as BaseToken,
  RequestTokenResponseData as BaseRequestTokenResponseData,
} from '../types'

export interface RequestTokenArgs {
  clientSecret: string
  clientId: string
  issuerUrl: string
  scopes: string[]
}

export interface Token extends BaseToken {
  token_type: string
}

export interface RequestTokenResponseData extends BaseRequestTokenResponseData {
  token_type: string
}
