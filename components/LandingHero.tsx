import Link from "next/link";

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 to-black pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-800 text-purple-300 text-sm font-medium mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
          Powered by GPT-4o
        </div>

        {/* Headline */}
        <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Create Viral Reels in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
            30 Seconds
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Generate hooks, scripts, captions, and hashtags instantly using AI.
          Perfect for Instagram, YouTube, and TikTok.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-lg shadow-purple-900/40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M13.5 2L3 13.5h7V21l10-12h-7V2z" />
            </svg>
            Start Creating Free
          </Link>
          <a
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-medium text-zinc-400 hover:text-white transition-colors border border-zinc-800 hover:border-zinc-700"
          >
            Learn More
          </a>
        </div>

        {/* Social proof */}
        <p className="mt-12 text-zinc-500 text-sm">
          Join thousands of creators already making viral content
        </p>
      </div>
    </section>
  );
}
