import { getSession } from "@/lib/auth";
import Link from "next/link";
import UserWidget from "./userWidget";
export default async function Header() {
  const session = await getSession();
  return (
    <header className="bg-primary py-2">
      <div className="container flex justify-between">
        <h1 className="text-primary-foreground">
          <Link href="/">Cookie Authantication</Link>
        </h1>
        <nav>
          <ul>
            {session.isAuthanticated && (
              <li className="text-primary-foreground text-sm">
                <Link href="/secure">Secure</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="text-primary-foreground w-72 flex justify-end">
          <UserWidget />
        </div>
      </div>
    </header>
  );
}
