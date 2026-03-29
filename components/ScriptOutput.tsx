"use client";

import CopyButton from "./ui/CopyButton";
import type { GenerateScriptResponse } from "@/lib/types";

interface ScriptOutputProps {
  result: GenerateScriptResponse;
}

export default function ScriptOutput({ result }: ScriptOutputProps) {
  const hashtagString = result.hashtags.join(" ");
  const scriptText = result.script
    .map((seg) => `[${seg.timestamp}] ${seg.text}`)
    .join("\n");

  return (
    <div className="flex flex-col gap-4">
      {/* Hook */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 relative">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wide">
            Hook
          </h3>
          <div className="absolute top-3 right-3">
            <CopyButton text={result.hook} />
          </div>
        </div>
        <p className="text-lg font-medium text-white leading-relaxed pr-20">
          {result.hook}
        </p>
      </div>

      {/* Script */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 relative">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wide">
            Script
          </h3>
          <div className="absolute top-3 right-3">
            <CopyButton text={scriptText} />
          </div>
        </div>
        <div className="flex flex-col gap-3 pr-20">
          {result.script.map((seg, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-zinc-500 text-sm font-mono whitespace-nowrap">
                {seg.timestamp}
              </span>
              <span className="text-zinc-200 leading-relaxed">{seg.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Shots */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 relative">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wide">
            Shot Suggestions
          </h3>
          <div className="absolute top-3 right-3">
            <CopyButton text={result.shots.join("\n")} />
          </div>
        </div>
        <ul className="flex flex-col gap-2 pr-20">
          {result.shots.map((shot, i) => (
            <li key={i} className="flex gap-2 text-zinc-300">
              <span className="text-purple-400">•</span>
              {shot}
            </li>
          ))}
        </ul>
      </div>

      {/* Caption */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 relative">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wide">
            Caption
          </h3>
          <div className="absolute top-3 right-3">
            <CopyButton text={result.caption} />
          </div>
        </div>
        <p className="text-zinc-200 leading-relaxed pr-20">{result.caption}</p>
      </div>

      {/* Hashtags */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 relative">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wide">
            Hashtags
          </h3>
          <div className="absolute top-3 right-3">
            <CopyButton text={hashtagString} />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 pr-20">
          {result.hashtags.map((tag, i) => (
            <span
              key={i}
              className="text-sm px-2.5 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 relative">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wide">
            Call to Action
          </h3>
          <div className="absolute top-3 right-3">
            <CopyButton text={result.cta} />
          </div>
        </div>
        <p className="text-zinc-200 leading-relaxed pr-20">{result.cta}</p>
      </div>
    </div>
  );
}
