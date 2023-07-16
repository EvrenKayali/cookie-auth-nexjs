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
          <ul className="flex space-x-2">
            <li className="text-primary-foreground text-sm">
              <Link
                href="/about"
                className="hover:underline hover:underline-offset-4"
              >
                About
              </Link>
            </li>
            {session.isAuthanticated && (
              <li className="text-primary-foreground text-sm">
                <AppLink
                  href="/secure"
                  className="hover:underline hover:underline-offset-4"
                >
                  Secure
                </AppLink>
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
