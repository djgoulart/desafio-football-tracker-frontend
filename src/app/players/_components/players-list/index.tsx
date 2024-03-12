import { columns } from '@/app/players/_components/players-data-table/columns'
import { getPlayers } from '@/app/players/_actions/get-players'
import { PlayersDataTable } from '../players-data-table'

export async function PlayersList() {
  const { data, pagination } = await getPlayers()

  return (
    <PlayersDataTable columns={columns} data={data} pagination={pagination} />
  )
}
