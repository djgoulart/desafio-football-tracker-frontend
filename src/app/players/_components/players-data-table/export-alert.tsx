import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { MouseEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { exportData } from '@/app/players/_actions/export-data'

export function ExportAlert() {
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  const handleClick = async (e: MouseEvent) => {
    e.preventDefault()
    if (!loading) {
      setLoading(true)
      await exportData()

      toast({
        title: 'Exportação iniciada',
        description: 'Aguarde alguns minutos e verifique a planilha',
        action: (
          <ToastAction altText="Ver planilha" asChild>
            <a
              href="https://docs.google.com/spreadsheets/d/1RgNmoyI4uJPZILHdnt6buvAPiqtVAOciJe1W7oMcSCM/edit?usp=sharing"
              target="_blank"
            >
              Ver planilha
            </a>
          </ToastAction>
        ),
      })
      setLoading(false)
      setIsOpen(false)
      e.persist()
    }
  }
  return (
    <AlertDialog open={isOpen} onOpenChange={() => setIsOpen((old) => !old)}>
      <AlertDialogTrigger asChild>
        <Button>Exportar para o Google Spreadsheets</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Detalhes sobre a exportação</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div>
              <p>
                Ao confirmar a exportação os dados na{' '}
                <a
                  href="https://docs.google.com/spreadsheets/d/1RgNmoyI4uJPZILHdnt6buvAPiqtVAOciJe1W7oMcSCM/edit?usp=sharing"
                  target="_blank"
                >
                  <span className="text-medium text-blue-600 underline underline-offset-2">
                    planilha do google
                  </span>
                </a>{' '}
                serão substituídos pelos registros atuais.{' '}
              </p>
              <p className="text-red-600 text-sm mt-2">
                Não será possível desfazer esta ação.
              </p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleClick} disabled={loading}>
            {loading ? 'loading...' : 'Seguir com a exportação'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
