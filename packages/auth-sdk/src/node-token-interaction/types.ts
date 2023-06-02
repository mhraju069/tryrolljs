import {
  RequestTokenArgs as BaseRequestTokenArgs,
  Config as BaseConfig,
} from '../types'

export interface Config extends BaseConfig {
  apiUrl: string
  clientSecret: string
}

export interface RequestTokenArgs extends BaseRequestTokenArgs {
  clientSecret: string
}

export interface RedirectToResponse {
  redirect_to: string
}
