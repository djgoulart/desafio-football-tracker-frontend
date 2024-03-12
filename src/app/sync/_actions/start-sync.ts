'use server'

import { unstable_noStore as noStore, revalidatePath } from 'next/cache'

type StartSyncResponse = {
  message: string
}

export async function startSync(): Promise<StartSyncResponse> {
  noStore()
  const result = await fetch(`${process.env.BACKEND_URL!}/sync/start`, {
    cache: 'no-cache',
  })

  revalidatePath('/sync')

  return await result.json()
}
