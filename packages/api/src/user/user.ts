import { Call } from '../types'
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
  PlatformUserArgs,
  GetUserMasqueradeTokenArgs,
  PlatformUserTokenBalancesArgs,
  TokenSymbolType,
} from './types'

export const getMe = (call: Call) => {
  return call<Response<GetMeResponseData>>({
    url: '/v1/users/session',
    method: 'GET',
    authorization: true,
  })
}

export const hasBalance = async (
  call: Call,
  { userId, tokenId, amount }: HasBalanceArgs,
) => {
  const response = await call<Response<HasBalanceResponseData>>({
    url: `/v1/users/${userId}/hasbalance/${tokenId}/${amount}`,
    method: 'GET',
    authorization: true,
  })
  return response.data
}

export const getUserBalances = async (
  call: Call,
  { userId }: GetUserBalancesArgs,
) => {
  const response = await call<Response<GetUserBalancesResponseData[]>>({
    url: `/v1/users/${userId}/balances`,
    method: 'GET',
    authorization: true,
  })

  return response.data
}

export const getUserTokenBalance = async (
  call: Call,
  { userId, tokenId }: GetUserTokenBalanceArgs,
) => {
  const response = await call<Response<GetUserBalancesResponseData>>({
    url: `/v1/users/${userId}/balances/${tokenId}`,
    method: 'GET',
    authorization: true,
  })
  return response.data
}

export const getUser = async (call: Call, { userId }: GetUserArgs) => {
  const response = await call<Response<GetUserResponseData>>({
    url: `/v1/users/${userId}`,
    method: 'GET',
    authorization: true,
  })
  return response.data
}

export const createPlatformUser = async (
  call: Call,
  { userType, platformUserId }: PlatformUserArgs,
) => {
  const response = await call<Response<CreateExternalUserResponseData>>({
    url: `/v1/platforms/${userType}/users/${platformUserId}`,
    method: 'POST',
    body: { userType, externalUserID: platformUserId },
    authorization: true,
  })

  return response.data
}

export const getUserMasqueradeToken = async (
  call: Call,
  { userId }: GetUserMasqueradeTokenArgs,
) => {
  const response = await call<Response<{ token: string }>>({
    url: `/v1/users/${userId}/masquerade`,
    method: 'GET',
    authorization: true,
  })

  return response.data
}

export const getPlatformUserBalances = async (
  call: Call,
  { userType, platformUserId }: PlatformUserArgs,
) => {
  const response = await call<Response<{ token: string }>>({
    url: `/v1/platforms/${userType}/users/${platformUserId}/balances`,
    method: 'GET',
    authorization: true,
  })

  return response.data
}

export const getPlatformUserBalance = async (
  call: Call,
  { userType, platformUserId, tokenId }: PlatformUserTokenBalancesArgs,
) => {
  const response = await call<Response<{ token: TokenSymbolType }>>({
    url: `/v1/platforms/${userType}/users/${platformUserId}/balances/${tokenId}`,
    method: 'GET',
    authorization: true,
  })

  const token = response.data.token.symbol

  return { ...response.data, token }
}

export const getPlatformUserDepositAddress = async (
  call: Call,
  { userType, platformUserId }: PlatformUserArgs,
) => {
  const response = await call<Response<{ address: string }>>({
    url: `/v1/platforms/${userType}/users/${platformUserId}/address`,
    method: 'GET',
    authorization: true,
  })

  return response.data
}
