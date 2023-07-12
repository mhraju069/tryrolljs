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

export interface TokenBalanceResponseData {
  token: {
    uuid: string
    name: string
    symbol: string
    decimals: number
    logo: string
    contractAddress: string
    currentSupply: string
    totalSupply: string
  }
  amount: string
  updatedAt: string
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

export interface PlatformUserArgs {
  userType: string
  platformUserId: string
}
export interface CreateExternalUserResponseData {
  userID: string
  userType: string
  platformUserID: string
}

export interface GetUserMasqueradeTokenArgs {
  userId: string
}

export interface PlatformUserTokenBalancesArgs extends PlatformUserArgs {
  tokenId: string
}
