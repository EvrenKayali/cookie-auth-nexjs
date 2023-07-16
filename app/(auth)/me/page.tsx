import { getSession } from "@/lib/auth";
import { Authorize } from "../Authorize";

async function Me() {
  const session = await getSession();
  return (
    <main className="container mt-4">
      <div className="bg-secondary shadow-xl p-4">{session.user?.email}</div>
    </main>
  );
}

export default Authorize(Me);
