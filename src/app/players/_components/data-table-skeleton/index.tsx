import { Skeleton } from '@/components/ui/skeleton'

export function DataTableSkeleton() {
  return (
    <div className="rounded-md border h-[680px] p-2 flex flex-col gap-2">
      <Skeleton className="w-full h-14" />
      <div className="flex gap-4">
        <Skeleton className="w-full mt-3 h-10" />
        <Skeleton className="w-full mt-3 h-10" />
        <Skeleton className="w-full mt-3 h-10" />
        <Skeleton className="w-full mt-3 h-10" />
      </div>
      <div className="flex gap-4">
        <Skeleton className="w-full mt-3 h-10" />
        <Skeleton className="w-full mt-3 h-10" />
        <Skeleton className="w-full mt-3 h-10" />
        <Skeleton className="w-full mt-3 h-10" />
      </div>
      <div className="flex gap-4">
        <Skeleton className="w-full mt-3 h-10" />
        <Skeleton className="w-full mt-3 h-10" />
        <Skeleton className="w-full mt-3 h-10" />
        <Skeleton className="w-full mt-3 h-10" />
      </div>
      <div className="flex gap-4">
        <Skeleton className="w-full mt-3 h-10" />
        <Skeleton className="w-full mt-3 h-10" />
        <Skeleton className="w-full mt-3 h-10" />
        <Skeleton className="w-full mt-3 h-10" />
      </div>
    </div>
  )
}
