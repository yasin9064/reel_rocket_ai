import Link from "next/link";

export default function LandingCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Ready to go{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            viral?
          </span>
        </h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          Stop spending hours on scripts. Let AI do the heavy lifting so you can
          focus on creating amazing content.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-lg font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-lg shadow-purple-900/40"
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
        <p className="mt-6 text-zinc-600 text-sm">
          No credit card required • 3 free scripts per day
        </p>
      </div>
    </section>
  );
}
