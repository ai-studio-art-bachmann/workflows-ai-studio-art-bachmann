'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function LoginButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button className="bg-gray-200 text-gray-400 px-4 py-2 rounded-md cursor-not-allowed">
        <span className="animate-pulse">...</span>
      </button>
    );
  }

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <Link 
          href="/dashboard" 
          className="text-primary-900 hover:text-primary-700 font-medium"
        >
          Dashboard
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="button-outline"
        >
          Kirjaudu ulos
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      className="button"
    >
      Kirjaudu sisään
    </button>
  );
}
