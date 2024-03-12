'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

type EventParticipationInput = {
  name: string
  date: Date
  playerId: string
}

export async function registerEventParticipation({
  name,
  date,
  playerId,
}: EventParticipationInput) {
  const output = await prisma.events.create({
    data: {
      name,
      date,
      playerId,
    },
  })

  revalidatePath('/players')
  revalidatePath('/dashboard')

  return output
}
