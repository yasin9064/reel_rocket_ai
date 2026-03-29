const FEATURES = [
  {
    title: "Viral Hooks",
    description:
      "AI-crafted attention-grabbing openings that stop the scroll and make viewers watch till the end.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M13.5 2L3 13.5h7V21l10-12h-7V2z" />
      </svg>
    ),
  },
  {
    title: "Timestamped Scripts",
    description:
      "Perfectly timed scripts with timestamps so you know exactly what to say and when.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Shot-by-Shot Directions",
    description:
      "Clear visual directions for every scene so you know exactly what to film.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M4.5 3A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3h-15zM9 9a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-4a1 1 0 01-1-1V9z" />
      </svg>
    ),
  },
  {
    title: "Platform Optimized",
    description:
      "Content tailored for Instagram Reels, YouTube Shorts, or TikTok algorithms.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    title: "Engaging Captions",
    description:
      "Scroll-stopping captions optimized for maximum engagement and shares.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm4.5 5a1.5 1.5 0 011.5-1.5h5a1.5 1.5 0 011.5 1.5v5a1.5 1.5 0 01-1.5 1.5h-5a1.5 1.5 0 01-1.5-1.5v-5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Trending Hashtags",
    description:
      "Hashtag suggestions optimized for your topic and target platform.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M11.32 6.177a.75.75 0 010 1.06L8.56 9.97a.75.75 0 01-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 011.06-1.06l2.72 2.72 2.72-2.72a.75.75 0 111.06 1.06L11.32 6.177zM3.78 12a.78.78 0 010 1.56.78.78 0 010-1.56zm13.44 0a.78.78 0 010 1.56.78.78 0 010-1.56zm-9.96 3.06a.75.75 0 00-1.06-1.06L3.5 17.56V12a.75.75 0 00-1.5 0v8a.75.75 0 001.5 0v-5.56l2.72 2.72a.75.75 0 101.06-1.06L4.22 12.94z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function LandingFeatures() {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything you need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              go viral
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            From hook to hashtag, we generate the complete package so you can
            start filming faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors group"
            >
              <div className="w-12 h-12 mb-5 rounded-xl bg-purple-900/30 flex items-center justify-center text-purple-400 group-hover:text-purple-300 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
