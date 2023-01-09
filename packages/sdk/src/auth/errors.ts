const NO_CACHE_ERROR_MESSAGE = "Can't restore from cache because it's empty."
const NO_AUTHORIZED_CACHE_ERROR_MESSAGE =
  "Can't restore from cache because the cache's user is unauthorized."

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
