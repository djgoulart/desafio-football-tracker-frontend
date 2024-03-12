import { BarChart2, CloudDownload, Trophy, Users } from 'lucide-react'
import Link from 'next/link'

export function Navbar() {
  return (
    <aside className="bg-slate-900 w-52 flex flex-col items-start py-10">
      <div className="flex-grow">
        <div className="flex gap-2 items-center justify-center text-slate-200/50 hover:text-slate-200/90 transition-all py-3 pl-8 w-full">
          <Trophy width={18} />
          <Link href="/dashboard" className="font-light text-base flex-grow">
            Top 10
          </Link>
        </div>
        <div className="flex gap-2 items-center justify-center text-slate-200/50 hover:text-slate-200/90 transition-all py-2 pl-8 w-full">
          <Users width={18} />
          <Link href="/players" className="font-light text-base flex-grow">
            Jogadores
          </Link>
        </div>
        <div className="flex gap-2 items-center justify-center text-slate-200/50 hover:text-slate-200/90 transition-all py-2 pl-8 w-full">
          <BarChart2 width={18} />
          <Link href="/charts" className="font-light text-base flex-grow">
            Infográficos
          </Link>
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-center justify-center text-slate-200/50 hover:text-slate-200/90 transition-all py-2 pl-8 w-full">
          <CloudDownload width={18} />
          <Link href="/sync" className="font-light text-base flex-grow">
            API Sync
          </Link>
        </div>
      </div>
    </aside>
  )
}
