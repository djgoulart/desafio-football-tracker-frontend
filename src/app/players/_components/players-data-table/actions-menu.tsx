'use client'
import { MoreHorizontal } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { RegisterEventDialog } from '../register-event-dialog'
import { PlayerColumn } from './columns'
import { useState } from 'react'

type ActionsMenuProps = {
  player: PlayerColumn
}

export function ActionsMenu({ player }: ActionsMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <DropdownMenu
      open={isMenuOpen}
      onOpenChange={(isOpen) => setIsMenuOpen(isOpen)}
    >
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Ações</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <RegisterEventDialog
          playerId={player.id}
          onClose={() => setIsMenuOpen(false)}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
