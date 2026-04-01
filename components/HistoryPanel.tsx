"use client";

import type { ScriptHistoryItem } from "@/lib/types";

interface HistoryPanelProps {
  history: ScriptHistoryItem[];
  onSelect: (item: ScriptHistoryItem) => void;
  onClose: () => void;
  onClear: () => void;
}

export default function HistoryPanel({
  history,
  onSelect,
  onClose,
  onClear,
}: HistoryPanelProps) {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 lg:p-8 h-fit">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-purple-400"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">History</h2>
            <p className="text-zinc-500 text-sm">{history.length} script{history.length !== 1 ? "s" : ""} saved</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {history.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-zinc-900 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-zinc-600"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <p className="text-zinc-500 text-sm">No scripts yet</p>
          <p className="text-zinc-600 text-xs mt-1">Your generated scripts will appear here</p>
        </div>
      ) : (
        <div className="space-y-3">
          {history.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelect(item)}
              className="w-full text-left p-4 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all group"
            >
              <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate group-hover:text-purple-300 transition-colors">
                    {item.topic}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 capitalize">
                      {item.platform}
                    </span>
                    <span className="text-xs text-zinc-600">{item.style}</span>
                    <span className="text-xs text-zinc-600">·</span>
                    <span className="text-xs text-zinc-600">{item.duration}s</span>
                  </div>
                  <p className="text-zinc-600 text-xs mt-1.5">
                    {new Date(item.createdAt).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors mt-1 flex-shrink-0"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </button>
          ))}

          {history.length > 0 && (
            <button
              onClick={onClear}
              className="w-full mt-4 py-2.5 text-sm text-zinc-500 hover:text-red-400 border border-zinc-800 hover:border-red-900/50 rounded-xl transition-all"
            >
              Clear History
            </button>
          )}
        </div>
      )}
    </div>
  );
}
