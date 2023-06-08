export interface GetClientArgs {
  id: string
}

export interface Client {
  allowed_cors_origins: any[]
  audience: any[]
  client_id: string
  client_name: string
  client_secret_expires_at: number
  client_uri: string
  contacts: any[]
  created_at: string
  grant_types: string[]
  jwks: Record<string, string | number>
  logo_uri: string
  metadata: Record<string, string | number>
  owner: string
  policy_uri: string
  post_logout_redirect_uris: string[]
  redirect_uris: string[]
  response_types: string[]
  scope: string
  subject_type: string
  token_endpoint_auth_method: string
  tos_uri: string
  updated_at: string
  userinfo_signed_response_alg: string
}

export type GetClientResponseData = Client

export type GetClientsResponseData = Client[]

export interface GenerateClientSecretArgs {
  id: string
}
export interface GenerateClientSecretResponseData {
  secret: string
}
