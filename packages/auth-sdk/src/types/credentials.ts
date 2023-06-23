import { InteractionType } from './interaction'
import { Token } from './token'

export type User = {
  userID: string
  username: string
  name: string
  profilePic: string
}

export type Credentials<U extends User = User> = {
  id: string
  token: Token
  user?: U
  interactionType: InteractionType
}
