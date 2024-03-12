/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import { transparentize } from './utils'

ChartJS.register(ArcElement, Tooltip, Legend)

type ChartDataItem = {
  country: string
  players: number
}

type ChartProps = {
  data: ChartDataItem[]
}

function colorize(opaque: any, hover: any, ctx: any) {
  const v = ctx.parsed
  const c =
    v < -50 ? '#D60000' : v < 0 ? '#F46300' : v < 50 ? '#0358B6' : '#44DE28'

  const opacity = hover ? 1 - Math.abs(v / 150) - 0.2 : 1 - Math.abs(v / 150)

  return opaque ? c : transparentize(c, opacity)
}

export function PlayersByCountryChart({ data }: ChartProps) {
  return (
    <Doughnut
      data={{
        labels: data.map((item) => item.country),
        datasets: [
          {
            label: 'Jogadores',
            data: data.map((item) => item.players),
            hoverOffset: 4,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
          arc: {
            backgroundColor: colorize.bind(null, false, false),
          },
        },
      }}
    />
  )
}
