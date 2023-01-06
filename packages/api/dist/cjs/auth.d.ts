export interface RequestTokenArgs {
  issuerUrl: string
  grantType: 'authorization_code' | 'refresh_token'
  clientId: string
  refreshToken?: string
  redirectUri?: string
  code: string
}
export interface RequestTokenResponseData {
  access_token: string
  expires_in: number
  refresh_token: string
  id_token: string
  error?: string
}
export declare const requestToken: ({
  issuerUrl,
  refreshToken,
  code,
  grantType,
  redirectUri,
  clientId,
}: RequestTokenArgs) => Promise<
  import('axios').AxiosResponse<RequestTokenResponseData, any>
>
