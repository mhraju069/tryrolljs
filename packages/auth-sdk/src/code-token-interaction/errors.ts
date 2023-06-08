const ID_TOKEN_MISSING_ERROR_MESSAGE = 'Id token is missing.'
const CODE_VERIFIER_MISSING_ERROR_MESSAGE = 'Code verifier is missing.'

export class IdTokenMissingError extends Error {
  constructor() {
    super(ID_TOKEN_MISSING_ERROR_MESSAGE)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export class CodeVerifierMissingError extends Error {
  constructor() {
    super(CODE_VERIFIER_MISSING_ERROR_MESSAGE)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
