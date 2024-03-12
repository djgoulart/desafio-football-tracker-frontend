import { format } from 'date-fns'
import { getSyncStatus } from './../_actions/get-sync-status'

export async function SyncStatus() {
  const { status, log, players } = await getSyncStatus()

  return (
    <div>
      <h2 className="text-primary font-bold text-lg text-left my-4">
        Status:{' '}
        <span className="text-muted-foreground">
          {status === 'stopped' ? 'Parado' : 'Em andamento'}
        </span>
      </h2>

      <p>
        Registros sincronizados: <b>{players}</b> / 8.820
      </p>
      <p>
        Última sincronização:{' '}
        {(log && format(log?.createdAt, 'dd/MM/yyyy H:mm')) ||
          'Nunca sincronizou'}
      </p>
    </div>
  )
}
