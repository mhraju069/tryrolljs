const NOT_ENOUGH_DATA_TO_REFRESH_ERROR_MESSAGE = 'Not enough data to refresh.'
const NON_NODE_ENVIRONMENT_ERROR_MESSAGE =
  'The interaction/pool can only be used in the Node environment.'
const INVALID_GENERATE_TOKEN_ARGUMENTS_ERROR_MESSAGE =
  'Invalid generateToken arguments.'
const USER_ID_REQUIRED_ERROR_MESSAGE = 'User ID is required.'

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

export class InvalidGenerateTokenArgumentsError extends Error {
  constructor() {
    super(INVALID_GENERATE_TOKEN_ARGUMENTS_ERROR_MESSAGE)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export class UserIdRequiredError extends Error {
  constructor() {
    super(USER_ID_REQUIRED_ERROR_MESSAGE)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
