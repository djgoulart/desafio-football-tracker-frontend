import { columns } from '@/app/dashboard/_components/ranking-datatable/columns'
import { getPlayers } from '@/app/dashboard/_actions/get-players'
import { RankingDataTable } from '@/app/dashboard/_components/ranking-datatable'

export async function Ranking() {
  const { data, pagination } = await getPlayers()

  return (
    <RankingDataTable columns={columns} data={data} pagination={pagination} />
  )
}
