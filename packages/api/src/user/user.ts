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
  CreateExternalUserResponseData,
  CreateExternalUserArgs,
  GetUserMasqueradeTokenArgs,
} from './types'

export const getMe = (client: Client) => {
  return client.call<Response<GetMeResponseData>>({
    url: '/v1/users/session',
    method: 'GET',
    authorization: true,
  })
}

export const hasBalance = async (
  client: Client,
  { userId, tokenId, amount }: HasBalanceArgs,
) => {
  const response = await client.call<Response<HasBalanceResponseData>>({
    url: `/v1/users/${userId}/hasbalance/${tokenId}/${amount}`,
    method: 'GET',
    authorization: true,
  })
  return response.data
}

export const getUserBalances = async (
  client: Client,
  { userId }: GetUserBalancesArgs,
) => {
  const response = await client.call<Response<GetUserBalancesResponseData[]>>({
    url: `/v1/users/${userId}/balances`,
    method: 'GET',
    authorization: true,
  })

  return response.data
}

export const getUserTokenBalance = async (
  client: Client,
  { userId, tokenId }: GetUserTokenBalanceArgs,
) => {
  const response = await client.call<Response<GetUserBalancesResponseData>>({
    url: `/v1/users/${userId}/balances/${tokenId}`,
    method: 'GET',
    authorization: true,
  })
  return response.data
}

export const getUser = async (client: Client, { userId }: GetUserArgs) => {
  const response = await client.call<Response<GetUserResponseData>>({
    url: `/v1/users/${userId}`,
    method: 'GET',
    authorization: true,
  })
  return response.data
}

export const createPlatformUser = async (
  client: Client,
  { userType, platformUserId }: CreateExternalUserArgs,
) => {
  const response = await client.call<Response<CreateExternalUserResponseData>>({
    url: `/v1/platforms/${userType}/users/${platformUserId}}`,
    method: 'POST',
    body: { userType, externalUserID: platformUserId },
    authorization: true,
  })

  return response.data
}

export const getUserMasqueradeToken = async (
  client: Client,
  { userId }: GetUserMasqueradeTokenArgs,
) => {
  const response = await client.call<Response<{ token: string }>>({
    url: `/v1/users/${userId}/masquerade`,
    method: 'GET',
    authorization: true,
  })

  return response.data
}
