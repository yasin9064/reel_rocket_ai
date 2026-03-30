"use client";

import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";

export default function UserMenu() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="flex items-center gap-3">
      {user.photoURL && (
        <Image
          src={user.photoURL}
          alt={user.displayName || "User"}
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
      )}
      <button
        onClick={() => logout()}
        className="px-3 py-1.5 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
      >
        Sign out
      </button>
    </div>
  );
}
