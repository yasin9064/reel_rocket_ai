"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import SignInButton from "./SignInButton";
import UserMenu from "./UserMenu";

export default function Navbar() {
  const { user, loading } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white"
              >
                <path d="M13.5 2L3 13.5h7V21l10-12h-7V2z" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg">ReelRocket AI</span>
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
            >
              Pricing
            </a>
            <Link
              href="/dashboard"
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
            >
              Dashboard
            </Link>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            {!loading && (user ? <UserMenu /> : <SignInButton />)}
          </div>
        </div>
      </div>
    </nav>
  );
}
