import { Suspense } from 'react'
import { DataTableSkeleton } from './_components/data-table-skeleton'
import { PlayersList } from './_components/players-list'

export default function PlayersPage() {
  return (
    <div className="flex flex-col gap-4 justify-start items-center h-full">
      <div className="flex flex-col items-start w-full pt-8">
        <h1 className="font-bold text-5xl text-slate-800">Jogadores</h1>
        <p className="font-medium text-xl text-muted-foreground">
          Lista com todos os jogadores
        </p>
      </div>

      <div className="w-full mx-auto py-5">
        <Suspense fallback={<DataTableSkeleton />}>
          <PlayersList />
        </Suspense>
      </div>
    </div>
  )
}
