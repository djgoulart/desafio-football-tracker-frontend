'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

type ChartProps = {
  data: {
    young: number
    mid: number
    oldest: number
    remaining: number
  }
}

export function PlayersByAgeChart({
  data: { young, mid, oldest, remaining },
}: ChartProps) {
  return (
    <Pie
      data={{
        labels: ['18 a 24', '25 a 29', '30+', 'Não informado'],
        datasets: [
          {
            label: 'Jogadores',
            data: [young, mid, oldest, remaining],
            hoverOffset: 4,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54,162,235)',
              'rgb(255,205,86)',
              'rgb(224,224,224)',
            ],
          },
        ],
      }}
    />
  )
}
