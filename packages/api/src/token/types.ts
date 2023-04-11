export interface GetTokensArgs {
  symbol?: string
  limit?: number
  offset?: number
  contractAddress?: string
}

export interface GetTokenCreatorArgs {
  tokenId: string
}

export interface GetTokensResponseData {
  limit: number
  offset: number
  sort: string
  totalRows: number
  rows: {
    uuid: string
    name: string
    symbol: string
    decimals: number
    logo: string
    contractAddress: string
    currentSupply: string
    totalSupply: string
  }[]
}

export interface GetTokenCreatorResponseData {
  userID: string
  name: string
  username: string
  profilePic: string
}
