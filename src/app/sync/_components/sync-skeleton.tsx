import { Skeleton } from '@/components/ui/skeleton'

export function SyncSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="w-[200px] h-8" />
      <Skeleton className="w-[400px] h-4" />
      <Skeleton className="w-[400px] h-4" />
      <div className="flex gap-2 mt-4">
        <Skeleton className="w-[120px] h-10" />
        <Skeleton className="w-[120px] h-10" />
      </div>
    </div>
  )
}
