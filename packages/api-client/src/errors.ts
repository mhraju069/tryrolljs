const COULDNT_REFRESH_TOKENS_ERROR_MESSAGE = "Couldn't refresh tokens."

export class CouldntRefreshTokensError extends Error {
  constructor() {
    super(COULDNT_REFRESH_TOKENS_ERROR_MESSAGE)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
