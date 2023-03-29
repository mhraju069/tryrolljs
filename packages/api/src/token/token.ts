import Client from '@tryrolljs/api-client'
import {
  GetTokenCreatorArgs,
  GetTokenCreatorResponseData,
  GetTokensArgs,
  GetTokensResponseData,
} from './types'

export const getTokens = (
  { symbol = '', contractAddress = '', limit = 10, offset = 0 }: GetTokensArgs,
  client: Client,
) => {
  const query = {
    symbol,
    contractAddress,
    limit: limit.toString(),
    offset: offset.toString(),
  }
  const params = new URLSearchParams(query).toString()
  return client.call<GetTokensResponseData>({
    url: `/v3/tokens?${params}`,
    method: 'GET',
    authorization: false,
  })
}

export const getTokenCreator = (
  { tokenId }: GetTokenCreatorArgs,
  client: Client,
) => {
  return client.call<GetTokenCreatorResponseData>({
    url: `/v1/tokens/${tokenId}/creator`,
    method: 'GET',
    authorization: false,
  })
}
