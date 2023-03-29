export interface SendArgs {
  fromUserId: string
  symbol: string
  amount: string
  toUsername: string
  message: string
}

export interface InternalSendArgs {
  toUserID: string
  tokenID: string
  amount: string
  note: string
}

export interface GetTransactionByIdArgs {
  transactionID: string
}

export interface TransactionResponseData {
  token: {
    uuid: string
    name: string
    symbol: string
    decimals: number
    creatorUserID: string
  }
  fromUser: {
    uuid: string
    username: string
    profilePic: string
  }
  toUser: {
    uuid: string
    username: string
    profilePic: string
  }
  amount: string
  status: 'pending' | 'confirmed' | 'failed'
  type: string
  createdAt: string
}
