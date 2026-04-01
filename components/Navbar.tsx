"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import SignInButton from "./SignInButton";
import UserMenu from "./UserMenu";

export default function Navbar() {
  const { user, loading } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

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

          {/* Desktop Nav links */}
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

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {!loading && (user ? <UserMenu /> : <SignInButton />)}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M3 5.75A.75.75 0 013.75 5h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.75zm0 6.5A.75.75 0 013.75 11h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12.25zm0 6.5A.75.75 0 013.75 17h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-zinc-800 py-4 flex flex-col gap-4">
            <a
              href="#features"
              onClick={() => setMobileOpen(false)}
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors px-2"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors px-2"
            >
              Pricing
            </a>
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors px-2"
            >
              Dashboard
            </Link>
            <div className="pt-2 border-t border-zinc-800">
              {!loading && (user ? <UserMenu /> : <SignInButton />)}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
