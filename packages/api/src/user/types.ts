export interface Response<T> {
  data: T
}
export interface HasBalanceArgs {
  userId: string
  tokenId: string
  amount: string
}

export interface GetUserBalancesArgs {
  userId: string
}

export interface GetUserTokenBalanceArgs {
  userId: string
  tokenId: string
}

export interface GetUserArgs {
  userId: string
}

export interface GetUserResponseData {
  userID: string
  name: string
  username: string
  profilePic: string
}
export interface GetUserBalancesResponseData {
  token: {
    uuid: string
    symbol: string
    name: string
    decimals: number
    totalSupply: string
    currentSupply: string
    creatorUserID: string
  }
  amount: string
}

export interface GetUserTokenBalanceResponseData {
  token: {
    uuid: string
    symbol: string
    name: string
    decimals: number
    totalSupply: string
    currentSupply: string
    creatorUserID: string
  }
  amount: string
}

export interface GetMeResponseData {
  userID: string
  primaryUserID: string
  username: string
  name: string
  role: string
  userType: string
  profilePic: string
  media: {
    name: string
    link: string
    type: string
  }[]
  status: string
  isPhoneVerified: boolean
  isEmailVerified: boolean
  MFAEnabled: boolean
  email: string
}

export interface HasBalanceResponseData {
  hasbalance: boolean
}

export interface ExternalUserArgs {
  userType: string
  externalUserId: string
}
export interface ExternalUserResponseData {
  userID: string
  externalUserID: string
  userType: string
}
