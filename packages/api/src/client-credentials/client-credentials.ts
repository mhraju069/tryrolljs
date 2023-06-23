import { Call } from '../types'
import {
  GetClientArgs,
  GetClientResponseData,
  GetClientsResponseData,
  GenerateClientSecretArgs,
  GenerateClientSecretResponseData,
} from './types'

export const getClient = async (call: Call, { id }: GetClientArgs) => {
  return call<GetClientResponseData>({
    url: `/v2/oauth2/clients/${id}`,
    method: 'GET',
    authorization: true,
  })
}

export const getClients = async (call: Call) => {
  return call<GetClientsResponseData>({
    url: '/v2/oauth2/clients',
    method: 'GET',
    authorization: true,
  })
}

export const generateClientSecret = async (
  call: Call,
  { id }: GenerateClientSecretArgs,
) => {
  return call<GenerateClientSecretResponseData>({
    url: `/v2/oauth2/clients/${id}/secret`,
    method: 'PUT',
    body: {
      client_id: id,
    },
    authorization: true,
  })
}
