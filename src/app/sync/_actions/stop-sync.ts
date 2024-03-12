'use server'

import { unstable_noStore as noStore, revalidatePath } from 'next/cache'

type StopSyncResponse = {
  message: string
}

export async function stopSync(): Promise<StopSyncResponse> {
  noStore()

  const result = await fetch(`${process.env.BACKEND_URL!}/sync/stop`, {
    cache: 'no-cache',
  })

  revalidatePath('/sync')

  return await result.json()
}
