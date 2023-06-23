export interface GetUserArgs {
  accessToken: string
  apiUrl: string
}

export interface GetUserResponseData {
  data: {
    userID: string
    username: string
    name: string
    profilePic: string
  }
}

export interface GetLogInUrlArgs {
  issuerUrl: string
  clientId: string
  redirectUrl?: string
  scopes: string[]
  codeChallenge: string
  state: string
}

export interface GetLogOutUrlArgs {
  issuerUrl: string
  idToken: string
  redirectUrl?: string
}
