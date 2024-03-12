import { Suspense } from 'react'
import { DataTableSkeleton } from './_components/data-table-skeleton'
import { Ranking } from './_components/ranking'

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 justify-start items-center h-full">
      <div className="flex flex-col items-start w-full pt-8">
        <h1 className="font-bold text-5xl text-slate-800">Top 10</h1>
        <p className="font-medium text-xl text-muted-foreground">
          Jogadores que mais pontuaram
        </p>
      </div>

      <div className="w-full mx-auto py-5">
        <Suspense fallback={<DataTableSkeleton />}>
          <Ranking />
        </Suspense>
      </div>
    </div>
  )
}
