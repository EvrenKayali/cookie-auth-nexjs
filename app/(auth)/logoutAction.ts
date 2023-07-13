"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  const cookieStore = cookies();

  cookieStore.set({
    name: "auth",
    value: "",
    expires: new Date("2016-10-05"),
    path: "/", // For all paths
  });
}
