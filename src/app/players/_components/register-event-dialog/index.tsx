'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DatePicker } from './date-picker'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { registerEventParticipation } from '../../_actions/register-event'

const schema = z.object({
  name: z.string().min(3),
  date: z.date(),
})

type FormSchema = z.infer<typeof schema>

type RegisterEventDialogProps = {
  playerId: string
  onClose?: () => void
}

export function RegisterEventDialog({
  playerId,
  onClose,
}: RegisterEventDialogProps) {
  const [open, setOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    setValue,
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  })

  const saveEvent = async ({ name, date }: FormSchema) => {
    const output = await registerEventParticipation({
      name,
      date,
      playerId,
    })

    console.log(output)

    reset()
    setOpen(false)
    onClose && onClose()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          Registrar evento
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(saveEvent)}>
          <DialogHeader>
            <DialogTitle>Participação em evento</DialogTitle>
            <DialogDescription>
              {`O jogador recebe 5 pontos por cada participação`}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Evento
              </Label>
              <Input
                id="name"
                className="col-span-3"
                placeholder="Nome do evento"
                {...register('name')}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Data
              </Label>
              <DatePicker selectEvt={(date) => setValue('date', date)} />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Salvando ...' : 'Salvar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
