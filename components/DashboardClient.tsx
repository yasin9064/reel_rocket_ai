"use client";

import { useState, useEffect } from "react";
import ScriptForm from "./ScriptForm";
import ScriptOutput from "./ScriptOutput";
import HistoryPanel from "./HistoryPanel";
import type { GenerateScriptResponse, ScriptHistoryItem } from "@/lib/types";
import { useAuth } from "@/contexts/AuthContext";

const STORAGE_KEY = (uid: string) => `reel-rocket-history-${uid}`;

function generateId() {
  return Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
}

export default function DashboardClient() {
  const { user } = useAuth();
  const [result, setResult] = useState<GenerateScriptResponse | null>(null);
  const [history, setHistory] = useState<ScriptHistoryItem[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Load history from localStorage when user changes
  useEffect(() => {
    if (user?.uid) {
      const stored = localStorage.getItem(STORAGE_KEY(user.uid));
      if (stored) {
        try {
          setHistory(JSON.parse(stored));
        } catch {
          setHistory([]);
        }
      }
    } else {
      setHistory([]);
    }
  }, [user?.uid]);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    if (user?.uid && history.length > 0) {
      localStorage.setItem(STORAGE_KEY(user.uid), JSON.stringify(history));
    }
  }, [history, user?.uid]);

  function handleScriptGenerated(data: GenerateScriptResponse, topic: string, platform: string, style: string, duration: number) {
    setResult(data);
    const newItem: ScriptHistoryItem = {
      id: generateId(),
      createdAt: new Date().toISOString(),
      topic,
      platform: platform as ScriptHistoryItem["platform"],
      style: style as ScriptHistoryItem["style"],
      duration: duration as ScriptHistoryItem["duration"],
      result: data,
    };
    setHistory((prev) => [newItem, ...prev]);
  }

  function handleSelectHistory(item: ScriptHistoryItem) {
    setResult(item.result);
    setShowHistory(false);
  }

  function handleClearHistory() {
    setHistory([]);
    if (user?.uid) {
      localStorage.removeItem(STORAGE_KEY(user.uid));
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
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

          {/* History toggle */}
          {history.length > 0 && (
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all text-sm font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              History
              <span className="px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 text-xs">
                {history.length}
              </span>
            </button>
          )}
        </div>

        {/* Main content */}
        {showHistory ? (
          /* History view */
          <div className="max-w-md mx-auto">
            <HistoryPanel
              history={history}
              onSelect={handleSelectHistory}
              onClose={() => setShowHistory(false)}
              onClear={handleClearHistory}
            />
          </div>
        ) : (
          /* Two column layout */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Form */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 lg:p-8">
              <h2 className="text-xl font-semibold mb-6 text-white">
                Script Details
              </h2>
              <ScriptForm onResult={setResult} onScriptGenerated={handleScriptGenerated} />
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
        )}

        {/* History shortcut in bottom right when not viewing history */}
        {!showHistory && history.length > 0 && (
          <button
            onClick={() => setShowHistory(true)}
            className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/30 transition-all text-sm font-medium z-40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {history.length} saved script{history.length !== 1 ? "s" : ""}
          </button>
        )}
      </div>
    </div>
  );
}
