import { getSession } from "@/lib/auth";
import { Authorize } from "../Authorize";
import { db } from "@/data/drizzle";
import { users } from "@/data/entities";
import { eq } from "drizzle-orm";

async function Me() {
  const session = await getSession();
  const user = await db.query.users.findFirst({
    where: eq(users.id, Number(session.user?.sub)),
  });
  return (
    <main className="container mt-4">
      <div className="bg-secondary shadow-xl p-4">
        <h3 className="font-bold">{user?.name}</h3>
        {session.user?.email}
      </div>
    </main>
  );
}

export default Authorize(Me);
