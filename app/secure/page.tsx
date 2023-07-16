import { getSession } from "@/lib/auth";
import { Authorize } from "../(auth)/Authorize";

async function Secure() {
  const session = await getSession();
  return (
    <section className="container mx-auto mt-4 bg-secondary shadow-xl p-4">
      <h1 className="text-xl font-bold">Secure Page</h1>
      <p>
        This is a secure page. Welcome <strong>{session.user?.email}</strong>
      </p>
    </section>
  );
}

export default Authorize(Secure);
