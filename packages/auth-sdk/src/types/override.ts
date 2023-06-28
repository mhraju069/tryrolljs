import { User } from './credentials'
import { Token } from './token'

export interface Override {
  getUser?: <U extends User>(token: Token) => Promise<U>
}
