const NO_CACHE_ERROR_MESSAGE = "Can't restore from cache because it's empty."
const NO_AUTHORIZED_CACHE_ERROR_MESSAGE =
  "Can't restore from cache because the cache's user is unauthorized."
const NOT_ENOUGH_DATA_TO_REFRESH_ERROR_MESSAGE = 'Not enough data to refresh.'
const ID_TOKEN_MISSING_ERROR_MESSAGE = 'Id token is missing.'

export class NoCacheError extends Error {
  constructor() {
    super(NO_CACHE_ERROR_MESSAGE)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export class NotAuthorizedCacheError extends Error {
  constructor() {
    super(NO_AUTHORIZED_CACHE_ERROR_MESSAGE)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export class NotEnoughDataToRefreshError extends Error {
  constructor() {
    super(NOT_ENOUGH_DATA_TO_REFRESH_ERROR_MESSAGE)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export class IdTokenMissingError extends Error {
  constructor() {
    super(ID_TOKEN_MISSING_ERROR_MESSAGE)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
