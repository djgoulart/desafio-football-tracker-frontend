import { SyncStatus } from './_components/sync-status'
import { Suspense } from 'react'
import { SyncControls } from './_components/sync-controls'
import { SyncSkeleton } from './_components/sync-skeleton'

export default async function SyncPage() {
  return (
    <div className="flex flex-col gap-4 justify-start items-center h-full">
      <div className="flex flex-col items-start w-full pt-8">
        <h1 className="font-bold text-5xl text-slate-800">Sincronização</h1>
        <p className="font-medium text-xl text-muted-foreground">
          Sincronização em segundo plano com a API
        </p>
        <p className="font-light text-base mt-4">
          Parte dos registros da aplicação são obtidos através da API{' '}
          <a className="" href="https://www.api-football.com/" target="_blank">
            <span className="text-base font-medium text-blue-600 underline underline-offset-1">
              api-football.com
            </span>
          </a>{' '}
          e em virtude da limitação do número de requests que podemos fazer por
          dia, a sincronização é feita aos poucos, sob demanda. Quando todos os
          registros forem sincronizados essa funcionalidade será desabilitada.
        </p>
      </div>

      <div className="w-full flex flex-col h-[680px]">
        <div className="w-full mx-auto py-5">
          <Suspense fallback={<SyncSkeleton />}>
            <SyncStatus />

            <div className="w-full my-5">
              <SyncControls />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  )
}
