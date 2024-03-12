'use client'

import { cn } from '@/lib/utils'
import { Player } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'
import { Trophy } from 'lucide-react'

export type PlayerColumn = Partial<Player> & {
  id: string
  tier: string
  ranking: number
  score: number
  goals: number
  assists: number
  events: number
}

export const columns: ColumnDef<PlayerColumn>[] = [
  {
    accessorKey: 'ranking',
    header: () => {
      return <div className="text-center">Rank</div>
    },
    cell({ row }) {
      return (
        <div
          className={cn(
            'text-center font-normal rounded-full',
            row.getValue('ranking') === 1 &&
              'font-medium bg-yellow-500/30 py-2',
            row.getValue('ranking') === 2 && 'font-medium bg-slate-200 py-2',
            row.getValue('ranking') === 3 && 'font-medium bg-amber-700/30 py-2',
          )}
        >
          {row.getValue('ranking')}
        </div>
      )
    },
  },
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'tier',
    header: () => {
      return <div className="text-center">Tier</div>
    },
    cell({ row }) {
      return (
        <div className="flex justify-center font-medium px-4">
          <Trophy
            className={
              row.getValue('tier') === 'Ouro'
                ? 'text-yellow-600'
                : row.getValue('tier') === 'Prata'
                  ? 'text-gray-400'
                  : 'text-amber-700'
            }
          />
        </div>
      )
    },
  },
  {
    accessorKey: 'score',
    header: () => {
      return <div className="text-center">Pontos</div>
    },
    cell({ row }) {
      return (
        <div className="text-center font-medium px-4">
          {row.getValue('score')}
        </div>
      )
    },
  },
  {
    accessorKey: 'goals',
    header: () => {
      return <div className="text-center">Gols</div>
    },
    cell({ row }) {
      return (
        <div className="text-center font-normal px-4">
          {row.getValue('goals')}
        </div>
      )
    },
  },
  {
    accessorKey: 'assists',
    header: () => {
      return <div className="text-center">Assistências</div>
    },
    cell({ row }) {
      return (
        <div className="text-center font-normal px-4">
          {row.getValue('assists')}
        </div>
      )
    },
  },
  {
    accessorKey: 'events',
    header: () => {
      return <div className="text-center">Eventos</div>
    },
    cell({ row }) {
      return (
        <div className="text-center font-normal px-4">
          {row.getValue('events')}
        </div>
      )
    },
  },
]
