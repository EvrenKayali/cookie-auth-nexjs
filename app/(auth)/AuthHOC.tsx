import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";

export function Authorize(Component: React.ComponentType) {
  const Inner: React.FC = async () => {
    const session = await getSession();
    if (!session.isAuthanticated) {
      redirect("/login");
    }
    return <Component />;
  };
  return Inner;
}
