import { getPlayersByCountry } from '../../_actions/get-players-by-country'
import { PlayersByCountryChart } from '../charts/players-by-country'

export async function PlayersByCountry() {
  const playersByCountry = await getPlayersByCountry()

  const later = new Promise((resolve) => {
    setTimeout(() => {
      resolve('ok')
    }, 3000)
  })

  await later

  return (
    <div className="flex flex-col gap-4 w-full max-w-[440px] border rounded-lg p-2 items-center">
      <h2 className="text-center font-medium">Jogadores por país</h2>
      <div className="w-[440px]">
        <PlayersByCountryChart data={playersByCountry} />
      </div>
    </div>
  )
}
