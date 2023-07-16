import { getSession } from "@/lib/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/app/(auth)/logoutAction";
import Link from "next/link";
import { AppLink } from "./appLink";

export default async function UserWidget() {
  const session = await getSession();
  return (
    <>
      {session.isAuthanticated ? (
        <DropdownMenu>
          <DropdownMenuTrigger>{session.user?.email}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="cursor-pointer">
              <AppLink href="/me" className="w-full flex justify-start">
                Profile
              </AppLink>
            </DropdownMenuItem>
            <form action={logout}>
              <DropdownMenuItem>
                <button type="submit" className="w-full flex justify-start">
                  Logout
                </button>
              </DropdownMenuItem>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </>
  );
}
