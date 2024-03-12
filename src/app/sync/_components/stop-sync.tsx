'use client'

import { Button } from '@/components/ui/button'
import { stopSync } from '../_actions/stop-sync'

type StartSyncProps = {
  status: 'running' | 'stopped'
}

export function StopSync({ status }: StartSyncProps) {
  const handleStop = async () => {
    if (status === 'running') {
      await stopSync()
    }
  }

  return (
    <Button onClick={handleStop} disabled={status === 'stopped'}>
      Parar
    </Button>
  )
}
