'use server'

import { prisma } from '@/lib/prisma'

interface CountryCount {
  [key: string]: number
}

interface CountryPlayers {
  country: string
  players: number
}

export async function getPlayersByCountry() {
  const players = await prisma.player.findMany({
    select: {
      birthCountry: true,
    },
  })

  const countryCount = players.reduce<CountryCount>((acc, player) => {
    const country = player.birthCountry || 'Não especificado'
    acc[country] = (acc[country] || 0) + 1
    return acc
  }, {})

  let othersCount = 0
  const result: CountryPlayers[] = Object.keys(countryCount).reduce(
    (acc: CountryPlayers[], key) => {
      if (countryCount[key] < 10) {
        othersCount += countryCount[key]
      } else {
        acc.push({ country: key, players: countryCount[key] })
      }
      return acc
    },
    [],
  )

  if (othersCount > 0) {
    result.push({ country: 'Outros', players: othersCount })
  }

  return result
}
