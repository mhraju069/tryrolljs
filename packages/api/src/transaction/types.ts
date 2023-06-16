export interface Response<T> {
  data: T
}
export interface SendArgs {
  toUsername?: string
  toUser?: {
    userType: string
    platformUserId: string
  }
  tokenId: string
  amount: string
  note?: string
}

export interface GetTransactionByIdArgs {
  transactionId: string
}

export interface TransactionResponseData {
  token: {
    uuid: string
    name: string
    symbol: string
    decimals: number
    logo: string
    userID: string
    status: string
    contractAddress: string
  }
  from: {
    userID: string
    username: string
    profilePic: string
  }
  fromType: string
  to: {
    userID: string
    username: string
    name: string
    profilePic: string
  }
  toType: string
  amount: string
  status: 'pending' | 'confirmed' | 'failed' | 'pending/ledger'
  type: string
  createdAt: string
}
