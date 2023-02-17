export interface HasBalanceArgs {
  userId: string
  symbol: string
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
