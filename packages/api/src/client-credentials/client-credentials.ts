import Client from '@tryrolljs/api-client'
import {
  GetClientArgs,
  GetClientResponseData,
  GetClientsResponseData,
  GenerateClientSecretArgs,
  GenerateClientSecretResponseData,
} from './types'

export const getClient = async ({ id }: GetClientArgs, client: Client) => {
  return client.call<GetClientResponseData>({
    url: `/v2/oauth2/clients/${id}`,
    method: 'GET',
    authorization: true,
  })
}

export const getClients = async (client: Client) => {
  return client.call<GetClientsResponseData>({
    url: '/v2/oauth2/clients',
    method: 'GET',
    authorization: true,
  })
}

export const generateClientSecret = async (
  { id }: GenerateClientSecretArgs,
  client: Client,
) => {
  return client.call<GenerateClientSecretResponseData>({
    url: `/v2/oauth2/clients/${id}/secret`,
    method: 'PUT',
    body: {
      client_id: id,
    },
    authorization: true,
  })
}
