'use server'

import { unstable_noStore as noStore, revalidatePath } from 'next/cache'

export async function POST() {
  noStore()
  revalidatePath('/dashboard')
  revalidatePath('/sync')

  return Response.json({ message: 'success' })
}
