import { getSession } from "@/lib/auth";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { logout } from "./(auth)/logoutAction";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-300`}>
        <header className="bg-slate-500 py-2">
          <div className="container flex justify-between mx-auto">
            <h1 className="text-white">
              <Link href="/">Cookie Authantication</Link>
            </h1>
            <nav>
              <ul>
                <li className="text-white text-sm">
                  <Link href="/secure">Secure</Link>
                </li>
              </ul>
            </nav>
            <div className="text-white">
              {session.user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    {session.user?.email}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <form action={logout}>
                      <DropdownMenuItem>
                        <button
                          type="submit"
                          className="w-full flex justify-start"
                        >
                          Logout
                        </button>
                      </DropdownMenuItem>
                    </form>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
