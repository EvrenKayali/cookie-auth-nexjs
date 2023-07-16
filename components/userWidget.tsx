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
            <form action={logout}>
              <DropdownMenuItem>
                <button type="submit" className="w-full flex justify-start">
                  Logout
                </button>
              </DropdownMenuItem>
            </form>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href="/me" className="w-full flex justify-start">
                Profile
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </>
  );
}
