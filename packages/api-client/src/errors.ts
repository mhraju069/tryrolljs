const COULDNT_REFRESH_TOKENS = "Couldn't refresh tokens."

export class CouldntRefreshTokens extends Error {
  constructor() {
    super(COULDNT_REFRESH_TOKENS)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
