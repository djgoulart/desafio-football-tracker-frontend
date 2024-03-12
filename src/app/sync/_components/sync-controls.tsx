import { getSyncStatus } from './../_actions/get-sync-status'

import { StartSync } from './start-sync'
import { StopSync } from './stop-sync'

export async function SyncControls() {
  const { status } = await getSyncStatus()

  return (
    <div className="flex gap-2">
      <StartSync status={status} />
      <StopSync status={status} />
    </div>
  )
}
