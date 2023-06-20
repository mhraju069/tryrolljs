import { Store } from '../store'
import { TokenInteraction, Config } from '../types'
import { requestToken } from './api'

class ClientCredentialsTokenInteraction implements TokenInteraction<void> {
  constructor(
    protected readonly config: Config,
    protected readonly store: Store,
  ) {
    this.config = config
    this.store = store
  }

  public generateToken = async () => {
    const response = await requestToken({
      issuerUrl: this.config.issuerUrl,
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret ?? '',
      scopes: this.config.scopes,
    })

    return { ...response.data, last_update_at: new Date().getTime() }
  }

  public refreshToken = async () => {
    return await this.generateToken()
  }
}

export default ClientCredentialsTokenInteraction
