"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SignInButton from "./SignInButton";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
        <div className="w-16 h-16 mb-6 rounded-full bg-zinc-900 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-zinc-600"
          >
            <path d="M13.5 2L3 13.5h7V21l10-12h-7V2z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Sign in to continue
        </h1>
        <p className="text-zinc-400 mb-6">
          You need to sign in to access the dashboard
        </p>
        <SignInButton />
      </div>
    );
  }

  return <>{children}</>;
}
