const COULDNT_REFRESH_TOKENS_ERROR_MESSAGE = "Couldn't refresh tokens."
const INTERACTION_CHANGE_NOT_POSSIBLE_ERROR =
  'You cannot change SDK interaction when request queue is not empty.'

export class CouldntRefreshTokensError extends Error {
  constructor() {
    super(COULDNT_REFRESH_TOKENS_ERROR_MESSAGE)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export class InteractionChangeNotPossibleError extends Error {
  constructor() {
    super(INTERACTION_CHANGE_NOT_POSSIBLE_ERROR)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
