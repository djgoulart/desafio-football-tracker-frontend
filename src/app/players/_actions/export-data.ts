'use server'

import { unstable_noStore as noStore } from 'next/cache'

type ExportResponse = {
  message: string
}

export async function exportData(): Promise<ExportResponse> {
  noStore()
  const result = await fetch(`${process.env.BACKEND_URL!}/export`, {
    cache: 'no-cache',
  })

  return await result.json()
}
