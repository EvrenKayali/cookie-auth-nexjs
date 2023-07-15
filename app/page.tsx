import { getSession } from "@/lib/auth";
import { UsersTable, db } from "@/data/drizzle";
import Image from "next/image";
import Link from "next/link";
import Table from "@/components/Table";

export default async function Home() {
  const session = await getSession();

  return (
    <section className="container mx-auto mt-4">
      <h1 className="text-xl font-bold">Home Page</h1>
      <p>
        <span>This is the home page.</span>{" "}
        {session.isAuthanticated ? (
          <span>
            You can visit{" "}
            <Link href="/secure" className="text-blue-500 underline">
              secure page.
            </Link>
          </span>
        ) : (
          <span>
            <Link href="/login" className="text-blue-500 underline">
              Log in
            </Link>{" "}
            to visit secure page
          </span>
        )}
      </p>
    </section>
  );
}
