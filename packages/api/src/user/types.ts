export interface HasBalanceArgs {
  userId: string
  symbol: string
  amount: string
}

export interface GetUserBalancesArgs {
  userId: string
}

export interface GetUserTokenBalanceArgs {
  userId: string
  symbol: string
}

export interface GetUserArgs {
  userId: string
}

export interface GetUserResponseData {
  uuid: string
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
  value: string
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
  value: string
}

// ! This is the response data for the v3 endpoint only (not v4)
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
  tokens: {
    uuid: string
    name: string
    symbol: string
    decimals: number
    logo: string
    userID: string
    status: string
  }[]
  wallets: {
    uuid: string
    name: string
    userID: string
    type: string
    balances: {
      uuid: string
      token: {
        name: string
        symbol: string
        logo: string
        decimals: number
        userID: string
        status: string
      }
      amount: {
        maxDenomination: number
        minDenomination: number
        decimals: number
      }
    }[]
    address: string
  }[]
}

export interface HasBalanceResponseData {
  hasbalance: boolean
}
