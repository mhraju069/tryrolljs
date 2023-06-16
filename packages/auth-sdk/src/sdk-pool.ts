import MasqueradeTokenInteraction from './masquerade-token-interaction'
import ServerTokenInteraction from './server-token-interaction'
import ClientCredentialsTokenInteraction from './client-credentials-token-interaction'
import CodeTokenInteraction from './code-token-interaction'
import SDK from './sdk'
import { Config, Storage, TokenInteraction, InteractionType } from './types'
import {
  addPrefixToStorage,
  makeInMemoryStorage,
  throwIfNotNode,
} from './utils'

class SDKPool {
  private readonly sdks: Record<InteractionType, SDK>

  constructor(private readonly config: Config, storage?: Storage) {
    throwIfNotNode()

    this.config = config

    const storages = this.makeStorages(storage ?? makeInMemoryStorage())
    const interactions = this.makeInteractions(storages)
    this.sdks = this.makeSdks(storages, interactions)
  }

  public getSDK = (type: InteractionType) => {
    return this.sdks[type]
  }

  private makeStorages = (storage: Storage) => {
    return {
      [InteractionType.Code]: addPrefixToStorage(storage, InteractionType.Code),
      [InteractionType.MasqueradeToken]: addPrefixToStorage(
        storage,
        InteractionType.MasqueradeToken,
      ),
      [InteractionType.ClientCredentials]: addPrefixToStorage(
        storage,
        InteractionType.ClientCredentials,
      ),
      [InteractionType.Server]: addPrefixToStorage(
        storage,
        InteractionType.Server,
      ),
    }
  }

  private makeInteractions = (storages: Record<InteractionType, Storage>) => {
    return {
      [InteractionType.Code]: new CodeTokenInteraction(
        this.config,
        storages[InteractionType.Code],
      ),
      [InteractionType.MasqueradeToken]: new MasqueradeTokenInteraction(
        this.config,
        storages[InteractionType.MasqueradeToken],
      ),
      [InteractionType.ClientCredentials]:
        new ClientCredentialsTokenInteraction(
          this.config,
          storages[InteractionType.ClientCredentials],
        ),
      [InteractionType.Server]: new ServerTokenInteraction(
        this.config,
        storages[InteractionType.Server],
      ),
    }
  }

  private makeSdks = (
    storages: Record<InteractionType, Storage>,
    interactions: Record<InteractionType, TokenInteraction<any>>,
  ) => {
    return {
      [InteractionType.Code]: new SDK(
        this.config,
        storages[InteractionType.Code],
        interactions[InteractionType.Code],
      ),
      [InteractionType.MasqueradeToken]: new SDK(
        this.config,
        storages[InteractionType.MasqueradeToken],
        interactions[InteractionType.MasqueradeToken],
      ),
      [InteractionType.ClientCredentials]: new SDK(
        this.config,
        storages[InteractionType.ClientCredentials],
        interactions[InteractionType.ClientCredentials],
      ),
      [InteractionType.Server]: new SDK(
        this.config,
        storages[InteractionType.Server],
        interactions[InteractionType.Server],
      ),
    }
  }
}

export default SDKPool
