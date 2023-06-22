import type { Request } from '@roll-network/api-client'

export type Call = <T>(request: Request) => Promise<T>
