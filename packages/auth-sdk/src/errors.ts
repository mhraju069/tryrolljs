const NOT_ENOUGH_DATA_TO_REFRESH_ERROR_MESSAGE = 'Not enough data to refresh.'
const NON_NODE_ENVIRONMENT_ERROR_MESSAGE =
  'The interaction/pool can only be used in the Node environment.'

export class NotEnoughDataToRefreshError extends Error {
  constructor() {
    super(NOT_ENOUGH_DATA_TO_REFRESH_ERROR_MESSAGE)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export class NonNodeEnvironmentError extends Error {
  constructor() {
    super(NON_NODE_ENVIRONMENT_ERROR_MESSAGE)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
