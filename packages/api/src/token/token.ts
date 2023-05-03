import Client from '@tryrolljs/api-client'
import {
  GetTokenCreatorArgs,
  GetTokenCreatorResponseData,
  GetTokensArgs,
  GetTokensResponseData,
  Response,
} from './types'

export const getTokens = async (
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
  const response = await client.call<Response<GetTokensResponseData>>({
    url: `/v1/tokens?${params}`,
    method: 'GET',
    authorization: false,
  })
  console.log(response)
  return response.data
}

export const getTokenCreator = async (
  { tokenId }: GetTokenCreatorArgs,
  client: Client,
) => {
  const response = await client.call<Response<GetTokenCreatorResponseData>>({
    url: `/v1/tokens/${tokenId}/creator`,
    method: 'GET',
    authorization: false,
  })
  return response.data
}
