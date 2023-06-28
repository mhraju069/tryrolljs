import MasqueradeTokenInteraction from './masquerade-token-interaction'
import ServerTokenInteraction from './server-token-interaction'
import ClientCredentialsTokenInteraction from './client-credentials-token-interaction'
import CodeTokenInteraction from './code-token-interaction'
import SDK from './sdk'
import { Config, TokenInteraction, InteractionType } from './types'
import { throwIfNotNode } from './utils'
import { InMemoryStore, Store } from './store'

class SDKPool {
  private readonly sdks: Record<InteractionType, SDK>

  constructor(
    private readonly config: Config,
    store: Store = new InMemoryStore(),
  ) {
    throwIfNotNode()

    this.config = config

    const interactions = this.makeInteractions(store)
    this.sdks = this.makeSdks(store, interactions)
  }

  public getSDK = (type: InteractionType) => {
    return this.sdks[type]
  }

  private makeInteractions = (store: Store) => {
    return {
      [InteractionType.Code]: new CodeTokenInteraction(this.config, store),
      [InteractionType.MasqueradeToken]: new MasqueradeTokenInteraction(
        this.config,
        store,
      ),
      [InteractionType.ClientCredentials]:
        new ClientCredentialsTokenInteraction(this.config, store),
      [InteractionType.Server]: new ServerTokenInteraction(this.config, store),
    }
  }

  private makeSdks = (
    store: Store,
    interactions: Record<InteractionType, TokenInteraction<any>>,
  ) => {
    return {
      [InteractionType.Code]: new SDK(
        this.config,
        store,
        interactions[InteractionType.Code],
      ),
      [InteractionType.MasqueradeToken]: new SDK(
        this.config,
        store,
        interactions[InteractionType.MasqueradeToken],
      ),
      [InteractionType.ClientCredentials]: new SDK(
        this.config,
        store,
        interactions[InteractionType.ClientCredentials],
      ),
      [InteractionType.Server]: new SDK(
        this.config,
        store,
        interactions[InteractionType.Server],
      ),
    }
  }
}

export default SDKPool
