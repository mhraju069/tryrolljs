import { InteractionType, SDKPool } from '@roll-network/auth-sdk'
import { Config } from './types'
import Client from './client'

export default class ClientPool {
  private clients: Record<InteractionType, Client>

  constructor(config: Config, sdkPool: SDKPool) {
    this.clients = {
      [InteractionType.Code]: new Client(
        config,
        sdkPool.getSDK(InteractionType.Code),
      ),
      [InteractionType.ClientCredentials]: new Client(
        config,
        sdkPool.getSDK(InteractionType.ClientCredentials),
      ),
      [InteractionType.MasqueradeToken]: new Client(
        config,
        sdkPool.getSDK(InteractionType.MasqueradeToken),
<<<<<<< HEAD
      ),
      [InteractionType.Server]: new Client(
        config,
        sdkPool.getSDK(InteractionType.Server),
=======
>>>>>>> 936b88f (Rename autologin to masquerade & serverbrowser to server)
      ),
      [InteractionType.Server]: new Client(
        config,
        sdkPool.getSDK(InteractionType.Server),
      ),
    }
  }

  public getClient = (interactionType: InteractionType) => {
    return this.clients[interactionType]
  }
}
