/**
 * This is created to protect our admin routes.
 * It checks if the user is authenticated and has admin privileges.
 */

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function requireAdmin() {
  const session = await auth();

  if (session?.user?.role !== "admin") {
    redirect("/unauthorized");
  }

  return session;
}
