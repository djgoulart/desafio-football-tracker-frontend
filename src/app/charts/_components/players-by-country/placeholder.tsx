import { Skeleton } from '@/components/ui/skeleton'

export async function PlayersByCountryPlaceholder() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[440px] border rounded-lg p-2 items-center">
      <Skeleton className="w-full h-6" />
      <div className="w-full flex gap-3 items-center justify-around">
        <Skeleton className="w-[60px] h-4" />
        <Skeleton className="w-[60px] h-4" />
        <Skeleton className="w-[60px] h-4" />
        <Skeleton className="w-[60px] h-4" />
      </div>
      <Skeleton className="w-[250px] h-[250px] rounded-full" />
    </div>
  )
}
