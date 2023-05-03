import Client from '@tryrolljs/api-client'
import {
  HasBalanceArgs,
  GetMeResponseData,
  HasBalanceResponseData,
  GetUserBalancesArgs,
  GetUserBalancesResponseData,
  GetUserArgs,
  GetUserResponseData,
  GetUserTokenBalanceArgs,
  Response,
} from './types'

export const getMe = (client: Client) => {
  return client.call<GetMeResponseData>({
    url: '/v4/users/session',
    method: 'GET',
    authorization: true,
  })
}

export const hasBalance = async (
  { userId, tokenId, amount }: HasBalanceArgs,
  client: Client,
) => {
  const response = await client.call<Response<HasBalanceResponseData>>({
    url: `/v1/users/${userId}/hasbalance/${tokenId}/${amount}`,
    method: 'GET',
    authorization: true,
  })
  return response.data
}

export const getUserBalances = async (
  { userId }: GetUserBalancesArgs,
  client: Client,
) => {
  const response = await client.call<Response<GetUserBalancesResponseData[]>>({
    url: `/v1/users/${userId}/balances`,
    method: 'GET',
    authorization: true,
  })

  return response.data
}

export const getUserTokenBalance = async (
  { userId, tokenId }: GetUserTokenBalanceArgs,
  client: Client,
) => {
  const response = await client.call<Response<GetUserBalancesResponseData>>({
    url: `/v1/users/${userId}/balances/${tokenId}`,
    method: 'GET',
    authorization: true,
  })
  return response.data
}

export const getUser = async ({ userId }: GetUserArgs, client: Client) => {
  const response = await client.call<Response<GetUserResponseData>>({
    url: `/v1/users/${userId}`,
    method: 'GET',
    authorization: true,
  })
  return response.data
}
