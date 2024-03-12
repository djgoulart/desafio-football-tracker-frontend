'use client'

import { Player } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'
import { Trophy } from 'lucide-react'

import { ActionsMenu } from './actions-menu'
import { cn } from '@/lib/utils'

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
      const rank = row.getValue('ranking') as number
      return (
        <div
          className={cn(
            'text-center font-normal rounded-full w-8 h-8 flex items-center justify-center',
            rank === 1 && 'font-medium bg-yellow-500/30 py-2',
            rank === 2 && 'font-medium bg-slate-200 py-2',
            rank === 3 && 'font-medium bg-amber-700/30 py-2',
            rank >= 4 && rank <= 10 && 'font-medium bg-rose-300 ',
          )}
        >
          {row.getValue('ranking')}
        </div>
      )
    },
  },
  {
    accessorKey: 'name',
    header: () => {
      return <div className="text-left px-4">Nome</div>
    },
    cell({ row }) {
      return (
        <div className="text-left font-normal px-4">{row.getValue('name')}</div>
      )
    },
  },
  {
    accessorKey: 'tier',
    header: () => {
      return <div className="text-center">Tier</div>
    },
    cell({ row }) {
      const tier = row.getValue('tier')
      return (
        <div className="flex justify-center font-medium px-4">
          <Trophy
            className={cn(
              tier === 'Ouro' && 'text-yellow-600',
              tier === 'Prata' && 'text-gray-400',
              tier === 'Bronze' && 'text-amber-700',
            )}
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
        <div className="text-center font-medium px-4">
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
        <div className="text-center font-medium px-4">
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
        <div className="text-center font-medium px-4">
          {row.getValue('events')}
        </div>
      )
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const player = row.original

      return <ActionsMenu player={player} />
    },
  },
]
