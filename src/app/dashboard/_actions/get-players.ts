'use server'

import { prisma } from '@/lib/prisma'
import { PlayerStatistics } from '@prisma/client'

function calculateScore(
  statistics: PlayerStatistics[],
  eventsParticipation: number,
) {
  const { goals, assists } = statistics.reduce(
    (accumulator, current) => {
      return {
        goals: accumulator.goals + current.goals,
        assists: accumulator.assists + current.assists,
      }
    },
    { goals: 0, assists: 0 },
  )

  return {
    goals,
    assists,
    score: goals + assists + eventsParticipation * 5,
  }
}

export async function getPlayers() {
  const total = await prisma.player.count()
  const output = await prisma.player.findMany({
    orderBy: {
      createdAt: 'asc',
    },
    include: {
      events: true,
      statistics: true,
    },
  })

  const players = output.map((player) => {
    const { score, goals, assists } = calculateScore(
      player.statistics,
      player.events.length,
    )

    return {
      id: player.id,
      name: player.name,
      tier: score < 15 ? 'Bronze' : score < 30 ? 'Prata' : 'Ouro',
      score,
      goals,
      assists,
      events: player.events.length,
    }
  })

  const reorder = players
    .sort((a, b) => b.score - a.score)
    .map((item, index) => {
      return { ...item, ranking: index + 1 }
    })
    .slice(0, 10)

  return {
    data: reorder,
    pagination: {
      rows: total,
    },
  }
}
