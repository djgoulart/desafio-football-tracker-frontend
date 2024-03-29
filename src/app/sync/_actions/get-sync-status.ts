'use server'

import { SyncLog } from '@prisma/client'
import { unstable_noStore as noStore } from 'next/cache'

type SyncStatusResponse = {
  status: 'stopped' | 'running'
  log: SyncLog | null
  players: number
}

export async function getSyncStatus(): Promise<SyncStatusResponse> {
  noStore()
  const result = await fetch(`${process.env.BACKEND_URL!}/sync/status`, {
    next: {
      tags: ['sync-status'],
    },
  })

  return await result.json()
}
