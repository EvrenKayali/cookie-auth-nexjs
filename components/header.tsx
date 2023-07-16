import { getSession } from "@/lib/auth";
import Link from "next/link";
import UserWidget from "./userWidget";
import { AppLink } from "./appLink";
export default async function Header() {
  const session = await getSession();
  return (
    <header className="bg-primary py-2">
      <div className="container flex justify-between">
        <h1 className="text-primary-foreground">
          <AppLink href="/">Cookie Authantication</AppLink>
        </h1>
        <nav>
          <ul>
            {session.isAuthanticated && (
              <li className="text-primary-foreground text-sm">
                <AppLink href="/secure">Secure</AppLink>
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
