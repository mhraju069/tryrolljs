import { SessionStatus } from '../types'

const getSessionStatus = (status: SessionStatus, isUserSynced: boolean) => {
  // If session status is already stale but the user is not synced yet
  // We need to correct the status, otherwise user entity will be undefined when the status is stale
  if (status === SessionStatus.Stale && !isUserSynced) {
    return SessionStatus.Initializing
  }

  return status
}

export default getSessionStatus
