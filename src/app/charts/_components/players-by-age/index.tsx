import { PlayersByAgeChart } from '../charts/players-by-age'
import { getPlayersByAgeGroups } from '../../_actions/get-players-by-age-groups'

export async function PlayersByAge() {
  const playersByAge = await getPlayersByAgeGroups()

  const later = new Promise((resolve) => {
    setTimeout(() => {
      resolve('ok')
    }, 3000)
  })

  await later

  return (
    <div className="flex flex-col gap-4 w-full max-w-[440px] border rounded-lg p-2 items-center">
      <h2 className="text-center font-medium">Jogadores por faixa etária</h2>
      <div className="w-[440px]">
        <PlayersByAgeChart data={playersByAge} />
      </div>
    </div>
  )
}
