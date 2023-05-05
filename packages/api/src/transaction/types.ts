export interface SendArgs {
  toUserId: string
  tokenId: string
  amount: string
  note: string
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
