import { Suspense } from 'react'
import { PlayersByAge } from './_components/players-by-age'
import { PlayersByAgePlaceholder } from './_components/players-by-age/placeholder'
import { PlayersByCountry } from './_components/players-by-country'
import { PlayersByCountryPlaceholder } from './_components/players-by-country/placeholder'

export default async function ChartsPage() {
  return (
    <div className="flex flex-col gap-4 justify-start items-center h-full pb-2">
      <div className="flex flex-col items-start w-full pt-8">
        <h1 className="font-bold text-5xl text-slate-800">Infográficos</h1>
        <p className="font-medium text-xl text-muted-foreground">
          Gráficos para auxiliar na compreensão dos dados demográficos
        </p>
      </div>

      <div className="w-full flex items-center justify-around h-[680px]">
        <Suspense fallback={<PlayersByAgePlaceholder />}>
          <PlayersByAge />
        </Suspense>
        <Suspense fallback={<PlayersByCountryPlaceholder />}>
          <PlayersByCountry />
        </Suspense>
      </div>
      <p className="font-light text-base mt-4">
        Gráficos criados com as bibliotecas:
        <a className="" href="https://chartjs.org" target="_blank">
          <span className="text-base font-medium text-blue-600 underline underline-offset-1">
            Chart.js
          </span>
        </a>{' '}
        e{' '}
        <a className="" href="https://react-chartjs-2.js.org" target="_blank">
          <span className="text-base font-medium text-blue-600 underline underline-offset-1">
            React-Chartjs-2
          </span>
        </a>
      </p>
    </div>
  )
}
