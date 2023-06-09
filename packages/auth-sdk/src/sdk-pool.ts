import AutoLoginTokenInteraction from './auto-login-token-interaction'
import ClientCredentialsTokenInteraction from './client-credentials-token-interaction'
import CodeTokenInteraction from './code-token-interaction'
import SDK from './sdk'
import { Config, Storage, TokenInteraction, InteractionType } from './types'
import { addPrefixToStorage, makeInMemoryStorage } from './utils'

class SDKPool {
  private readonly sdks: Record<InteractionType, SDK>

  constructor(private readonly config: Config, storage?: Storage) {
    this.config = config

    const storages = this.makeStorages(storage ?? makeInMemoryStorage())
    const interactions = this.makeInteractions(storages)
    this.sdks = this.makeTokenManagers(storages, interactions)
  }

  public getSDK = (type: InteractionType) => {
    return this.sdks[type]
  }

  private makeStorages = (storage: Storage) => {
    return {
      [InteractionType.Code]: addPrefixToStorage(storage, InteractionType.Code),
      [InteractionType.AutoLoginToken]: addPrefixToStorage(
        storage,
        InteractionType.AutoLoginToken,
      ),
      [InteractionType.ClientCredentials]: addPrefixToStorage(
        storage,
        InteractionType.ClientCredentials,
      ),
    }
  }

  private makeInteractions = (storages: Record<InteractionType, Storage>) => {
    return {
      [InteractionType.Code]: new CodeTokenInteraction(
        this.config,
        storages[InteractionType.Code],
      ),
      [InteractionType.AutoLoginToken]: new AutoLoginTokenInteraction(
        this.config,
        storages[InteractionType.AutoLoginToken],
      ),
      [InteractionType.ClientCredentials]:
        new ClientCredentialsTokenInteraction(
          this.config,
          storages[InteractionType.ClientCredentials],
        ),
    }
  }

  private makeTokenManagers = (
    storages: Record<InteractionType, Storage>,
    interactions: Record<InteractionType, TokenInteraction<any>>,
  ) => {
    return {
      [InteractionType.Code]: new SDK(
        this.config,
        storages[InteractionType.Code],
        interactions[InteractionType.Code],
      ),
      [InteractionType.AutoLoginToken]: new SDK(
        this.config,
        storages[InteractionType.AutoLoginToken],
        interactions[InteractionType.AutoLoginToken],
      ),
      [InteractionType.ClientCredentials]: new SDK(
        this.config,
        storages[InteractionType.ClientCredentials],
        interactions[InteractionType.ClientCredentials],
      ),
    }
  }
}

export default SDKPool
