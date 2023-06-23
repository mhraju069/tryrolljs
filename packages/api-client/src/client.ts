import SDK from '@roll-network/auth-sdk'
import { Config, Request } from './types'
import RequestManager from './request-manager'

const NO_USER_ID = 'nouser'

export default class Client {
  private readonly managers: Record<string, RequestManager>

  constructor(private readonly config: Config, private readonly sdk: SDK) {
    this.config = config
    this.sdk = sdk
    this.managers = { [NO_USER_ID]: new RequestManager(config, sdk) }
  }

  public call = async <T = any>(request: Request, userId?: string) => {
    const manager = this.getRequestManager(userId)
    return await manager.call<T>(request)
  }

  public getCall =
    (userId?: string) =>
    <T = any>(request: Request) => {
      return this.call<T>(request, userId)
    }

  private getRequestManager = (userId?: string) => {
    const manager = userId ? this.managers[userId] : this.managers[NO_USER_ID]
    if (manager) {
      return manager
    }

    const newManager = new RequestManager(this.config, this.sdk, userId)
    this.managers[userId ?? NO_USER_ID] = newManager
    return newManager
  }

  public getBaseUrl = (): string => {
    return this.config.baseUrl || ''
  }
}
