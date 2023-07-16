import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="container mt-4">
      <div className="bg-secondary shadow-xl p-5">
        <Skeleton className="h-4 w-[250px] bg-gray-300 mb-2" />
        <Skeleton className="h-4 w-[200px] bg-gray-300" />
      </div>
    </main>
  );
}
