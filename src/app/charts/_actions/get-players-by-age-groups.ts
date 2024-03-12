'use server'

import { prisma } from '@/lib/prisma'

export async function getPlayersByAgeGroups() {
  const ageGroup1 = await prisma.player.count({
    where: {
      age: {
        gte: 18,
        lte: 24,
      },
    },
  })

  const ageGroup2 = await prisma.player.count({
    where: {
      age: {
        gte: 25,
        lte: 29,
      },
    },
  })

  const ageGroup3 = await prisma.player.count({
    where: {
      age: {
        gte: 30,
      },
    },
  })

  const remainingPlayers = await prisma.player.count({
    where: {
      NOT: [
        {
          age: {
            gte: 18,
          },
        },
      ],
    },
  })

  return {
    young: ageGroup1,
    mid: ageGroup2,
    oldest: ageGroup3,
    remaining: remainingPlayers,
  }
}
