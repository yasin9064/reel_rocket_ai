"use client";

import { useState } from "react";
import ScriptForm from "./ScriptForm";
import ScriptOutput from "./ScriptOutput";
import type { GenerateScriptResponse } from "@/lib/types";

export default function DashboardClient() {
  const [result, setResult] = useState<GenerateScriptResponse | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">
            Create Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Viral Script
            </span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Enter your topic and let AI craft a scroll-stopping reel in seconds
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Form */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 lg:p-8">
            <h2 className="text-xl font-semibold mb-6 text-white">
              Script Details
            </h2>
            <ScriptForm onResult={setResult} />
          </div>

          {/* Right: Output */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 lg:p-8">
            <h2 className="text-xl font-semibold mb-6 text-white">
              Generated Script
            </h2>
            {result ? (
              <ScriptOutput result={result} />
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
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
                <p className="text-zinc-500 text-lg mb-2">
                  Your viral script will appear here
                </p>
                <p className="text-zinc-600 text-sm">
                  Fill out the form and click Generate
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
