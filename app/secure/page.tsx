import { getSession } from "@/lib/auth";
import { Authorize } from "../(auth)/AuthHOC";

async function Secure() {
  const session = await getSession();
  session.user;
  return (
    <section className="container mx-auto mt-4">
      <h1 className="text-xl font-bold">Secure Page</h1>
      <p>This is a secure page. Welcome {session.user?.email}</p>
    </section>
  );
}

export default Authorize(Secure);
