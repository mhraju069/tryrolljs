import { Storage, TokenInteraction } from '../types'
import { Config } from './types'
import { requestToken } from './api'

class ClientCredentialsTokenInteraction implements TokenInteraction<unknown> {
  private readonly config: Config
  private readonly storage: Storage

  constructor(config: Config, storage: Storage) {
    this.config = config
    this.storage = storage
  }

  public generateToken = async () => {
    const response = await requestToken({
      issuerUrl: this.config.issuerUrl,
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
      scopes: this.config.scopes,
    })

    return { ...response.data, last_update_at: new Date().getTime() }
  }

  public refreshToken = async () => {
    return await this.generateToken()
  }
}

export default ClientCredentialsTokenInteraction
