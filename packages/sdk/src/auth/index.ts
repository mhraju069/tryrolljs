import type { RequestTokenResponseData } from '@tryrolljs/api'
import { requestToken } from '@tryrolljs/api'
import { NoCacheError, NotAuthorizedCacheError } from './errors'
import { Config, Storage, Cache } from './types'
import { isLastUpdateTimestampExpired } from './utils'

const STORAGE_KEY = 'ROLL_AUTHSDK_AUTH'

class AuthSDK {
  private oauthConfig: Config
  private storage: Storage
  private tokenData?: RequestTokenResponseData
  private oauthCode?: string
  private lastUpdateTimestamp?: number

  constructor(config: Config, storage: Storage) {
    this.oauthConfig = config
    this.storage = storage
  }

  private async processResponse(data: RequestTokenResponseData) {
    if (data.error) {
      await this.storage.clear()
      throw new Error(data.error)
    } else {
      this.tokenData = data
      this.lastUpdateTimestamp = new Date().getTime()
      this.storage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          tokenData: this.tokenData,
          oauthCode: this.oauthCode,
          oauthConfig: this.oauthConfig,
          lastUpdateTimestamp: this.lastUpdateTimestamp,
        }),
      )
    }
  }

  public isTokenExpired() {
    return isLastUpdateTimestampExpired(
      this.lastUpdateTimestamp,
      this.tokenData?.expires_in,
    )
  }

  public async refreshTokens(force = false) {
    const hasEnoughDataToRefresh = !!(this.oauthCode && this.tokenData)

    if ((hasEnoughDataToRefresh && this.isTokenExpired()) || force) {
      const response = await requestToken({
        issuerUrl: this.oauthConfig.issuerUrl,
        grantType: 'refresh_token',
        clientId: this.oauthConfig?.clientId,
        redirectUri: this.oauthConfig?.redirectUrl,
        refreshToken: this.tokenData?.refresh_token,
        code: this.oauthCode!,
      })

      await this.processResponse(response.data)
    }
  }

  public async makeSession(oauthCode: string) {
    if (this.getAccessToken()) {
      return
    }

    const response = await requestToken({
      issuerUrl: this.oauthConfig.issuerUrl,
      code: oauthCode,
      grantType: 'authorization_code',
      redirectUri: this.oauthConfig?.redirectUrl,
      clientId: this.oauthConfig?.clientId,
    })

    this.oauthCode = oauthCode

    await this.processResponse(response.data)
  }

  public async restoreFromCache() {
    const cache = await this.storage.getItem(STORAGE_KEY)

    if (!cache) {
      throw new NoCacheError()
    }

    const { tokenData, oauthCode, lastUpdateTimestamp } = JSON.parse(
      cache,
    ) as Cache

    const isAuthorized = !!tokenData?.access_token
    if (!isAuthorized) {
      throw new NotAuthorizedCacheError()
    }

    this.tokenData = tokenData
    this.oauthCode = oauthCode
    this.lastUpdateTimestamp = lastUpdateTimestamp
  }

  public logIn() {}

  public getAccessToken() {
    return this.tokenData?.access_token
  }
}

export default AuthSDK
