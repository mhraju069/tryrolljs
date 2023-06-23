import { Token } from './token'
import { User } from './credentials'

export enum InteractionType {
  Code = 'code',
  MasqueradeToken = 'masquerade',
  ClientCredentials = 'clientcredentials',
  Server = 'server',
}

export interface TokenInteraction<T = void> {
  type: InteractionType
  generateToken: (options: T) => Promise<Token>
  refreshToken: (token: Token) => Promise<Token>
  clearCache?: () => Promise<void>
  getLogInUrl?: () => Promise<string>
  getLogOutUrl?: (token: Token) => Promise<string>
  getUser?: (token: Token) => Promise<User>
}
