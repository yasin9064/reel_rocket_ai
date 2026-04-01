"use client";

import { useState } from "react";
import type {
  Platform,
  ScriptStyle,
  Duration,
  GenerateScriptResponse,
} from "@/lib/types";

const PLATFORMS: { value: Platform; label: string }[] = [
  { value: "instagram", label: "Instagram Reels" },
  { value: "youtube", label: "YouTube Shorts" },
  { value: "tiktok", label: "TikTok" },
];

const STYLES: { value: ScriptStyle; label: string }[] = [
  { value: "Educational", label: "Educational" },
  { value: "Storytelling", label: "Storytelling" },
  { value: "Motivational", label: "Motivational" },
  { value: "Funny", label: "Funny" },
  { value: "Controversial", label: "Controversial" },
  { value: "Luxury", label: "Luxury / Aesthetic" },
  { value: "Dark Psychology", label: "Dark Psychology" },
  { value: "Faceless Documentary", label: "Faceless Documentary" },
];

const DURATIONS: { value: Duration; label: string }[] = [
  { value: 15, label: "15 sec" },
  { value: 30, label: "30 sec" },
  { value: 60, label: "60 sec" },
];

interface ScriptFormProps {
  onResult: (result: GenerateScriptResponse) => void;
  onScriptGenerated?: (
    result: GenerateScriptResponse,
    topic: string,
    platform: string,
    style: string,
    duration: number
  ) => void;
}

export default function ScriptForm({ onResult, onScriptGenerated }: ScriptFormProps) {
  const [topic, setTopic] = useState("");
  const [niche, setNiche] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [platform, setPlatform] = useState<Platform>("instagram");
  const [style, setStyle] = useState<ScriptStyle>("Educational");
  const [duration, setDuration] = useState<Duration>(30);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!topic.trim()) {
      setError("Please enter a topic");
      return;
    }

    if (topic.trim().length > 200) {
      setError("Topic must be 200 characters or less");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/generate-script", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: topic.trim(),
          platform,
          style,
          duration,
          niche: niche.trim() || undefined,
          targetAudience: targetAudience.trim() || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to generate script. Please try again.");
      }

      const data: GenerateScriptResponse = await res.json();
      onResult(data);
      if (onScriptGenerated) {
        onScriptGenerated(data, topic.trim(), platform, style, duration);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Topic */}
      <div className="flex flex-col gap-2">
        <label htmlFor="topic" className="text-sm font-medium text-zinc-300">
          Topic <span className="text-purple-400">*</span>
        </label>
        <div className="relative">
          <textarea
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. How to earn money online, 3 AI tools students should use..."
            maxLength={200}
            rows={3}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
          />
          <span className="absolute bottom-3 right-3 text-xs text-zinc-500">
            {topic.length}/200
          </span>
        </div>
      </div>

      {/* Niche */}
      <div className="flex flex-col gap-2">
        <label htmlFor="niche" className="text-sm font-medium text-zinc-300">
          Niche <span className="text-zinc-600">(optional)</span>
        </label>
        <input
          id="niche"
          type="text"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          placeholder="e.g. Money, Fitness, Tech..."
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
        />
      </div>

      {/* Target Audience */}
      <div className="flex flex-col gap-2">
        <label htmlFor="audience" className="text-sm font-medium text-zinc-300">
          Target Audience <span className="text-zinc-600">(optional)</span>
        </label>
        <input
          id="audience"
          type="text"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
          placeholder="e.g. College students, Entrepreneurs..."
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
        />
      </div>

      {/* Platform */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-zinc-300">Platform</label>
        <div className="flex gap-3">
          {PLATFORMS.map((p) => (
            <button
              key={p.value}
              type="button"
              onClick={() => setPlatform(p.value)}
              className={`flex-1 py-2.5 px-3 rounded-xl text-sm font-medium border transition-all ${
                platform === p.value
                  ? "bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-900/30"
                  : "bg-zinc-900 text-zinc-400 border-zinc-700 hover:border-zinc-600"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Style */}
      <div className="flex flex-col gap-2">
        <label htmlFor="style" className="text-sm font-medium text-zinc-300">
          Script Style
        </label>
        <select
          id="style"
          value={style}
          onChange={(e) => setStyle(e.target.value as ScriptStyle)}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow appearance-none cursor-pointer"
        >
          {STYLES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {/* Duration */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-zinc-300">Duration</label>
        <div className="flex gap-3">
          {DURATIONS.map((d) => (
            <button
              key={d.value}
              type="button"
              onClick={() => setDuration(d.value)}
              className={`flex-1 py-2.5 px-3 rounded-xl text-sm font-medium border transition-all ${
                duration === d.value
                  ? "bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-900/30"
                  : "bg-zinc-900 text-zinc-400 border-zinc-700 hover:border-zinc-600"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-900/30 border border-red-800 rounded-xl px-4 py-3 text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-4 rounded-xl text-base font-semibold bg-purple-600 hover:bg-purple-500 disabled:bg-purple-900 disabled:text-purple-300 text-white transition-all shadow-lg shadow-purple-900/30 disabled:shadow-none flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Generating...
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M13.5 2L3 13.5h7V21l10-12h-7V2z" />
            </svg>
            Generate Viral Script
          </>
        )}
      </button>
    </form>
  );
}
