import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mt-4 p-4 flex justify-center items-center w-full">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <Skeleton className="h-8 w-[400px] bg-gray-300 mb-8" />
          <div>
            <div className="mb-8 space-y-2">
              <Skeleton className="h-4 w-[200px] bg-gray-300" />
              <Skeleton className="h-8 w-[300px] bg-gray-300" />
            </div>
            <div className="mb-8 space-y-1">
              <Skeleton className="h-4 w-[200px] bg-gray-300" />
              <Skeleton className="h-8 w-[300px] bg-gray-300" />
            </div>
            <div className="mb-8 flex justify-between">
              <div className="flex ">
                <Skeleton className="h-4 w-[20px] bg-gray-300 mr-2" />
                <Skeleton className="h-4 w-[150px] bg-gray-300" />
              </div>
              <Skeleton className="h-4 w-[150px] bg-gray-300" />
            </div>
            <Skeleton className="h-8  w-full bg-gray-300" />
            <Skeleton className="h-8 bg-gray-300 mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
