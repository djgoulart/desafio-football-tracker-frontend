'use client'

import { Button } from '@/components/ui/button'
import { startSync } from '../_actions/start-sync'

type StartSyncProps = {
  status: 'running' | 'stopped'
}

export function StartSync({ status }: StartSyncProps) {
  const handleStart = async () => {
    if (status === 'stopped') {
      await startSync()
    }
  }

  return (
    <Button onClick={handleStart} disabled={status === 'running'}>
      Iniciar
    </Button>
  )
}
